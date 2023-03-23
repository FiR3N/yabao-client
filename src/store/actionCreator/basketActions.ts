import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import IBasket from "../../models/IBasket";
import IPromo from "../../models/IPromo";
import {
  BasketAction,
  BasketActionTypes,
} from "../../models/store/BasketReducerTypes";
import BasketService from "../../services/BasketService";
import PromoService from "../../services/PromoService";

export const getBasketItems = (basketId: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.BASKET_LOADING,
      });
      const basketItems = await BasketService.getBasketItems(basketId);
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

export const deleteAllBasketItems = () => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.DELETE_ALL_BASKET_ITEM,
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
        payload: e.message,
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
        payload: item.data as unknown as IBasket,
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

export const changeTotalPrice = (promo: IPromo) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.CHANGE_TOTALPRICE,
        payload: promo,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};
//FIX
// export const checkPromo = (name: string) => {
//   return async (dispatch: Dispatch<BasketAction>) => {
//     try {
//       const promo = await PromoService.getPromoByName(name).then(
//         (data) => data.data
//       );
//       console.log(promo);
//       if (promo) {
//         dispatch({
//           type: BasketActionTypes.CHECK_PROMO,
//           payload: promo,
//         });
//         dispatch({
//           type: BasketActionTypes.CHANGE_TOTALPRICE,
//           payload: promo.rebate,
//         });
//       }
//     } catch (e: any) {
//       dispatch({
//         type: BasketActionTypes.BASKET_ERROR,
//         payload: e.response?.data?.message,
//       });
//     }
//   };
// };

export const setOrderSuccess = (bool: boolean) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({
        type: BasketActionTypes.SET_ORDER_SUCCESS,
        payload: bool,
      });
    } catch (e: any) {
      dispatch({
        type: BasketActionTypes.BASKET_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};
