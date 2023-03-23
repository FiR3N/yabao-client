import { FC, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import cls from "./CartList.module.scss";
import { BasketActions } from "../../../hooks/useActions";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import CartItem from "../CartItem/CartItem";
import CartOrdering from "./CartOrdering/CartOrdering";
import InformationModal from "../../UI/InformationModal/InformationModal";

const CartList: FC = () => {
  const { user } = useTypeSelector((state) => state.userReducer);
  const { basket, loading, error, totalPrice, orderSuccess } = useTypeSelector(
    (state) => state.basketReducer
  );
  const { getBasketItems } = BasketActions();
  useEffect(() => {
    getBasketItems(user?.id);
  }, [user]);

  if (error) {
    return (
      <div>
        <h2>Ошибка загрузки корзины!</h2>
      </div>
    );
  }

  console.log(totalPrice);

  return (
    <>
      {orderSuccess && (
        <InformationModal status={0}>Заказ отправлен!</InformationModal>
      )}
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
    </>
  );
};

export default CartList;
