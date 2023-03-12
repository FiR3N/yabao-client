import { FC, useEffect, useState } from "react";
import IBasket from "../../../models/IBasket";
import { IProduct } from "../../../models/IProduct";
import { ProductService } from "../../../services/AllProductService";
import { ReactComponent as TrashBox } from "../../../assets/img/trash.svg";
import cls from "./CartItem.module.scss";
import CartItemCounter from "./CartItemCounter/CartItemCounter";
import { BasketActions } from "../../../hooks/useActions";

interface CartItemProps {
  basketItem: IBasket;
}

const CartItem: FC<CartItemProps> = ({ basketItem }) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { deleteBasketItem } = BasketActions();
  useEffect(() => {
    ProductService.getProductById(basketItem?.productId).then((data) =>
      setProduct(data)
    );
  }, []);

  const deleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    deleteBasketItem(basketItem?.id);
  };

  return (
    <>
      {Object.keys(product).length > 0 && (
        <div className={cls.cartItem}>
          <img
            className={cls.cartItemImg}
            src={`${import.meta.env.VITE_API_URL}/${product?.img}`}
            alt={product.name}
          />
          <div className={cls.cartItemText}>
            <p className={cls.cartItemTextName}>{product?.name}</p>
            <p className={cls.cartItemTextDesc}>{product?.desc}</p>
          </div>
          <p className={cls.cartItemPrice}>
            {product?.isDiscount ? product?.discountedPrice : product?.price} ₽
          </p>
          <CartItemCounter count={basketItem?.count} id={basketItem?.id} />
          <div className={cls.cartItemTrashBox} onClick={deleteHandler}>
            <TrashBox />
          </div>
          {/* <img className={cls.cartItemTrashBox} src={trashBox} alt="trash" /> */}
        </div>
      )}
    </>
  );
};

export default CartItem;
