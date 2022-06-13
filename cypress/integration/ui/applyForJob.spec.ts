import CareerPage from '../../pages/career.page';
import HomePage from '../../pages/home.page';
import OfferPage from '../../pages/offer.page';

describe('As a developer I want to apply for a job in TSH.io', () => {
  const careerPage = new CareerPage();
  const homePage = new HomePage();
  const offerPage = new OfferPage();

  it('Visit Home page', () => {
    const isHomePage: boolean = true;
    homePage.open();
    homePage.testCommonElements(isHomePage);
  });

  it('Visit Career page', () => {
    careerPage.open();
    careerPage.testCommonElements();
    careerPage.testOffersCount();
  });

  it('Select first available offer', () => {
    careerPage.open();
    careerPage.goToFirstOfferDetails();
    offerPage.testSalaryAvailability();
  });

  it('Apply for an offer', () => {
    careerPage.open();
    careerPage.goToFirstOfferDetails();
    offerPage.apply();
  });
});
