export interface IProduct {
  id: number;
  typeId: number;
  name: string;
  desc: string;
  img: string;
  price: number;
  discountedPrice: number;
  isAvailable: boolean;
  isDiscount: boolean;
  createAt?: string;
  updateAt?: string;
}
