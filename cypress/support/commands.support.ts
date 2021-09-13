import 'cypress-file-upload';
import 'cypress-iframe';
import 'cypress-plugin-tab';
import 'cypress-wait-until';
import { mailsac } from './emails/mailsac.support';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Checks element visibility.
       * Executes "should('be.visible')" underneath on the element.
       * @memberof Cypress.Chainable
       * @example
       ```
        cy.visible('.some-element')
       ```
       */
      isVisible: (elementName: string) => void;

      /**
       * Checks the email and returns URI matched by regex.
       * It needs to be executed after the "ACCOUNT_EMAIL_ADDRESS" environment variable is set.
       * @memberof Cypress.Chainable
       * @example
       ```n
        cy.getEmail()
       ```
       */
      getEmail: () => Chainable<any>;
    }
  }
}

Cypress.Commands.add('isVisible', (elementName: string) => {
  cy.get(elementName).should('be.visible');
});

Cypress.Commands.add('getEmail', () => {
  const accountEmail = Cypress.env('ACCOUNT_EMAIL_ADDRESS');
  const finishSignUpUriRegex = /https:\/\/.*\/some-example-url\?token=[^)]*/;
  let foundEmails: any[];

  return cy
    .waitUntil(
      () =>
        mailsac.getEmails({ accountEmail }).then((emails: any[string]) => {
          foundEmails = emails;
          return emails.length > 0;
        }),
      {
        errorMsg: 'Email not found. Timeout!',
        timeout: 60000,
        interval: 10000,
      }
    )
    .then(() =>
      mailsac
        .getEmailMatchingRegex({ accountEmail, emails: foundEmails, regex: finishSignUpUriRegex })
        .then((uri: string) => uri)
    );
});
