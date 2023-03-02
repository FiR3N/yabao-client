import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IDiscount from "../../../models/IDiscount";
import DiscountService from "../../../services/DiscountService";
import MyButton from "../../UI/MyButton/MyButton";
import cls from "./DiscountsInfo.module.scss";

interface DiscountsInfoProps {}

const DiscountsInfo: FC<DiscountsInfoProps> = () => {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);
  useEffect(() => {
    DiscountService.getDiscounts(5).then((data) => setDiscounts(data));
  }, []);
  return (
    <div className={cls.discountsInfo}>
      <h2 className={cls.discountsInfoTitle}>
        Наши <span className="pink-text">акции</span>
      </h2>
      <div className={cls.discountsInfoItems}>
        <div className={cls.discountsInfoLeft}>
          <img
            src={import.meta.env.VITE_API_URL + "/" + discounts[0]?.img}
            alt={discounts[0]?.name}
          />
        </div>
        <div className={cls.discountsInfoRight}>
          {discounts.map(
            (item, index) =>
              index != 0 && (
                <div
                  key={item.name + item.id}
                  className={cls.discountsInfoItem}
                >
                  <img
                    src={import.meta.env.VITE_API_URL + "/" + item.img}
                    alt={item.name}
                  />
                </div>
              )
          )}
        </div>
      </div>
      <Link to={"/discounts"}>
        <MyButton>Все акции</MyButton>
      </Link>
    </div>
  );
};

export default DiscountsInfo;
