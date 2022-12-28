import React from "react";
import TheBigGuide from "../../sharedPage/TheBigGuide";
import CookThisNowHoliday from '../../sharedPage/CookThisNowHoliday'
import HomeCard from "./HomeCard";
import Products from "./Products";

const HolidayEvent = () => {
  return (
    <div className="my-24">
      
      <CookThisNowHoliday></CookThisNowHoliday>

      <Products></Products>

      <TheBigGuide></TheBigGuide>

      <div className="lg:mx-48">
        <HomeCard></HomeCard>
      </div>
    </div>
  );
};

export default HolidayEvent;
