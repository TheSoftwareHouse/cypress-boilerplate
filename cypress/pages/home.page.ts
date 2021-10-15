import HeaderComponent from '../components/header.component';

import BasePage from './base.page';

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.tsh.io';
    this.elements = {};
    this.components = {
      header: new HeaderComponent(),
    };
  }

  public testTitle() {
    cy.title().should('equal', this.commonData.title.home);
  }

  public testCommonElements(isHomePage: boolean = false) {
    this.testTitle();
    this.components.header.testLogoPresence(isHomePage);
  }

  public goToCareerPage() {
    this.components.header.goToCareerPage();
  }
}

export default HomePage;
