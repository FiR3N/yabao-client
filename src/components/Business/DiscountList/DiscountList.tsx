import { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import IDiscount from "../../../models/IDiscount";
import DiscountService from "../../../services/DiscountService";
import DiscountItem from "../DiscountItem/DiscountItem";
import cls from "./DiscountList.module.scss";

interface DiscountListProps {}

const DiscountList: FC<DiscountListProps> = () => {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);

  useEffect(() => {
    DiscountService.getDiscounts().then((data) => setDiscounts(data));
  }, []);

  return (
    <div className={cls.discountList}>
      {discounts &&
        discounts.map((item) => (
          <DiscountItem key={item.name + item.id} discountItem={item} />
        ))}
    </div>
  );
};

export default DiscountList;
