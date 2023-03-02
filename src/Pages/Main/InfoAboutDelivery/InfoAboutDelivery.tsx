import { FC } from "react";
import cls from "./InfoAboutDelivery.module.scss";
import da1 from "../../../assets/img/da1.png";
import da2 from "../../../assets/img/da2.png";
import da3 from "../../../assets/img/da3.png";
import da4 from "../../../assets/img/da4.png";

interface InfoAboutDeliveryProps {}

const InfoAboutDelivery: FC<InfoAboutDeliveryProps> = () => {
  return (
    <div className={cls.infoAboutDelivery}>
      <div className={`container ${cls.infoAboutDeliveryContent}`}>
        <h2 className={cls.infoAboutDeliveryTitle}>Оплата и доставка</h2>
        <div className={cls.infoAboutDeliveryAdvantages}>
          <div className={cls.infoAboutDeliveryAdvantage}>
            <div className={cls.circle}>
              <img src={da1} alt="delivery-info-img" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={cls.infoAboutDeliveryAdvantage}>
            <div className={cls.circle}>
              <img src={da2} alt="delivery-info-img" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={cls.infoAboutDeliveryAdvantage}>
            <div className={cls.circle}>
              <img src={da3} alt="delivery-info-img" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={cls.infoAboutDeliveryAdvantage}>
            <div className={cls.circle}>
              <img src={da4} alt="delivery-info-img" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff8f0743d051733309a2ec3167bc348658c9c3e160a94e099262737896d8be60&amp;source=constructor"
          width="1110"
          height="332"
        />
      </div>
    </div>
  );
};

export default InfoAboutDelivery;
