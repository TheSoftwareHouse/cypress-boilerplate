import BenefitsComponent from '../components/benefits.component';
import HeaderComponent from '../components/header.component';

import BasePage from './base.page';

class CareerPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.tsh.io/career';
    this.elements = {
      activeTab: '.career__tab.is-active',
      offer: '.offer-preview-box',
      offerSection: '[id="job-offers"]',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
    };
  }

  public testTitle() {
    cy.url().then((url) => {
      if (url.includes(this.commonData.path.careerEN)) {
        cy.title().should('equal', this.commonData.title.careerEN);
      } else {
        cy.title().should('equal', this.commonData.title.careerPL);
      }
    });
  }

  public testOffersCount() {
    cy.get(this.elements.offer).its('length').should('be.greaterThan', 0);
  }

  public testCommonElements() {
    this.testTitle();

    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();
  }

  public goToFirstOfferDetails() {
    cy.get(this.elements.offerSection).find(this.elements.offer).first().click();
  }
}

export default CareerPage;
