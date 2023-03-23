import IBasket from "../../models/IBasket";
import { IProduct } from "../../models/IProduct";
import IPromo from "../../models/IPromo";
import {
  BasketAction,
  BasketActionTypes,
  BasketState,
} from "../../models/store/BasketReducerTypes";

const initialState: BasketState = {
  basket: [],
  basketItemsCount: 0,
  // FIX
  promo: {} as IPromo,
  totalPrice: 0,
  loading: false,
  error: false,
  orderSuccess: false,
};

export default function basketReducer(
  state = initialState,
  action: BasketAction
): BasketState {
  switch (action.type) {
    case BasketActionTypes.GET_ALL_BASKET_ITEMS:
      return {
        ...state,
        basket: action.payload,
        basketItemsCount: action.payload.length,
        totalPrice:
          action.payload.length > 0
            ? action.payload.reduce(
                (total: number, item) =>
                  (total +=
                    (item.ProductModel.isDiscount
                      ? Number(item.ProductModel.discountedPrice)
                      : Number(item.ProductModel.price)) * item.count),
                0
              )
            : 0,
        loading: false,
        error: false,
      };
    case BasketActionTypes.BASKET_LOADING:
      return { ...state, loading: true };
    case BasketActionTypes.BASKET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case BasketActionTypes.ADD_ITEM_TO_BASKET: {
      const updatedItems = [...state.basket, action.payload];
      return {
        ...state,
        basket: updatedItems,
        basketItemsCount: updatedItems.length,
      };
    }
    case BasketActionTypes.DELETE_BASKET_ITEM:
      const currentBasket = state.basket.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        basket: currentBasket,
        basketItemsCount: currentBasket.length,
        totalPrice:
          currentBasket.length > 0
            ? currentBasket.reduce(
                (total: number, item) =>
                  (total +=
                    (item.ProductModel?.isDiscount
                      ? Number(item.ProductModel?.discountedPrice)
                      : Number(item.ProductModel?.price)) * item.count),
                0
              )
            : 0,
      };
    case BasketActionTypes.DELETE_ALL_BASKET_ITEM:
      return { ...state, basket: [], basketItemsCount: 0, orderSuccess: true };
    case BasketActionTypes.UPDATE_BASKET_ITEM:
      const { id, count } = action.payload;
      const updatedItems = state.basket.map((item) => {
        if (item.id === id) {
          item.count = count;
        }
        return item;
      });
      return {
        ...state,
        basket: updatedItems,
        totalPrice: updatedItems.reduce(
          (total: number, item) =>
            (total +=
              (item.ProductModel.isDiscount
                ? Number(item.ProductModel.discountedPrice)
                : Number(item.ProductModel.price)) * item.count),
          0
        ),
      };
    case BasketActionTypes.SET_ORDER_SUCCESS:
      return { ...state, orderSuccess: action.payload };
    case BasketActionTypes.CHANGE_TOTALPRICE:
      console.log(action.payload);
      return {
        ...state,
        promo: action.payload,
        totalPrice: state.totalPrice - state.totalPrice * action.payload.rebate,
      };
    default:
      return state;
  }
}
