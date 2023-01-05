import React, { useEffect, useState } from "react";
import VideoBannerCarousel from "./VideoBannerCarousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Loading from "../../sharedPage/Loading";

const VideoBanner = () => {
   const [videoData, setVideoData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("http://localhost:5500/videoData")
         .then((res) => res.json())
         .then((data) => {
            setVideoData(data);
            setIsLoading(false);
         });
   }, []);

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={0}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
         >
            {videoData.map((vData, index) => {
               if (index >= 5) return "";
               return (
                  <SwiperSlide key={vData._id}>
                     <VideoBannerCarousel vData={vData}></VideoBannerCarousel>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default VideoBanner;
