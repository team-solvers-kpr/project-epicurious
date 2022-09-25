import React from "react";
import videoIcon from "../../../assets/images/video_icon.png";

const NewestVideo = (props) => {
  const { img, categories, title } = props.singleVideoData;

  return (
    <div>
      <div className='relative'>
        <img src={img} alt='thumbnail img' className='bestImg cursor-pointer' />
        <img
          width={45}
          src={videoIcon}
          alt='play icon'
          className='playIcon cursor-pointer absolute '
        />
      </div>
      <h2 className='mt-2 text-left text-sm font-bold cursor-pointer hover:underline'>
        {title}
      </h2>
      <h4 className='text-left text-xs cursor-pointer hover:underline'>
        {categories}
      </h4>
    </div>
  );
};

export default NewestVideo;
