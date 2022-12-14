import React from "react";
import { Link } from "react-router-dom";
import homeCardData from "./homeCard.json";

const HomeCard = () => {
   return (
      <div>
         <hr className="py-6 mx-12" />
         <div>
            <section className="md:h-full flex items-center text-gray-600">
               <div className="container lg:px-20 px-5 py-5 mx-auto">
                  <div className="flex flex-wrap m-4 ">
                     {homeCardData.map((card) => (
                        <div key={card.id} className="p-4 sm:w-1/2 lg:w-1/3 ">
                           <Link
                              to={`details/${card.id}`}
                              className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden"
                           >
                              <img
                                 src={card.img}
                                 className="lg:h-72 md:h-48 w-full object-cover object-center"
                                 alt="card image"
                              />
                              <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                 <h2 className="text-base font-medium text-indigo-300 mb-1">
                                    {card.category}
                                 </h2>
                                 <h1 className="text-2xl font-semibold mb-3">
                                    <u>{card.title}</u>
                                 </h1>
                                 <hr className="my-8 mx-40" />
                                 <p className="leading-relaxed mb-3 text-orange-500">
                                    BY {card.author}
                                 </p>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default HomeCard;
