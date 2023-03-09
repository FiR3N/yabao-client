import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import { IType } from "../../../../models/IType";
import { TypeService } from "../../../../services/AllProductService";
import AuthModal from "../../../Business/Modals/AuthModal/AuthModal";
import MyButton from "../../../UI/MyButton/MyButton";
import cls from "../Header.module.scss";
import userImg from "../../../../assets/img/user.png";
import { BasketActions } from "../../../../hooks/useActions";
interface HeaderLinksProps {}

const HeaderLinks: FC<HeaderLinksProps> = memo(() => {
  const { user, isAuth } = useTypeSelector((state) => state.userReducer);
  const { basketItemsCount } = useTypeSelector((state) => state.basketReducer);

  const { getBasketItem } = BasketActions();

  const [types, setTypes] = useState<IType[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  useEffect(() => {
    TypeService.getTypes().then((data) => setTypes(data));
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getBasketItem(user?.id);
    }
  }, [user]);

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.classList.add("_noscroll");
    } else document.body.classList.remove("_noscroll");
  }, [isLoginModalOpen]);

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
          {isAuth ? (
            <Link to="/account" className={cls.userBlock}>
              <img src={userImg} alt="userImg" />
              <p className={cls.userBlockName}>
                <span>{user.name}</span> <span>{user.surname}</span>
              </p>
            </Link>
          ) : (
            <p
              className={`${cls.buttonsLogin} pink-text`}
              onClick={() => setIsLoginModalOpen(true)}
            >
              Войти
            </p>
          )}
          <Link to="/cart">
            <MyButton>Корзина | {basketItemsCount}</MyButton>
          </Link>
        </div>
      </div>
    </>
  );
});

export default HeaderLinks;
