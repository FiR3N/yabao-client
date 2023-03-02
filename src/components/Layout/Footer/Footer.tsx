import React, { FC } from "react";
import cls from "./Footer.module.scss";
import lapwa from "../../../assets/img/footer_lapwa.svg";
import masterCard from "../../../assets/img/master-card.png";
import payPal from "../../../assets/img/paypal.png";
import visa from "../../../assets/img/visa.png";
import viber from "../../../assets/img/viber.svg";
import skype from "../../../assets/img/skype.svg";
import telegram from "../../../assets/img/telegram.svg";
import facebooke from "../../../assets/img/facebook.svg";
import vk from "../../../assets/img/vk.svg";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={cls.footer}>
    <div className={`container ${cls.footerContent}`}>
      <div className={cls.footerLinks}>
        <div className={cls.footerLeft}>
          <h1 className={`${cls.phoneNumber} logo-text pink-text`}>
            +375 33 333 33 33
          </h1>
          <p className={cls.street}>ул. Зорге, 70-72</p>
          <p className={cls.deliveryInfo}>Доставка и самовывоз 10:00 — 23:00</p>
          <p className={cls.ourSocials}>Мы в соцсетях</p>
          <div className={cls.socials}>
            <a href="https://www.youtube.com/" target="_blank">
              Youtube
            </a>
            <a href="https://vk.com/" target="_blank">
              ВКонтакте
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              Instagram
            </a>
            <a href="https://ru-ru.facebook.com/" target="_blank">
              Facebook
            </a>
          </div>
        </div>
        <div className={cls.footerRight}>
          <p className={cls.contactTitle}>
            Остались вопросы? А мы всегда на связи:
          </p>
          <div className={cls.contact}>
            <a
              className={cls.contactItem}
              href="https://www.viber.com/ru/"
              target="_blank"
            >
              <img src={viber} alt="Viber" />
            </a>
            <a
              className={cls.contactItem}
              href="https://www.skype.com/ru/"
              target="_blank"
            >
              <img src={skype} alt="Skype" />
            </a>
            <a
              className={cls.contactItem}
              href="https://web.telegram.org/"
              target="_blank"
            >
              <img src={telegram} alt="Telegram" />
            </a>
            <a
              className={cls.contactItem}
              href="https://ru-ru.facebook.com/"
              target="_blank"
            >
              <img src={facebooke} alt="Facebook" />
            </a>
            <a
              className={cls.contactItem}
              href="https://vk.com/"
              target="_blank"
            >
              <img src={vk} alt="ВКонтакте" />
            </a>
            <Link
              to="/contact"
              className={`${cls.contactItem} fw500`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Написать нам
            </Link>
          </div>
        </div>
      </div>
      <div className={cls.footerInfo}>
        <p>YaBao. Все права защищены © 2023</p>
        <div className={cls.cardImages}>
          <img src={visa} alt="visa" />
          <img src={payPal} alt="paypal" />
          <img src={masterCard} alt="master-card" />
        </div>
      </div>
      <img className={cls.absImage} src={lapwa} />
    </div>
  </div>
);

export default Footer;
