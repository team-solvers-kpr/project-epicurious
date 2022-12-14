import React from 'react';
import Images from "../../../assets/images/Brussels_sprouts_with_pistachios_and_lime_recipe_BA_111819.webp";

const IngredientsTop = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
        <h1 className='text-2xl uppercase font-se'>ingredients</h1>
       <a href="/" >
        <div className='relative'>
          <div className="">
            <img src={Images} alt="images" />
          </div>
          <div className='bg-white absolute mt-[100px]'>
              <div className="section_title p-6">
                  <h2 className="heading uppercase text-slate-300">brussels sprout</h2>
                  <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer">31 Ways to Make Crispy, Crunchy, Caramelized Brussels Sprouts
                  </p>
                  <div className="divider"></div>
                  <h3 className="uppercase text-red-600">by the editors of epicurious</h3>
              </div>
          </div>
        </div>
       </a>
     </div>
  )
}

export default IngredientsTop;