import React from "react";
import coffee from "../../assets/img/categories/coffee.jpg";
import fastfood from "../../assets/img/categories/fastfood.jpg";
import stalls from "../../assets/img/categories/stalls.jpg";
import restaurants from "../../assets/img/categories/restaurants.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const data = [
  {
    id: 1,
    name: "Coffee Shops",
    img: coffee,
  },
  {
    id: 2,
    name: "Fastfoods",
    img: fastfood,
  },
  {
    id: 3,
    name: "Foodstalls",
    img: stalls,
  },
  {
    id: 4,
    name: "Restaurants",
    img: restaurants,
  },
];

function Categories() {
  return (
    <div className="categories py-10">
      <h1 className="font-bold text-2xl mb-10">Categories you might like</h1>
      <div className="px-10 relative">
        <div className="next absolute right-0 top-0 h-full flex items-center cursor-pointer">
          <ChevronRightIcon className="h-10" />
        </div>
        <div className="prev absolute left-0 top-0 h-full flex items-center cursor-pointer">
          <ChevronLeftIcon className="h-10" />
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          loop
          navigation={{
            nextEl: `.next`,
            prevEl: `.prev`,
          }}
          // centeredSlides
          // autoplay
          speed={800}
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-lg overflow-hidden">
                <div className="absolute bottom-0 right-0 w-full bg-dark text-white px-4 py-1 font-semibold bg-opacity-95">
                  <p>{item.name}</p>
                </div>
                <img
                  className="h-40 w-full object-cover "
                  src={item.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
