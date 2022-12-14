import React from "react";
import { useParams } from "react-router-dom";
import ingredientsCardTop from "./ingredients_cards.json";
import DetailsPage from "./DetailsPage";
import detalis from "./details.json";
const IngrediantsDetails = () => {
   const ingredientsTopSingle = ingredientsCardTop;
   const id = useParams();
   const findSingalData = ingredientsTopSingle.find(
      (detail) => detail.id == id.id
   );

   return (
      <div>
         {" "}
         <div className="flex-col items-center flex justify-center mt-20 lg:mt-40 lg:ml-40 lg:mr-40">
            <a href="/">
               <div className="flex items-center  justify-center flex-col outline-slate-50  outline-2 outline ">
                  <div className="">
                     <img src={findSingalData.img} alt="ingredents images" />
                  </div>
                  <div className="bg-white  w-[85%]">
                     <div className="p-6">
                        <h2 className="heading uppercase tracking-tighter font-semibold leading-loose text-red-600">
                           {findSingalData.category}
                        </h2>
                        <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-2">
                           {findSingalData.title}
                        </p>
                        <p>{findSingalData.innerSubTitle}</p>
                        <hr className="mx-16" />
                        <div className="flex justify-center gap-2 pt-4">
                           <h3 className="uppercase text-xs font-sans text-black font-semibold tracking-widest">
                              {findSingalData.author}
                           </h3>
                        </div>
                        <span className="text-black font-mono text-xs oldstyle-nums ">
                           {findSingalData.date}
                        </span>
                        <div>
                           <p className="font-light text-left text-sm my-7">
                              {findSingalData.description}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
         <div className="lg:ml-40 lg:mr-40">
            {detalis?.map((deatil) => (
               <DetailsPage key={"ok"} deatil={deatil}></DetailsPage>
            ))}
         </div>
      </div>
   );
};
export default IngrediantsDetails;
