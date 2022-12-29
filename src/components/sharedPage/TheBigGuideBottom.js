import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TheBigGuideBottom = ({ data }) => {
   // eslint-disable-next-line react/prop-types
   const { id, title, img } = data;

   console.log(title, id);
   return (
      <Link
         to={`details/${id}`}
         className="hover:underline text-xl text-start font-semibold flex lg:gap-6 gap-4 pb-5"
      >
         <img
            src={img}
            alt="big guide content"
            className="w-[116px] h-[77px]"
         />
         <p>
            <h2>{title}</h2>
         </p>
      </Link>
   );
};

export default TheBigGuideBottom;
