import BaseComponent from './base.component';

class BenefitsComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      section: '.benefits',
      benefit: '.benefits__each',
    };
  }

  public testBenefitsPresence() {
    cy.isVisible(this.elements.section);
  }

  public testBenefitsNumber() {
    cy.get(this.elements.section).find(this.elements.benefit).should('have.length', 18);
  }
}

export default BenefitsComponent;
