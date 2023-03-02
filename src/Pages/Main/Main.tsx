import React, { FC } from "react";
import DiscountsInfo from "../../components/Business/DiscountsInfo/DiscountsInfo";
import TypeList from "../../components/Business/TypeList/TypeList";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import InfoAboutDelivery from "./InfoAboutDelivery/InfoAboutDelivery";
import cls from "./Main.module.scss";
import MainSwiper from "./MainSwiper/MainSwiper";

interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <>
      <MainLayout>
        <MainSwiper />
        <TypeList />
        <DiscountsInfo />
      </MainLayout>
      <InfoAboutDelivery />
    </>
  );
};

export default Main;
