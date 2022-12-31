import React from "react";
import MainImage from "../../assets/Images/Cookies.avif";

const CookThisNow = () => {
   return (
      // <div className="">
      //    <h1 className="text-3xl font-semibold flex justify-start ml-2 md:ml-32 lg:ml-60 lg:mt-20">
      //       Holidays & Events
      //    </h1>
      //    {/* main pic added */}
      //    <a
      //       href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
      //       className="flex justify-center lg:relative "
      //    >
      //       <img
      //          src={MainImage}
      //          className="md:outline-slate-50  md:outline-2 md:outline md:-outline-offset-[15px] lg:w-[1004px] lg:h-[519px]"
      //          alt="cook item"
      //       />
      //       {/* main pic button  */}
      //       <div className="absolute lg:block group flex items-center">
      //          <div className="lg:w-3/5 w-[100vw] px-6 pt-8 bg-white">
      //             <p>COOKIE</p>
      //             <h3>
      //                <a
      //                   href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
      //                   className="group-hover:underline underline-offset-2 text-2xl text-gray-700 font-bold mx-2 my-2 p-1"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                >
      //                   Taylor Swift’s Chai Cookies With Eggnog Frosting Will
      //                   Always Be My Holiday Tradition
      //                </a>
      //             </h3>

      //             <div className="flex justify-center">
      //                <a
      //                   href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
      //                   className=" text-xs  font-semibold mx-2 p-2"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                   style={{ color: "#f93f23" }}
      //                >
      //                   BY NATASHA DAVID{" "}
      //                   <span className="text-gray-400 ml-1 "> / </span>{" "}
      //                   <span className="text-gray-400 ml-1">12.19.22</span>
      //                </a>
      //             </div>
      //          </div>
      //       </div>
      //    </a>
      // </div>

      <div className="flex-col items-center flex justify-center mt-20">
         <h1 className="text-2xl uppercase font-semibold lg:mr-[800px] md:mr-[680px] mr-80">
            Holidays & Events
         </h1>
         <a href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses">
            <div className="flex items-center  justify-center flex-col ">
               <div className="md:outline-slate-50  md:outline-2 md:outline md:-outline-offset-[15px]">
                  <img
                     src={MainImage}
                     alt="ingredents images"
                     className="lg:w-[1004px] lg:h-[519px]"
                  />
               </div>
               <div className="bg-white lg:-mt-24 lg:w-[85%]">
                  <div className="p-6">
                     <h2 className="heading uppercase text-indigo-300">
                        cookie
                     </h2>
                     <p className="hover:underline text-2xl my-2 text-black font-semibold cursor-pointer pb-2">
                        Taylor Swift’s Chai Cookies With Eggnog Frosting Will{" "}
                        <br /> Always Be My Holiday Tradition
                     </p>
                     <hr className="md:mx-80 mx-20" />
                     <div className="flex justify-center gap-2 pt-2">
                        <h3 className="uppercase text-red-600">
                           BY NATASHA DAVID{" "}
                        </h3>
                        <span className="text-indigo-300">/ 12.19.22</span>
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
};

export default CookThisNow;
