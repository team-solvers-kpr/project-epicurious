import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../sharedPage/Loading";

const ExpertAdvicesTop = () => {
   const [expertTop, setExpertTop] = useState(0);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch("http://localhost:5500/allEpicuriousData")
         .then((res) => res.json())
         .then((data) => {
            setExpertTop(data);
            setLoading(false);
         });
   }, []);

   if (loading || expertTop === 0) {
      return <Loading></Loading>;
   }

   return (
      <div>
         <div className="flex-col items-center flex justify-center lg:mx-48 mt-20">
            <h1 className="text-2xl uppercase font-semibold lg:mr-[780px] md:mr-[650px] mr-72">
               EXPERT ADVICE
            </h1>
            <Link to={`allEpicuriousData/${expertTop[20]._id}`}>
               <div className="flex items-center  justify-center flex-col ">
                  <div className="lg:outline-slate-50  lg:outline-2 lg:outline lg:-outline-offset-[15px]">
                     <img
                        src={expertTop[20].img}
                        alt="ingredents images"
                        className="lg:w-[1004px] lg:h-[519px]"
                     />
                  </div>
                  <div className="bg-white lg:-mt-24 w-[85%]">
                     <div className="p-6">
                        <h2 className="heading uppercase text-indigo-300">
                           {expertTop[20].category}
                        </h2>
                        <p className=" title hover:underline text-2xl my-2 text-black font-semibold cursor-pointer pb-2">
                           <h1> {expertTop[20].title}</h1>
                        </p>
                        <hr className="lg:mx-80 mx-20" />
                        <div className="flex justify-center gap-2 pt-2">
                           <h3 className="uppercase text-red-600">
                              {expertTop[20].author}
                           </h3>
                           <span className="text-indigo-300">
                              / {expertTop[20].date}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
         <div>
            <div className="flex justify-center flex-wrap mt-20">
               {expertTop.slice(21, 23).map((data) => (
                  <div key={data._id} className="p-4 sm:w-1/2 lg:w-1/3">
                     <Link
                        to={`allEpicuriousData/${data._id}`}
                        className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                     >
                        <img
                           src={data.img}
                           className="lg:h-72 md:h-48 w-full object-cover object-center"
                           alt="expart-advices card images"
                        />
                        <div className="p-6  transition duration-300 ease-in">
                           <h2 className="text-base font-medium text-indigo-300 mb-1">
                              {data.category}
                           </h2>
                           <h1 className="text-2xl font-semibold mb-3 hover:underline">
                              <p>
                                 {" "}
                                 <h2>{data.title}</h2>
                              </p>
                           </h1>
                           <hr className="mx-28 my-5" />
                           <p className="leading-relaxed mb-3 text-orange-500">
                              BY {data.author} /{" "}
                              <span className="text-indigo-300">
                                 {data.date}
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
