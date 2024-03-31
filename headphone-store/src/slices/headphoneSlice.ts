import { createSlice } from '@reduxjs/toolkit';
import { headphoneList } from '../constants/headphoneListData';
import { HeadphoneData } from '../types/Headphone.types';

// Действия для headPhoneList
//  1)setIsFavorite
//  2)addInBasket
//  3)subInBasket
//  4)deleteInBasket
//  5)buyAll in basket
//  6)setReadyToPay

export const headPhoneSlice = createSlice({
  name: 'headPhoneList',
  initialState: {
    countAll: headphoneList.length,
    countBasket: 0,
    countFavorite: 0,
    sumPriceInBasket: 0,
    readyToPay: false,
    value: headphoneList,
  },
  reducers: {
    setIsFavorite: (state, action) => {
      const indexCurr = state.value.findIndex((element: HeadphoneData) => element.id === action.payload.id);
      state.value[indexCurr].isFavorite = !state.value[indexCurr].isFavorite;
      if (state.value[indexCurr].isFavorite) {
        state.countFavorite = state.countFavorite + 1;
      } else {
        state.countFavorite = state.countFavorite - 1;
      }
    },
    addInBasket: (state, action) => {
      const indexCurr = state.value.findIndex((element: HeadphoneData) => element.id === action.payload.id);
      state.value[indexCurr].countInBasket = state.value[indexCurr].countInBasket + 1;
      state.countBasket = state.countBasket + 1;
      state.sumPriceInBasket = state.sumPriceInBasket + state.value[indexCurr].price;
    },
    subInBasket: (state, action) => {
      const indexCurr = state.value.findIndex((element: HeadphoneData) => element.id === action.payload.id);
      state.value[indexCurr].countInBasket = state.value[indexCurr].countInBasket - 1;
      state.countBasket = state.countBasket - 1;
      state.sumPriceInBasket = state.sumPriceInBasket - state.value[indexCurr].price;
    },
    deleteInBasket: (state, action) => {
      const indexCurr = state.value.findIndex((element: HeadphoneData) => element.id === action.payload.id);
      state.sumPriceInBasket =
        state.sumPriceInBasket - state.value[indexCurr].price * state.value[indexCurr].countInBasket;
      state.countBasket = state.countBasket - state.value[indexCurr].countInBasket;
      state.value[indexCurr].countInBasket = 0;
    },
    buyAllInBasket: (state, action) => {
      state.countBasket = 0;
      state.sumPriceInBasket = 0;
      state.value.forEach((element: HeadphoneData) => (element.countInBasket = 0));
    },
    setReadyToPay: (state, action) => {
      state.readyToPay = !state.readyToPay;
    },
  },
});

export const { setIsFavorite, addInBasket, subInBasket, deleteInBasket, buyAllInBasket, setReadyToPay } =
  headPhoneSlice.actions;

export default headPhoneSlice.reducer;
