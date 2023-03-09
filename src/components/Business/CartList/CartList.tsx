import { FC, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import cls from "./CartList.module.scss";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import CartItem from "../CartItem/CartItem";
interface CartListProps {}

const CartList: FC<CartListProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket, loading, error } = useTypeSelector(
    (state) => state.basketReducer
  );
  const { getBasketItem } = BasketActions();

  useEffect(() => {
    getBasketItem(user.id);
  }, [user]);

  return (
    <div className={cls.cartList}>
      <BounceLoader
        className={cls.cartSpinner}
        color={"#ff2e65"}
        loading={loading}
        size={150}
        aria-label="Loader spinner"
        data-testid="loader"
      />
      {basket.length > 0 ? (
        basket.map((item) => (
          <CartItem key={item.id + item.productId} basketItem={item} />
        ))
      ) : (
        <p className={cls.cartListEmpty}>Ваша корзина пуста!</p>
      )}
    </div>
  );
};

export default CartList;
