/* eslint-disable react/prop-types */
import React from "react";

const DetailsImage = ({ image }) => {
  return (
    <div className="bg-orange-50 w-8/12 mx-auto flex">
      <div className="w-[200px] ml-4 py-5">
        <img src={image.img} alt="" />
      </div>
      <div>
        <h1 className="text-xs font-bold font-mono my-4 px-4 text-start">
          {image.Title}
        </h1>
        <button className="bg-white text-sm px-20 py-2 border-2 border-black font-bold">
          <s className="font-bold "> ${image.Newprice}</s> ${image.PrePrice}{" "}
          {image.site}
        </button>
      </div>
    </div>
  );
};

export default DetailsImage;
