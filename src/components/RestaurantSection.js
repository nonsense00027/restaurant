import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useHistory } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const data = [
  {
    id: 1,
    name: "Unli Wings Matina",
    img: "https://sugbo.ph/wp-content/uploads/2020/03/balkon-restobar-unliwings-4.jpg",
  },
  {
    id: 2,
    name: "Mddonalds",
    img: "https://d1ralsognjng37.cloudfront.net/e7589760-8fa4-4468-b084-f90ec3a042b1.jpeg",
  },
  {
    id: 3,
    name: "Burger King",
    img: "https://i.insider.com/5bbd187101145529745a9895?width=700",
  },
  {
    id: 4,
    name: "Minute Burger",
    img: "https://www.mangan.ph/uploads/merchants/149.jpg",
  },
  {
    id: 5,
    name: "Jollibee",
    img: "https://jb-ph-cdn.tillster.com/prod/Carousel/JB_PH_INCREASE_SPOTLIGHT_TILE_MOBILE_FA_750x456_opt.jpg_75dc5bfd-423f-4872-a493-77497112ac3a.jpg",
  },
  {
    id: 6,
    name: "Chowking",
    img: "https://lh3.googleusercontent.com/proxy/33MKdnBRH9bPudxgyD_nHgp1s1jkQ7-TOG1yLyxwoeow7RV1pESbxsCUPxLw4yBFiY0zqV8wCARN8exAIASrDYH9MmrSVjPma6O4vlzt7z-2oMIdvJy4ZsBvcH7nD4nv32uInlAv0OxDQkfIwGN2-Us",
  },
];

function RestaurantSection({ title, restaurants }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/shop");
  };
  return (
    <div className="categories max-w-screen-lg mx-auto pt-10 px-10">
      <h1 className="font-semibold text-2xl mb-10">{title}</h1>
      <div className="relative">
        {/* <div className="next absolute right-0 top-0 h-full flex items-center cursor-pointer">
            <ChevronRightIcon className="h-10" />
          </div>
          <div className="prev absolute left-0 top-0 h-full flex items-center cursor-pointer">
            <ChevronLeftIcon className="h-10" />
          </div> */}
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          slidesPerColumn={2}
          //   loop
          navigation={{
            nextEl: `.next`,
            prevEl: `.prev`,
          }}
          slidesPerColumnFill="row"
          // centeredSlides
          // autoplay
          //   speed={800}
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div onClick={handleClick}>
                <img
                  className="h-40 w-full object-cover rounded-lg "
                  src={item.img}
                  alt=""
                />
                <div className="py-1">
                  <p>{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RestaurantSection;
