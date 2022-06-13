import BaseComponent from './base.component';

class BenefitsComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      section: '.advantages',
      benefit: '.accordion-switcher',
    };
  }

  public testBenefitsPresence() {
    cy.isVisible(this.elements.section);
  }

  public testBenefitsNumber() {
    cy.get(this.elements.benefit).should('have.length', 12);
  }
}

export default BenefitsComponent;
