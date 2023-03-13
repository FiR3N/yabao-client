import { FC } from "react";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import cls from "./CartOrdering.module.scss";

interface CartOrderingProps {
  totalPrice: number;
}

const CartOrdering: FC<CartOrderingProps> = ({ totalPrice }) => {
  return (
    <div className={cls.cartOrdering}>
      <h3 className={cls.cartOrderingTitle}>Промокод</h3>
      <div className={cls.cartOrderingContent}>
        <div className={cls.cartOrderingPromo}>
          <MyInput placeholder="Введите промокод" />
          <MyButton>Применить</MyButton>
        </div>
        <div className={cls.cartOrderingTotal}>
          <p className={cls.totalPrice}>
            Сумма заказа: <span>{totalPrice} ₽</span>
          </p>
          <MyButton>Оформить заказ</MyButton>
        </div>
      </div>
    </div>
  );
};

export default CartOrdering;
