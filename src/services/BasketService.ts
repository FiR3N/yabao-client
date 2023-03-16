import { AxiosResponse } from "axios";
import $api from "../http";
import IBasket from "../models/IBasket";

export default class BasketService {
  static async addToBasket(
    basketId: number,
    productId: number,
    count: number = 1
  ) {
    return $api.post<AxiosResponse<IBasket>>("/basket-items", {
      basketId,
      productId,
      count,
    });
  }
  static async getBasketItems(basketId: number) {
    return $api.get(`/basket-items/${basketId}`);
  }
  static async deleteBasketItem(id: number) {
    return $api.delete(`/basket-items/${id}`);
  }
  static async deleteBasketItemByProductId(
    productId: number,
    basketId: number
  ) {
    return $api.delete(
      `/basket-items/basket/${basketId}/product/${productId}`,
      {}
    );
  }
  static async updateCountBasketItem(id: number, count: number) {
    return $api.put(`/basket-items/${id}`, { count });
  }
}
