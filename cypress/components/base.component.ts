import { commonData, CommonData } from '../fixtures/common.data';
import { Elements } from '../ts/types/elements.type';

class BaseComponent {
  public commonData: CommonData;

  public elements: Elements;

  constructor() {
    this.commonData = commonData;
  }
}

export default BaseComponent;
