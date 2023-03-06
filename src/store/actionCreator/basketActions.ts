import { Dispatch } from "redux";
import {
  BasketAction,
  BasketActionTypes,
} from "../../models/store/BasketReducerTypes";
import BasketService from "../../services/BasketService - delete";

export const getBasketItem = (basketId: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.BASKET_LOADING,
      });
      const basketItems = await BasketService.getBasketItem(basketId);
      dispatch({
        type: BasketActionTypes.GET_ALL_BASKET_ITEMS,
        payload: basketItems.data,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};
