import { FC, useState } from "react";
import { BasketActions } from "../../../../hooks/useActions";
import IPromo from "../../../../models/IPromo";
import PromoService from "../../../../services/PromoService";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";
import OrderModal from "../../Modals/OrderModal/OrderModal";
import cls from "./CartOrdering.module.scss";

interface CartOrderingProps {
  totalPrice: number;
}

const CartOrdering: FC<CartOrderingProps> = ({ totalPrice }) => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [promoName, setPromoName] = useState<string>("");
  const [promo, setPromo] = useState<IPromo>({} as IPromo);
  const [error, setError] = useState<boolean>(false);
  const [isPromoActive, setIsPromoActive] = useState<boolean>(false);

  const { changeTotalPrice } = BasketActions();

  const promoFormHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (promoName) {
      await PromoService.getPromoByName(promoName)
        .then((data) => {
          setPromo(data.data);
          changeTotalPrice(data.data);
        })
        .catch((e) => setError(true));
      setError(false);
      setIsPromoActive(true);
    } else {
      setError(true);
    }
  };
  return (
    <>
      {isOrderFormOpen && <OrderModal setActive={setIsOrderFormOpen} />}
      <div className={cls.cartOrdering}>
        <h3 className={cls.cartOrderingTitle}>Промокод</h3>
        <div className={cls.cartOrderingContent}>
          <form className={cls.cartOrderingPromo}>
            {error && (
              <p className="error-text">Такого промокода не существует!</p>
            )}
            {isPromoActive && (
              <div className="success-info">
                Промокод активирован (Скидка - {promo?.rebate * 100}%)
              </div>
            )}
            <div className={cls.cartOrderingPromoItem}>
              <MyInput
                placeholder="Введите промокод"
                onChange={(e) => setPromoName(e.currentTarget.value)}
              />
              <MyButton onClick={promoFormHandler}>Применить</MyButton>
            </div>
          </form>
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
