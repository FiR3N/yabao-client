import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import IBasket from "../../models/IBasket";
import {
  BasketAction,
  BasketActionTypes,
} from "../../models/store/BasketReducerTypes";
import BasketService from "../../services/BasketService";

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

export const deleteBasketItem = (id: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      await BasketService.deleteBasketItem(id);
      dispatch({
        type: BasketActionTypes.DELETE_BASKET_ITEM,
        payload: id,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const deleteBasketItemByProductId = (
  productId: number,
  basketId: number
) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      const item = await BasketService.deleteBasketItemByProductId(
        productId,
        basketId
      );
      dispatch({
        type: BasketActionTypes.DELETE_BASKET_ITEM,
        payload: item.data.id,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const addToBasket = (basketId: number, productId: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      const item = await BasketService.addToBasket(basketId, productId);
      dispatch({
        type: BasketActionTypes.ADD_ITEM_TO_BASKET,
        payload: item as unknown as IBasket,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const changeCountBasketItem = (id: number, count: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      const item = await BasketService.updateCountBasketItem(id, count);
      dispatch({
        type: BasketActionTypes.UPDATE_BASKET_ITEM,
        payload: { id, count },
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};
