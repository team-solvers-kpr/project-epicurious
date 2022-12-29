import React from "react";
import MainImage from "../../assets/Images/Cookies.avif";

const CookThisNow = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold flex justify-start ml-2 md:ml-32 lg:ml-60 lg:mt-20">Holidays & Events</h1>
      {/* main pic added */}
      <a
        href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
        className="flex justify-center lg:relative lg:h-screen"
      >
        <img
          src={MainImage}
          className="lg:w-4/6 w-full lg:h-4/6 h-full object-cover md:outline-slate-50  md:outline-2 md:outline md:-outline-offset-[15px]"
          alt="cook item"
        />

        {/* main pic button  */}
        <div className="absolute lg:block  group">
          

          <div className="lg:w-3/5  w-[100vw] px-6 pt-8 bg-white lg:ml-[250px]  mt-[340px] ">
            <p>COOKIE</p>
            <h3>
              <a
                href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                className="group-hover:underline underline-offset-2 text-2xl text-gray-700 font-bold mx-2 my-2 p-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Taylor Swift’s Chai Cookies With Eggnog Frosting Will Always Be My Holiday Tradition
              </a>
            </h3>

            
            <div className="flex justify-center">
              <a
                href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                className=" text-xs  font-semibold mx-2 p-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f93f23" }}
              >
               BY NATASHA DAVID  <span className="text-gray-400 ml-1 "> / </span> <span className="text-gray-400 ml-1">12.19.22</span>
              </a>
              
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CookThisNow;
