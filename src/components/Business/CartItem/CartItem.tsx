import { FC } from "react";
import IBasket from "../../../models/IBasket";
import { ReactComponent as TrashBox } from "../../../assets/img/trash.svg";
import cls from "./CartItem.module.scss";
import CartItemCounter from "./CartItemCounter/CartItemCounter";
import { BasketActions } from "../../../hooks/useActions";

interface CartItemProps {
  basketItem: IBasket;
}

const CartItem: FC<CartItemProps> = ({ basketItem }) => {
  const { deleteBasketItem } = BasketActions();

  const deleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    deleteBasketItem(basketItem?.id);
  };
  return (
    <>
      {Object.keys(basketItem).length > 0 &&
        basketItem.ProductModel &&
        Object.keys(basketItem.ProductModel).length > 0 && (
          <div className={cls.cartItem}>
            <img
              className={cls.cartItemImg}
              src={`${import.meta.env.VITE_API_URL}/${
                basketItem.ProductModel?.img
              }`}
              alt={basketItem.ProductModel?.name}
            />
            <div className={cls.cartItemText}>
              <p className={cls.cartItemTextName}>
                {basketItem.ProductModel?.name}
              </p>
              <p className={cls.cartItemTextDesc}>
                {basketItem.ProductModel?.desc}
              </p>
            </div>
            <p className={cls.cartItemPrice}>
              {basketItem.ProductModel?.isDiscount
                ? basketItem.ProductModel?.discountedPrice
                : basketItem.ProductModel?.price}{" "}
              ₽
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
