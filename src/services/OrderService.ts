import $api from "../http";
import { AxiosResponse } from "axios";

export default class OrderService {
  static async sendOrder(
    basketId: number,
    address: string
  ): Promise<AxiosResponse> {
    return await $api.post("/orders", { basketId, address });
  }
}
