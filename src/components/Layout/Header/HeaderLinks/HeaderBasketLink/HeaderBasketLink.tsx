import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../../../../hooks/useTypeSelector";
import MyButton from "../../../../UI/MyButton/MyButton";
import cls from "./HeaderBasketLink.module.scss";

interface HeaderBasketLinkProps {}

const HeaderBasketLink: FC<HeaderBasketLinkProps> = () => {
  const { basketItemsCount } = useTypeSelector((state) => state.basketReducer);

  return (
    <>
      <Link to="/cart">
        <MyButton>Корзина | {basketItemsCount}</MyButton>
      </Link>
    </>
  );
};

export default HeaderBasketLink;
