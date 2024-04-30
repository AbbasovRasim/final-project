import HomeSwiper from "../../../components/HomeSwiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "./style.css";

const HomeGalery = () => {
  return (
    <>
      <Swiper
        // slidesPerView={3}
        // loop={true}
        // centeredSlides={true}
        // // autoplay={{ delay: 1500 }}
        // speed={1000}
        // spaceBetween={20}
        //   navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={`mt-5 home-galery-swiper`}
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
