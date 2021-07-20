import BaseComponent from './base.component';

class HeaderComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: '.site-header__logo',
      navigationLink: '.nav-list__link',
    };
  }

  public testLogoPresence() {
    cy.isVisible(this.elements.logo);
  }

  public goToCareerPage() {
    cy.get(this.elements.navigationLink).contains(this.commonData.header.career).click();
  }
}

export default HeaderComponent;
