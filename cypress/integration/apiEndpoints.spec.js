import RedirectLinksEndpoint from '../endpoints/redirectLinksEndpoint';

describe('As a developer I want to check response of /redirect_links', () => {
  const redirectLinksEndpoint = new RedirectLinksEndpoint();

  it('Test endpoint /redirect_links', () => {
    redirectLinksEndpoint.getResponse();
    redirectLinksEndpoint.testStatusCode();
    redirectLinksEndpoint.testBody();
  });
});
