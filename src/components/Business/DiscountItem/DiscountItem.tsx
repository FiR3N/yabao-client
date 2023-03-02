import React, { FC } from "react";
import IDiscount from "../../../models/IDiscount";
import MyButton from "../../UI/MyButton/MyButton";
import cls from "./DiscountItem.module.scss";

interface DiscountItemProps {
  discountItem: IDiscount;
}

const DiscountItem: FC<DiscountItemProps> = ({ discountItem }) => {
  return (
    <div className={cls.discountItem}>
      <img
        src={`${import.meta.env.VITE_API_URL}/${discountItem.img}`}
        alt={discountItem.name}
      />
      <div className={cls.discountItemText}>
        <p className={cls.discountItemTitle}>{discountItem.name}</p>
        <p className={`${cls.discountItemDesc} gray-text`}>
          {discountItem.desc}
        </p>
        <MyButton>Посмотреть</MyButton>
      </div>
    </div>
  );
};

export default DiscountItem;
