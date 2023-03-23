import $api from "../http";
import { AxiosResponse } from "axios";

export default class PromoService {
  static async getPromoByName(name: string): Promise<AxiosResponse> {
    return await $api.post(`/promocodes/name`, { name });
  }
}
