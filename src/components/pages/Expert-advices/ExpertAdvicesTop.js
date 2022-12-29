import React from "react";
import { Link } from "react-router-dom";
import expertAdvicesTop from "./expertAdvice.json";

const ExpertAdvicesTop = () => {
   const expertAdvicesTopSingle = expertAdvicesTop[0];
   const expertAdvicesTopDouble = expertAdvicesTop.slice(1, 3);

   return (
      <div>
         <div className="flex-col items-center flex justify-center lg:mx-48 mt-20">
            <h1 className="text-2xl uppercase font-semibold lg:mr-[780px] md:mr-[650px] mr-72">
               EXPERT ADVICE
            </h1>
            <Link to={`details/${expertAdvicesTopSingle.id}`}>
               <div className="flex items-center  justify-center flex-col ">
                  <div className="lg:outline-slate-50  lg:outline-2 lg:outline lg:-outline-offset-[15px]">
                     <img
                        src={expertAdvicesTopSingle.cardImg}
                        alt="ingredents images"
                        className="lg:w-[1004px] lg:h-[519px]"
                     />
                  </div>
                  <div className="bg-white lg:-mt-24 w-[85%]">
                     <div className="p-6">
                        <h2 className="heading uppercase text-indigo-300">
                           {expertAdvicesTopSingle.cardCategory}
                        </h2>
                        <p className=" title hover:underline text-2xl my-2 text-black font-semibold cursor-pointer pb-2">
                           <h1> {expertAdvicesTopSingle.cardHeading}</h1>
                        </p>
                        <hr className="lg:mx-80 mx-20" />
                        <div className="flex justify-center gap-2 pt-2">
                           <h3 className="uppercase text-red-600">
                              {expertAdvicesTopSingle.adviceBy}
                           </h3>
                           <span className="text-indigo-300">
                              / {expertAdvicesTopSingle.postDate}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
         <div>
            <div className="flex justify-center flex-wrap mt-20">
               {expertAdvicesTopDouble.map((data) => (
                  <div key={data.id} className="p-4 sm:w-1/2 lg:w-1/3">
                     <Link
                        to={`details/${data.id}`}
                        className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                     >
                        <img
                           src={data.cardImg}
                           className="lg:h-72 md:h-48 w-full object-cover object-center"
                           alt="expart-advices card images"
                        />
                        <div className="p-6  transition duration-300 ease-in">
                           <h2 className="text-base font-medium text-indigo-300 mb-1">
                              {data.cardCategory}
                           </h2>
                           <h1 className="text-2xl font-semibold mb-3 hover:underline">
                              <p>
                                 {" "}
                                 <h2>{data.cardHeading}</h2>
                              </p>
                           </h1>
                           <hr className="mx-28 my-5" />
                           <p className="leading-relaxed mb-3 text-orange-500">
                              BY {data.adviceBy} /{" "}
                              <span className="text-indigo-300">
                                 {data.postDate}
                              </span>
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

export default ExpertAdvicesTop;
