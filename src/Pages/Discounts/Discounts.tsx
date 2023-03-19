import { FC } from "react";
import MainLayout from "../../components/UI/MainLayout/MainLayout";
import DiscountList from "../../components/Business/DiscountList/DiscountList";
interface DiscountsProps {}

const Discounts: FC<DiscountsProps> = () => {
  return (
    <MainLayout title="Скидки">
      <DiscountList />
    </MainLayout>
  );
};

export default Discounts;
