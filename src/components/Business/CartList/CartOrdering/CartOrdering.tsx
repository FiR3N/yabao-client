import { FC, useState } from "react";
import InformationModal from "../../../UI/InformationModal/InformationModal";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import OrderModal from "../../Modals/OrderModal/OrderModal";
import cls from "./CartOrdering.module.scss";

interface CartOrderingProps {
  totalPrice: number;
}

const CartOrdering: FC<CartOrderingProps> = ({ totalPrice }) => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <>
      {isOrderFormOpen && <OrderModal setActive={setIsOrderFormOpen} />}
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
            <MyButton onClick={() => setIsOrderFormOpen(true)}>
              Оформить заказ
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartOrdering;
