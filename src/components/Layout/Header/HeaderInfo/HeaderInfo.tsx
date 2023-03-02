import React, { FC, memo, useState } from "react";
import cls from "../Header.module.scss";
import logo from "../../../../assets/img/Logo.png";
import MyButton from "../../../UI/MyButton/MyButton";
import { Link } from "react-router-dom";

interface HeaderInfoProps {}

const HeaderInfo: FC<HeaderInfoProps> = memo(() => {
  const [isHambActive, setHambActive] = useState(false);
  return (
    <div className={cls.headerInfo}>
      <div className={cls.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={cls.logoText}>
          <h1 className="logo-text">YA BAO</h1>
          <p className={cls.logoAbbr}>ДУХ КИТАЙСКОЙ ЕДЫ</p>
        </div>
      </div>
      <div className={cls.info}>
        <p className={cls.delivery}>
          Доставка по <span className="pink-text">Москве</span>
        </p>
        <p className={cls.deliveryTime}>Время доставки от 31 мин</p>
      </div>
      <div className={cls.phoneNumber}>+375 33 333 33 33</div>
      <div
        className={cls.hambContent}
        onClick={() => setHambActive((prev) => !prev)}
      >
        <div className={isHambActive ? `${cls.hamb} ${cls._active}` : cls.hamb}>
          <span className={cls.bar}></span>
          <span className={cls.bar}></span>
          <span className={cls.bar}></span>
        </div>
      </div>
      <div className={isHambActive ? `${cls.popup} ${cls._open}` : cls.popup}>
        <div className={cls.popupContent}>
          <div className={cls.popupTitle}>
            <div className={cls.logo}>
              <img src={logo} alt="logo" />
              <div className={cls.logoText}>
                <h1 className="logo-text">YA BAO</h1>
                <p className={cls.logoAbbr}>ДУХ КИТАЙСКОЙ ЕДЫ</p>
              </div>
            </div>
            <MyButton onClick={() => setHambActive((prev) => false)}>
              X
            </MyButton>
          </div>
          <nav className={cls.popupNav}>
            <ul className={cls.types}>
              <li className="type">Паста</li>
              <li className="type">Салаты</li>
              <li className="type">Супы</li>
              <li className="type">Антипасти</li>
              <li className="type">Десерты</li>
              <li className="type">Балаклея</li>
            </ul>
          </nav>
          <div className={cls.popupInfo}>
            <p className={cls.delivery}>
              Доставка по <span className="pink-text">Минску</span>
            </p>
            <p className={cls.deliveryTime}>Время доставки от 31 мин</p>
            <div className={cls.phoneNumber}>+375 33 333 33 33</div>
          </div>
          <div className={cls.popupButtons}>
            <p className="pink-text">Войти</p>
            <MyButton>Корзина | 1</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeaderInfo;
