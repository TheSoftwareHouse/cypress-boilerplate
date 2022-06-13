export type Emails = any[string] | [];

export interface GetEmails {
  accountEmail: string;
}

export interface GetEmailWithRegex {
  accountEmail: string;
  emails: Emails;
  regex: RegExp;
}

export const mailsac = {
  getEmails: ({ accountEmail }: GetEmails): Emails =>
    cy
      .request({
        method: 'GET',
        url: `https://mailsac.com/api/addresses/${accountEmail}/messages`,
        headers: { 'Mailsac-Key': Cypress.env('MAILSAC_API_KEY') },
      })
      .its('body')
      .then((emails) => emails),

  getEmailMatchingRegex: ({ accountEmail, emails, regex }: GetEmailWithRegex) =>
    cy
      .request({
        method: 'GET',
        url: `https://mailsac.com/api/text/${accountEmail}/${emails[0]._id}`, // eslint-disable-line no-underscore-dangle
        headers: { 'Mailsac-Key': Cypress.env('MAILSAC_API_KEY') },
      })
      .its('body')
      .then((text) => {
        const matchedValues = regex.exec(text) || '';

        return matchedValues[0];
      }),
};
