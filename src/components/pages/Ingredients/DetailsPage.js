/* eslint-disable react/prop-types */
import React from "react";
import DetailsImage from "./DetailsImage";

const DetailsPage = ({ deatil }) => {
   const images = deatil.Image;
   return (
      <div className="w-8/12 mx-auto">
         <div className="my-6">
            <h1 className="text-center text-3xl font-bold font-mono leading-tight tracking-tighter my-4">
               {deatil.Title}
            </h1>
            <p className="text-start">{deatil.Description}</p>
         </div>
         <div className="grid gap-y-4">
            {images?.map((image) => (
               <DetailsImage image={image} key={"ok"}></DetailsImage>
            ))}
         </div>
      </div>
   );
};

export default DetailsPage;
