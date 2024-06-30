import Homeswiper2 from "../../../components/Homeswiper2";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

const HomeGalery2 = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={"my-5 galerySwiper"}
      >
        <SwiperSlide>
          <Homeswiper2 img={"./header/photo3.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <Homeswiper2 img={"./header/photo5.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <Homeswiper2 img={"./header/photo6.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <Homeswiper2 img={"./header/photo8.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <Homeswiper2 img={"./header/photo9.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <Homeswiper2 img={"./header/photo10.png"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeGalery2;
