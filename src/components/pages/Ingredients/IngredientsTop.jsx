/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import ingredientsCardTop from "./ingredients_cards.json";

const IngredientsTop = () => {
  // const setID = props.setID;
  const ingredientsTopSingle = ingredientsCardTop[0];
  const ingredientsCardTopDouble = ingredientsCardTop.slice(1, 3);
  fetch("Ingridiants.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => {
      ///Exception occured do something
    });

  // const details = (id) => {
  //   console.log(id);
  //   setID(id);
  // };

  return (
    <div>
      <div className="flex-col items-center flex justify-center mt-20 lg:mx-48">

          <h1 className="text-2xl uppercase font-semibold lg:mr-[800px] md:mr-[680px] mr-80">ingredients</h1>
          <Link to={`details/${ingredientsTopSingle.id}`}>
              <div className="flex items-center  justify-center flex-col ">
                  <div className="md:outline-slate-50  md:outline-2 md:outline md:-outline-offset-[15px]">
                      <img src={ingredientsTopSingle.img} alt="ingredents images" />
                  </div>
                  <div className="bg-white lg:-mt-24 lg:w-[85%]">
                      <div className="p-6">
                          <h2 className="heading uppercase text-indigo-300">{ingredientsTopSingle.category}</h2>
                          <p className="hover:underline text-2xl my-2 text-black font-semibold cursor-pointer pb-2">{ingredientsTopSingle.title}</p>
                          <hr className="md:mx-96 mx-20" />
                          <div className="flex justify-center gap-2 pt-2">
                              <h3 className="uppercase text-red-600">{ingredientsTopSingle.author}</h3>
                              <span className="text-indigo-300">/ {ingredientsTopSingle.date}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </Link>
      </div>
      
      <div>
        <div className="flex justify-center flex-wrap mt-4">
          {ingredientsCardTopDouble.map((data) => (
            <div key={data.id} className="p-4 sm:w-1/2 lg:w-1/3 ">
              <Link to={`details/${data.id}`}
                href="/"
                className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              >
                <img
                  src={data.img}
                  className="lg:h-72 md:h-48 w-full object-cover object-center"
                  alt="meal-1"
                />
                <div className="p-6  transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    {data.category}
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3 hover:underline">
                    <p>{data.title}</p>
                  </h1>
                  <hr className="mx-28" />
                  <p className="leading-relaxed my-3 text-orange-500">
                    BY {data.author} /{" "}
                    <span className="text-indigo-300">{data.date}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <hr className="mx-16 pb-4" />
      </div>
    </div>
  );
};

export default IngredientsTop;
