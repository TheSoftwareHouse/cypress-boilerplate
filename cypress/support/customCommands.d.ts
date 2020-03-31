declare namespace Cypress {
  interface Chainable<Subject> {
    /** Excample of custom command
     * @example
     * cy.sampleFillInput()
     */
    sampleFillInput(element: string, string: string): Chainable<any>;
  }
}
