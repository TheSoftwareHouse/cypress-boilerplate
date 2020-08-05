class RedirectLinksEndpoint {
  constructor() {
    this.url = '/wp-json/custom_endpoint/v1/redirect_links';
    this.alias = 'redirectLinkResponse';
  }

  getResponse() {
    cy.request('GET', this.url).as(this.alias);

    return this;
  }

  testStatusCode() {
    cy.get(`@${this.alias}`).its('status').should('equal', 200);

    return this;
  }

  testBody() {
    cy.get(`@${this.alias}`).its('body').should('have.length', 4);
    cy.get(`@${this.alias}`)
      .its('body')
      .each((value) => expect(value).to.have.all.keys('group', 'link_structure'));

    return this;
  }
}

export default RedirectLinksEndpoint;
