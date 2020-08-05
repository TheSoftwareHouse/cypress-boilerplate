import BaseComponent from './baseComponent';

class HeaderComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: '.site-header__logo',
      navigationLink: '.nav-list__link',
    };
  }

  testLogoPresence() {
    cy.isVisible(this.elements.logo);

    return this;
  }

  goToCareerPage() {
    cy.get(this.elements.navigationLink).contains(this.commonData.header.career).click();

    return this;
  }
}

export default HeaderComponent;
