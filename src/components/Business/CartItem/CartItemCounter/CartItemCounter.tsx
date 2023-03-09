import { FC, useState } from "react";
import cls from "./CartItemCounter.module.scss";

interface CartItemCounterProps {
  count: number;
}

const CartItemCounter: FC<CartItemCounterProps> = ({ count }) => {
  return (
    <div className={cls.cartItemCounter}>
      <button className="mini-but" onClick={() => console.log("-")}>
        -
      </button>
      <span>{count}</span>
      <button className="mini-but" onClick={() => console.log("+")}>
        +
      </button>
    </div>
  );
};

export default CartItemCounter;
