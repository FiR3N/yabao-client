import { FC, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import cls from "./CartList.module.scss";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import CartItem from "../CartItem/CartItem";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import CartOrdering from "./CartOrdering/CartOrdering";
interface CartListProps {}

const CartList: FC<CartListProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket, loading, error, totalPrice } = useTypeSelector(
    (state) => state.basketReducer
  );
  const { getBasketItem } = BasketActions();
  useEffect(() => {
    getBasketItem(user?.id);
  }, [user]);

  if (error) {
    return (
      <div>
        <h2>Ошибка загрузки корзины!</h2>
      </div>
    );
  }

  return (
    <div className={cls.cartList}>
      <BounceLoader
        className={cls.cartListSpinner}
        color={"#ff2e65"}
        loading={loading}
        size={150}
        aria-label="Loader spinner"
        data-testid="loader"
      />
      {!loading && basket.length > 0 ? (
        <>
          {basket.map((item) => (
            <CartItem key={item.id} basketItem={item} />
          ))}
          <CartOrdering totalPrice={totalPrice} />
        </>
      ) : (
        <p className={cls.cartListEmpty}>Ваша корзина пуста!</p>
      )}
    </div>
  );
};

export default CartList;
