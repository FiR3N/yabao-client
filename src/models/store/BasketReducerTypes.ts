import IBasket from "../IBasket";
import IPromo from "../IPromo";

export interface BasketState {
  basket: IBasket[];
  basketItemsCount: number;
  totalPrice: number;
  loading: boolean;
  error: boolean | string;
  orderSuccess: boolean;
  promo: IPromo;
}

export enum BasketActionTypes {
  GET_ALL_BASKET_ITEMS = "GET_ALL_BASKET_ITEMS",
  BASKET_LOADING = "BASKET_LOADING",
  BASKET_ERROR = "BASKET_ERROR",
  ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET",
  DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM",
  DELETE_ALL_BASKET_ITEM = "DELETE_ALL_BASKET_ITEMS",
  UPDATE_BASKET_ITEM = "UPDATE_BASKET_ITEM",
  SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS",
  CHANGE_TOTALPRICE = "CHANGE_TOTALPRICE",
  CHECK_PROMO = "CHECK_PROMO",
}

export type BasketAction =
  | GetAllBasketItemsAction
  | AddBasketItemAction
  | UpdateBasketItemAction
  | DeleteAllBasketItemsAction
  | DeleteBasketItemAction
  | BasketLoadingAction
  | BasketErrorAction
  | SetOrderSuccesAction
  | ChangeTotalPriceAction;
// | CheckPromoAction;

export interface GetAllBasketItemsAction {
  type: BasketActionTypes.GET_ALL_BASKET_ITEMS;
  payload: IBasket[];
}

export interface AddBasketItemAction {
  type: BasketActionTypes.ADD_ITEM_TO_BASKET;
  payload: IBasket;
}

export interface UpdateBasketItemAction {
  type: BasketActionTypes.UPDATE_BASKET_ITEM;
  payload: UpdateBasketItemActionPayload;
}

export interface DeleteAllBasketItemsAction {
  type: BasketActionTypes.DELETE_ALL_BASKET_ITEM;
}

export interface DeleteBasketItemAction {
  type: BasketActionTypes.DELETE_BASKET_ITEM;
  payload: number;
}

export interface BasketLoadingAction {
  type: BasketActionTypes.BASKET_LOADING;
}
export interface BasketErrorAction {
  type: BasketActionTypes.BASKET_ERROR;
  payload: boolean | string;
}

export interface SetOrderSuccesAction {
  type: BasketActionTypes.SET_ORDER_SUCCESS;
  payload: boolean;
}

export interface ChangeTotalPriceAction {
  type: BasketActionTypes.CHANGE_TOTALPRICE;
  payload: IPromo;
}
//FIX
// export interface CheckPromoAction {
//   type: BasketActionTypes.CHECK_PROMO;
//   payload: IPromo;
// }

//
interface UpdateBasketItemActionPayload {
  id: number;
  count: number;
}
