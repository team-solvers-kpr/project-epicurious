import React from "react";
import TheBigGuideHoliday from "../../sharedPage/TheBigGuideHoliday";
import CookThisNowHoliday from "../../sharedPage/CookThisNowHoliday";
import HomeCard from "./HomeCard";
import Products from "./Products";

const HolidayEvent = () => {
   return (
      <div className="my-24">
         <CookThisNowHoliday></CookThisNowHoliday>
         <Products></Products>
         <TheBigGuideHoliday></TheBigGuideHoliday>
         <HomeCard></HomeCard>
      </div>
   );
};

export default HolidayEvent;
