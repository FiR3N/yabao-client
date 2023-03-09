import $api from "../http";
import { AxiosResponse } from "axios";

export class TypeService {
  static async getTypes() {
    const { data } = await $api.get("/types");
    return data;
  }
}

export class ProductService {
  static async getProductsByTypeId(typeId: number) {
    const { data } = await $api.get(`/products/type/${typeId}`);
    return data;
  }
  static async getProductById(id: number) {
    const { data } = await $api.get(`/products/${id}`);
    return data;
  }
}

export class TypeAdditionService {
  static async getTypeAdditions(typeId: number) {
    const { data } = await $api.get(`/types-additions/${typeId}`);
    return data;
  }
}
