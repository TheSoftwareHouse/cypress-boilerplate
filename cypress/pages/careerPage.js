import BenefitsComponent from '../components/benefitsComponent';
import HeaderComponent from '../components/headerComponent';

import BasePage from './basePage';

class CareerPage extends BasePage {
  constructor() {
    super();
    this.elements = {
      activeTab: '.career__tab.is-active',
      offer: '.our-offer__offer',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
    };
  }

  testTitle() {
    cy.title().should('eq', this.commonData.title.career);

    return this;
  }

  testOffersCount() {
    cy.get(this.elements.activeTab).find(this.elements.offer).should('have.length', 12);

    return this;
  }

  testCommonElements() {
    this.testTitle();

    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();

    return this;
  }

  goToFirstOfferDetails() {
    cy.get(this.elements.offer).first().click();

    return this;
  }
}

export default CareerPage;
