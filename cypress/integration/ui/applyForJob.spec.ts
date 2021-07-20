import CareerPage from '../../pages/career.page';
import HomePage from '../../pages/home.page';
import OfferPage from '../../pages/offer.page';

describe('As a developer I want to apply for a job in TSH.io', () => {
  const careerPage = new CareerPage();
  const homePage = new HomePage();
  const offerPage = new OfferPage();

  it('Visit Home page', () => {
    homePage.open();
    homePage.testCommonElements();
  });

  it('Visit Career page', () => {
    homePage.goToCareerPage();

    careerPage.testCommonElements();
    careerPage.testOffersCount();
  });

  it('Select first available offer', () => {
    careerPage.goToFirstOfferDetails();

    offerPage.testCommonElements();
    offerPage.testSalaryAvailability();
  });

  it('Apply for an offer', () => {
    offerPage.apply();
  });
});
