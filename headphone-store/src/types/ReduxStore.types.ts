import { HeadphoneData } from './Headphone.types';

export interface ReduxStoreToolkit {
  headPhoneList: {
    countAll: number;
    countBasket: number;
    countFavorite: number;
    sumPriceInBasket: number;
    readyToPay: boolean;
    value: HeadphoneData[];
  };
}
