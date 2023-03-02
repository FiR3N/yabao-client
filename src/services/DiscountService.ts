import $api from "../http";
import { AxiosResponse } from "axios";
import IDiscount from "../models/IDiscount";

export default class DiscountService {
  static async getDiscounts(limit: number | null = null) {
    const { data } = await $api.get("/news", { params: { limit } });
    return data;
  }
}
