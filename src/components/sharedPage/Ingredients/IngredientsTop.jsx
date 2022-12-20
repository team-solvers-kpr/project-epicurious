import React from 'react';
import Images from "../../../assets/Images/Brussels_sprouts_with_pistachios_and_lime_recipe_BA_111819.webp";

const IngredientsTop = () => {
  return (
    <div className='flex-col items-center flex justify-center mt-20 itop'>
        <h1 className='text-2xl uppercase font-bold'>ingredients</h1>
       <a href="/" >
        <div className='ingridents flex justify-center hover:underline'>
          <div className="ingridents-img">
            <img src={Images} alt="images" />
          </div>
          <div className='bg-white ingridents-items'>
              <div className="section_title p-6">
                  <h2 className="heading uppercase text-indigo-300">brussels sprout</h2>
                  <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer">31 Ways to Make Crispy, Crunchy, Caramelized Brussels Sprouts
                  </p>
                  <div className="divider"></div>
                  <div className='flex justify-center gap-2'>
                    <h3 className="uppercase text-red-600">by the editors of epicurious </h3>
                    <span className='text-slate-300'>/ 11.15.22</span>
                  </div>
              </div>
          </div>
        </div>
       </a>
     </div>
  )
}

export default IngredientsTop;