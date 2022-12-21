import React, { useEffect, useState } from 'react';
import Images from "../../../assets/Images/Brussels_sprouts_with_pistachios_and_lime_recipe_BA_111819.webp";
import img from '../../../assets/Images/cornstarch-macro-051022.webp';




const IngredientsTop = () => {


  const [ ingredientsTopData, setIngredientsTopData ] = useState([]);
useEffect(() => {

  const fetchData = async () => {
    const res = await fetch('./ingredients_cards.JSON');
    const data = await res.json();
    const sliceData = data.slice(0, 3);
    setIngredientsTopData(sliceData);
   
  }
  fetchData();

}, []);

console.log(ingredientsTopData)
  return (
    <div>
      
    <div className='flex-col items-center flex justify-center mt-20'>
        <h1 className='text-2xl uppercase font-bold'>ingredients</h1>
       <a href="/" >
        <div className='flex items-center justify-center flex-col outline-slate-50  outline-2 outline -outline-offset-[15px]'>
          <div className="ingridents-img">
            <img src={Images} alt="images" />
          </div>
          <div className='bg-white -mt-24 w-[85%]'>
              <div className="p-6">
                  <h2 className="heading uppercase text-indigo-300">brussels sprout</h2>
                  <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-2">31 Ways to Make Crispy, Crunchy, Caramelized Brussels Sprouts
                  </p>
                  <hr className="mx-16" />
                  <div className='flex justify-center gap-2 pt-4'>
                    <h3 className="uppercase text-red-600">by the editors of epicurious </h3>
                    <span className='text-slate-300'>/ 11.15.22</span>
                  </div>
              </div>
          </div>
        </div>
       </a>
     </div>
     <div>

    <div className='flex justify-center flex-wrap mt-4'>
      <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                <a href='/' className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-1"
                  />
                  <div className="p-6  transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                      Meal Plan
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3 hover:underline">
                      <p>
                        A Week of Easy Dinners to Get You Back in the Cooking
                        Groove
                      </p>
                    </h1>
                    <p className="leading-relaxed mb-3 text-orange-500">
                      BY ANNA HIZAL
                    </p>
                  </div>
                </a>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                <a href='/' className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-1"
                  />
                  <div className="p-6  transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                      Meal Plan
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3 hover:underline">
                      <p>
                        A Week of Easy Dinners to Get You Back in the Cooking
                        Groove
                      </p>
                    </h1>
                    <p className="leading-relaxed mb-3 text-orange-500">
                      BY ANNA HIZAL
                    </p>
                  </div>
                </a>
      </div>
      
    </div>
    <hr className="mx-16 pb-4" />
    </div>
    </div>
  )
}

export default IngredientsTop;