import BenefitsComponent from '../components/benefitsComponent';
import HeaderComponent from '../components/headerComponent';

class OfferPage {
  constructor() {
    this.elements = {
      salary: '.single-offer__sticky-description',
      applyButton: '.single-offer__sticky-content .job-apply__button',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
    };
  }

  testSalaryAvailability() {
    cy.get(this.elements.salary).should('be.visible');

    return this;
  }

  testCommonElements() {
    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();

    return this;
  }

  apply() {
    cy.get(this.elements.applyButton).click();

    return this;
  }
}

export default OfferPage;
