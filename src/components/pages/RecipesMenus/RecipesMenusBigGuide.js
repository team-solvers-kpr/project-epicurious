/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Loading from "../../sharedPage/Loading";
import TheBigGuideBottom from "../../sharedPage/TheBigGuideBottom";

const RecipesMenusBigGuide = () => {
   const [bigGuideData, setBigGuideData] = useState(0);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch("http://localhost:5500/allEpicuriousData")
         .then((res) => res.json())
         .then((data) => {
            setBigGuideData(data);
            setLoading(false);
         });
   }, []);

   if (loading || bigGuideData === 0) {
      return <Loading></Loading>;
   }

   return (
      <div className="my-16 relative">
         <div className="flex items-center justify-center relative">
            <a href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery">
               <img
                  src={bigGuideData[12].img}
                  alt="big guide poster"
                  className="lg:w-[1004px] lg:h-[500px]"
               />
            </a>
            <button className="absolute w-48 h-12 p-2 font-semibold text-white text-lg bg-rose-600 -top-6">
               THE BIG GUIDE
            </button>
         </div>
         <div className="grid lg:grid-cols-2 grid-cols-1 divide-x py-8">
            <div className="lg:pl-[16rem] pl-10 pr-4">
               <a
                  href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
                  className="hover:underline cursor-pointer flex lg:text-start text-center text-5xl font-bold"
               >
                  {bigGuideData[12].title}
               </a>
               <p className="text-sm mt-8 lg:mr-10 mr-0 lg:text-start text-center">
                  For these recipes, you'll make a double batch of a base sauce.
                  Use half for one dish, and then turn the remainder into a
                  radically different meal the following night.
               </p>
               <div className="flex lg:justify-start justify-center mt-12">
                  <a
                     href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
                     className="hover:underline underline-offset-0 text-sm text-rose-500 font-semibold"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     VIEW COMPLETE GUIDE
                  </a>
                  <IoMdArrowDropright className="inline-block text-2xl text-rose-600"></IoMdArrowDropright>
               </div>
            </div>
            <div className="lg:pl-10 pl-4 lg:pr-64 pr-4 lg:pt-0 pt-12">
               {bigGuideData.slice(13, 16).map((data) => (
                  <TheBigGuideBottom
                     key={data.id}
                     data={data}
                  ></TheBigGuideBottom>
               ))}
            </div>
         </div>
      </div>
   );
};

export default RecipesMenusBigGuide;
