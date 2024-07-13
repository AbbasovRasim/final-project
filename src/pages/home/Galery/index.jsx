import HomeSwiper from "../../../components/HomeSwiper";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Galery.css";
// import { Navigation, Autoplay } from "swiper/modules";
// import "./style.css";

const HomeGalery = () => {
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
        className={"my-5 home-galery-swiper"}
      >
        <SwiperSlide>
          <HomeSwiper img={"./header/photo3.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <HomeSwiper img={"./header/photo5.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <HomeSwiper img={"./header/photo6.png"} />
        </SwiperSlide>

        <SwiperSlide>
          <HomeSwiper img={"./header/photo8.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSwiper img={"./header/photo9.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSwiper img={"./header/photo10.png"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeGalery;
