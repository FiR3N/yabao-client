import { FC, useEffect } from "react";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import { BasketActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import cls from "./Cart.module.scss";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket } = useTypeSelector((state) => state.basketReducer);
  const { getBasketItem } = BasketActions();

  useEffect(() => {
    getBasketItem(user.id);
  }, []);

  console.log(basket);
  return (
    <MainLayout title="Корзина">
      <div className={cls.cart}>Hello from Cart</div>
    </MainLayout>
  );
};

export default Cart;
