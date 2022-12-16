import React from 'react';
import img from '../../../assets/Images/cornstarch-macro-051022.webp';

const CardTop = () => {
  return (
    <div className='flex justify-center flex-wrap mt-20'>
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
  )
}

export default CardTop