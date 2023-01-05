import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TheBigGuideBottom = ({ data }) => {
   // eslint-disable-next-line react/prop-types
   const { _id, title, img } = data;

   return (
      <Link
         to={`allEpicuriousData/${_id}`}
         className="hover:underline text-xl text-start font-semibold flex lg:gap-6 gap-4 pb-5"
      >
         <img
            src={img}
            alt="big guide content"
            className="w-[116px] h-[77px]"
         />
         <div>
            <h2>{title}</h2>
         </div>
      </Link>
   );
};

export default TheBigGuideBottom;
