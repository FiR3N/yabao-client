import IBasket from "../../models/IBasket";
import {
  BasketAction,
  BasketActionTypes,
  BasketState,
} from "../../models/store/BasketReducerTypes";

const initialState: BasketState = {
  basket: [],
  basketItemsCount: 0,
  totalPrice: 0,
  loading: false,
  error: false,
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
        loading: false,
        error: false,
      };
    case BasketActionTypes.BASKET_LOADING:
      return { ...state, loading: true };
    case BasketActionTypes.BASKET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case BasketActionTypes.ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
        basketItemsCount: state.basketItemsCount + 1,
      };
    case BasketActionTypes.DELETE_BASKET_ITEM:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
        basketItemsCount: state.basketItemsCount - 1,
      };
    case BasketActionTypes.DELETE_ALL_BASKET_ITEM:
      return { ...state, basket: [], basketItemsCount: 0 };
    case BasketActionTypes.UPDATE_BASKET_ITEM:
      const { id, count } = action.payload;
      const updatedItems = state.basket.map((item) => {
        if (item.id == id) {
          item.count = count;
        }
        return item;
      });
      return { ...state, basket: updatedItems };

    default:
      return state;
  }
}
