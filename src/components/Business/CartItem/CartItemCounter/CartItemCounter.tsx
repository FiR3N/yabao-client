import { FC, useState } from "react";
import { BasketActions } from "../../../../hooks/useActions";
import cls from "./CartItemCounter.module.scss";

interface CartItemCounterProps {
  count: number;
  id: number;
}

const CartItemCounter: FC<CartItemCounterProps> = ({ count, id }) => {
  const [changedCount, setChangedCount] = useState(count);
  const { changeCountBasketItem } = BasketActions();
  const counterAddHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChangedCount((prev) => prev + 1);
    changeCountBasketItem(id, changedCount + 1);
  };
  const counterSubHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (changedCount === 1) return;
    setChangedCount((prev) => prev - 1);
    changeCountBasketItem(id, changedCount - 1);
  };

  return (
    <div className={cls.cartItemCounter}>
      <button className="mini-but" onClick={counterSubHandler}>
        -
      </button>
      <span>{changedCount}</span>
      <button className="mini-but" onClick={counterAddHandler}>
        +
      </button>
    </div>
  );
};

export default CartItemCounter;
