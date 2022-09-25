import React from "react";

const VideoBannerCarousel = (props) => {
  const { img, categories, title } = props.vData;

  return (
    <div className='relative mx-auto bg-gradient-to-t from-black to-gradient'>
      <img
        src={img}
        alt='video thumbnail'
        className='w-full lg:h-[32vw] h-full mix-blend-overlay'
      />
      <div className='block text-start'>
        <h4 className='absolute text-white top-[18.5rem] font-medium uppercase text-md mx-12'>
          {categories}
        </h4>
        <h2 className='absolute text-white top-80 font-semibold text-3xl ml-12 mr-20'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VideoBannerCarousel;
