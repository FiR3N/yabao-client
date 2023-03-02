import React, { FC } from "react";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import IDiscount from "../../models/IDiscount";
import cls from "./Discounts.module.scss";
import logo from "../../assets/img/Logo.png";
import DiscountItem from "../../components/Business/DiscountItem/DiscountItem";
import DiscountList from "../../components/Business/DiscountList/DiscountList";
interface DiscountsProps {}

const Discounts: FC<DiscountsProps> = () => {
  // const testItem: IDiscount = {
  //   id: 3,
  //   userId: 3,
  //   name: "Дарим кибер-призы",
  //   desc: "Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.",
  //   img: logo,
  // };
  return (
    <MainLayout title="Скидки">
      <DiscountList />
    </MainLayout>
  );
};

export default Discounts;
