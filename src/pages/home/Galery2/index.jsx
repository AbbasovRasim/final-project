import Homeswiper2 from "../../../components/Homeswiper2";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeGalery2 = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={`mt-5 home-galery-swiper`}
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
