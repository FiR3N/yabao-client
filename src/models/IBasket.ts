import { IProduct } from "./IProduct";

export default interface IBasket {
  id: number;
  productId: number;
  ProductModel: IProduct;
  basketId: number;
  count: number;
  createAt?: string;
  updateAt?: string;
}
