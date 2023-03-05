import { FC } from "react";
import cls from "./Header.module.scss";
import HeaderConfirmEmail from "./HeaderConfirmEmail/HeaderConfirmEmail";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderLinks from "./HeaderLinks/HeaderLinks";

const Header: FC = () => {
  return (
    <header className={cls.header}>
      <div className={`container ${cls.headerContent}`}>
        <HeaderInfo />
        <HeaderLinks />
        <HeaderConfirmEmail />
      </div>
    </header>
  );
};

export default Header;
