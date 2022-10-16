import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import MainImage from "../../../src/assets/Images/main.avif";

const CookThisNow = () => {
  return (
    <div>
      {/* main pic added */}
      <a
        href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
        className="flex justify-center relative lg:h-screen"
      >
        <img
          src={MainImage}
          className="w-4/6 h-4/6 object-cover mt-20"
          alt="cook item"
        />

        {/* main pic button  */}
        <div className="absolute hidden 2xl:block mr-40 group">
          <div
            className="mt-4 absolute"
            style={{ marginLeft: 650, marginTop: 140 }}
          >
            <button className="w-72 h-14 p-2 font-semibold text-white text-lg bg-rose-600">
              COOK THIS NOW
            </button>
          </div>

          <div
            className="w-96 mt-10 px-6 pt-16 bg-white"
            style={{ marginLeft: 600, marginTop: 170 }}
          >
            <h3>
              <a
                href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                className="group-hover:underline underline-offset-2 text-4xl text-gray-800 font-semibold mx-2 p-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chocolate-Pecan Sheet Pie
              </a>
            </h3>

            <p className="text-md p-6 font-semibold">
              Creamy chocolate ganache, sweetened with earthy molasses, and
              crunchy candied pecans add texture and richness to this eminently
              shareable dessert.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                className="hover:underline underline-offset-0 text-md  font-semibold mx-2 p-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f93f23" }}
              >
                VIEW RECIPE{" "}
              </a>
              <IoMdArrowDropright
                className="text-2xl mt-1 pt-2"
                style={{ color: "#f93f23" }}
              ></IoMdArrowDropright>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CookThisNow;
