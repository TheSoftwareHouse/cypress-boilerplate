import HeaderComponent from '../components/headerComponent';

import BasePage from './basePage';

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.tsh.io';
    this.elements = {};
    this.components = {
      header: new HeaderComponent(),
    };
  }

  open() {
    cy.visit(this.url);

    return this;
  }

  testTitle() {
    cy.title().should('equal', this.commonData.title.home);

    return this;
  }

  testCommonElements() {
    this.testTitle();
    this.components.header.testLogoPresence();

    return this;
  }

  goToCareerPage() {
    this.components.header.goToCareerPage();

    return this;
  }
}

export default HomePage;
