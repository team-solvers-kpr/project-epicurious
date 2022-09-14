import React, { useState } from "react";
import bannerImage from "../../../../src/assets/sam-moghadam-khamseh-ZxRHv6epgMQ-unsplash.jpg";
import { ImSearch } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/im';
import SearchModal from "./SearchModal";

const Banner = () => {
    const [showSearchModal, setShowSearchModal] = useState(null);

    return (
        <div className="relative items-center">
            <img src={bannerImage} alt="banner iamge" className="w-full brightness-75" />
            <div className="block">
                <h1 className="absolute font-bold text-white text-6xl top-36 w-full ">Find a Recipe</h1>
                <div className="flex justify-center">
                    <h1 className="absolute font-bold text-gray-400 text-3xl w-1/2 top-1/2 text-center border bg-gray-100 hover:text-gray-900 hover:cursor-pointer py-4 pl-6 opacity-80"><ImSearch /></h1>
                </div>
                <h1 className="absolute font-bold text-white text-md top-80 w-full text-center hover:underline cursor-pointer">ADVANCED SEARCH <BsArrowRightCircleFill /></h1>
            </div>
        </div>
    );
};

export default Banner;
