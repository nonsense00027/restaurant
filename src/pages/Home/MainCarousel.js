import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function MainCarousel() {
  return (
    <main className="h-screen w-full">
      <Swiper
        slidesPerView={1}
        loop
        pagination
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="h-screen w-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen w-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default MainCarousel;
