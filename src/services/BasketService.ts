import $api from "../http";
import IBasket from "../models/IBasket";

export default class BasketService {
  static async addToBasket(basketId: number, productId: number, count: number) {
    return $api.post("/basket-items", { basketId, productId, count });
  }
  static async getBasketItem(basketId: number) {
    return $api.get(`/basket-items/${basketId}`);
  }
}
