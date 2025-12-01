import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IType } from "../../../../models/IType";
import { TypeService } from "../../../../services/AllProductService";
import AuthModal from "../../../Business/Modals/AuthModal/AuthModal";
import cls from "../Header.module.scss";
import HeaderBasketLink from "./HeaderBasketLink/HeaderBasketLink";
import HeaderLinksUserInfo from "./HeaderLinksUserInfo/HeaderLinksUserInfo";
interface HeaderLinksProps {}

const HeaderLinks: FC<HeaderLinksProps> = memo(() => {
  const [types, setTypes] = useState<IType[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  useEffect(() => {
    TypeService.getTypes().then((data) => setTypes(data));
  }, []);

  // useEffect(() => {
  //   if (isLoginModalOpen) {
  //     document.body.classList.add("_noscroll");
  //   } else document.body.classList.remove("_noscroll");
  // }, [isLoginModalOpen]);

  return (
    <>
      {isLoginModalOpen && <AuthModal setActive={setIsLoginModalOpen} />}
      <div className={cls.headerLinks}>
        <ul className={cls.types}>
          {types.length
            ? types?.map((type) => (
                <li key={type.name + type.id} className="type">
                  <Link to={`/${type.name}`}>{type.name}</Link>
                </li>
              ))
            : ""}
          <li className="type">
            <Link to="/discounts">Акции</Link>
          </li>
          <li className="type">
            <Link to="/contact">Контакты</Link>
          </li>
        </ul>
        <div className={cls.buttons}>
          <HeaderLinksUserInfo setState={setIsLoginModalOpen} />
          <HeaderBasketLink />
        </div>
      </div>
    </>
  );
});

export default HeaderLinks;
