import FirstPart from "./footer/FirstPart";
import MiddlePart from "./footer/MiddlePart";
import LastPart from "./footer/LastPart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div>
      {location.pathname === "/" && <FirstPart></FirstPart>}
      <MiddlePart></MiddlePart>
      <LastPart></LastPart>
    </div>
  );
};

export default Footer;
