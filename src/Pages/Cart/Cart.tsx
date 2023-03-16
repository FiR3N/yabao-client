import { FC } from "react";
import CartList from "../../components/Business/CartList/CartList";
import MainLayout from "../../components/UI/MainLayout/MainLayout";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  return (
    <MainLayout title="Корзина">
      <CartList />
    </MainLayout>
  );
};

export default Cart;
