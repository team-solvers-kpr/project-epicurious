import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
   return (
      <div className="flex justify-center my-32">
         <BounceLoader color={"#36d7b7"} size={300} />
      </div>
   );
};

export default Loading;
