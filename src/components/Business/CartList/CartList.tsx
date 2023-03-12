import { FC, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import cls from "./CartList.module.scss";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import CartItem from "../CartItem/CartItem";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
interface CartListProps {}

const CartList: FC<CartListProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket, loading, error } = useTypeSelector(
    (state) => state.basketReducer
  );
  const { getBasketItem } = BasketActions();

  useEffect(() => {
    getBasketItem(user?.id);
  }, [user]);

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
      {basket.length > 0 ? (
        <>
          {basket.map((item) => (
            <CartItem key={item.id} basketItem={item} />
          ))}
          <div className={cls.cartListOrdering}>
            <h3>Промокод</h3>
            <div className={cls.cartListOrderingPromo}>
              <MyInput placeholder="Введите промокод" />
              <MyButton>Применить</MyButton>
            </div>
            <div className={cls.cartListOrderingTotal}>
              <p className={cls.totalPrice}>
                Сумма заказа: <span>{1000} ₽</span>
              </p>
              <MyButton>Оформить заказ</MyButton>
            </div>
          </div>
        </>
      ) : (
        <p className={cls.cartListEmpty}>Ваша корзина пуста!</p>
      )}
    </div>
  );
};

export default CartList;
