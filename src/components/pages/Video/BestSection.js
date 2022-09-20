import React, { useEffect, useState } from "react";
import BestOfEpiCarousel from "./BestOfEpiCarousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const BestSection = () => {
  const [bestOfEpi, setbestOfEpi] = useState([]);

  useEffect(() => {
    fetch("./bestOfEpiData.JSON")
      .then((res) => res.json())
      .then((data) => setbestOfEpi(data));
  }, []);

  return (
    <div className='my-10 bg-slate-100 py-10'>
      <div className='w-[870px] mx-auto '>
        <h2 className='my-6 uppercase text-xl font-semibold text-start'>
          Best of Epicurious
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={2}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {bestOfEpi.map((singleBestItem) => (
            <SwiperSlide key={singleBestItem.id}>
              <BestOfEpiCarousel
                singleBestItem={singleBestItem}
              ></BestOfEpiCarousel>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSection;
