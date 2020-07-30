import BaseComponent from './baseComponent';

class BenefitsComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      section: '.benefits',
      benefit: '.benefits__each',
    };
  }

  testBenefitsPresence() {
    cy.get(this.elements.section).should('be.visible');

    return this;
  }

  testBenefitsNumber() {
    cy.get(this.elements.section).find(this.elements.benefit).should('have.length', 18);

    return this;
  }
}

export default BenefitsComponent;
