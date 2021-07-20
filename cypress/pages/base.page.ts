import { commonData, CommonData } from '../fixtures/common.data';
import { Elements } from '../ts/types/elements.type';

export type Components = {
  [key: string]: any;
};

class BasePage {
  public commonData: CommonData;

  public elements: Elements;

  public components: Components;

  public url: string;

  constructor() {
    this.commonData = commonData;
  }

  public open() {
    cy.visit(this.url);
  }
}

export default BasePage;
