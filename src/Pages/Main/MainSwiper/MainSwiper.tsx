import React, { FC } from "react";
import cls from "./MainSwiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import swiperImg1 from "../../../assets/img/swiper-1.png";
import swiperImg2 from "../../../assets/img/swiper-2.png";
import swiperImg3 from "../../../assets/img/swiper-3.png";

interface MainSwiperProps {}

const MainSwiper: FC<MainSwiperProps> = () => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      initialSlide={1}
      navigation
      loop={false}
      spaceBetween={30}
      breakpoints={{
        768: {
          simulateTouch: false,
        },
      }}
      className={cls.swiper}
    >
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div className={cls.swiperItem}>
            <img src={swiperImg2} alt="swiper-img-2" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={cls.swiperItem}>
          <div className={cls.swiperItem}>
            <img src={swiperImg1} alt="swiper-img-1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={cls.swiperItem}>
          <div className={cls.swiperItem}>
            <img src={swiperImg3} alt="swiper-img-3" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default MainSwiper;
