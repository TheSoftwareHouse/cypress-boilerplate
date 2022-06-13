import BenefitsComponent from '../components/benefits.component';
import HeaderComponent from '../components/header.component';

import BasePage from './base.page';

class OfferPage extends BasePage {
  constructor() {
    super();

    this.elements = {
      salary: '.salaries',
      applyButton: '.open-modal',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
    };
  }

  public testSalaryAvailability() {
    cy.isVisible(this.elements.salary);
  }

  public testCommonElements() {
    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();
  }

  public apply() {
    cy.get(this.elements.applyButton).click();
  }
}

export default OfferPage;
