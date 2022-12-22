import React from "react";

const TheBigGuideBottom = ({ data }) => {
   const { title, img } = data;

   return (
      <a
         href="https://www.epicurious.com/expert-advice/reverse-creaming-cake"
         className="hover:underline text-xl text-start font-semibold flex lg:gap-6 gap-4 pb-5"
      >
         <img
            src={img}
            alt="big guide content"
            className="w-[116px] h-[77px]"
         />
         <p>{title}</p>
      </a>
   );
};

export default TheBigGuideBottom;
