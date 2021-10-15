import BaseComponent from './base.component';

class HeaderComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: '.main-logo',
      homePagelogo: '.site-header__logo',
      navigationLink: '.nav-list__link-title',
    };
  }

  public testLogoPresence(isHomePage: boolean = false) {
    if (isHomePage) {
      cy.isVisible(this.elements.homePagelogo);
    } else {
      cy.isVisible(this.elements.logo);
    }
  }

  public goToCareerPage() {
    cy.get(this.elements.navigationLink).contains(this.commonData.header.career).click();
  }
}

export default HeaderComponent;
