import React from 'react';
import ingredientsCardTop from './ingredients_cards.json';



const IngredientsTop = () => {


  const ingredientsTopSingle = ingredientsCardTop[0];
  console.log(ingredientsTopSingle);
  const ingredientsCardTopDouble = ingredientsCardTop.slice(1, 3);
  console.log(ingredientsCardTopDouble);

  return (
    <div>
      
    <div className='flex-col items-center flex justify-center mt-20 m-40'>
        <h1 className='text-2xl uppercase font-bold lg:'>ingredients</h1>
       <a href="/" >
        <div className='flex items-center justify-center flex-col outline-slate-50  outline-2 outline -outline-offset-[15px]'>
          <div className="">
            <img src={ingredientsTopSingle.img} alt="images" />
          </div>
          <div className='bg-white -mt-24 w-[85%]'>
              <div className="p-6">
                  <h2 className="heading uppercase text-indigo-300">{ingredientsTopSingle.category}</h2>
                  <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-2">{ingredientsTopSingle.title}</p>
                  <hr className="mx-16" />
                  <div className='flex justify-center gap-2 pt-4'>
                    <h3 className="uppercase text-red-600">{ingredientsTopSingle.author} </h3>
                    <span className='text-slate-300'>{ingredientsTopSingle.date}</span>
                  </div>
              </div>
          </div>
        </div>
       </a>
     </div>
     <div>

    <div className='flex justify-center flex-wrap mt-4'>

      {ingredientsCardTopDouble.map((data)=>(

      <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                <a href='/' className="h-full border-2 cursor-pointer border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={data.img}
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-1"
                  />
                  <div className="p-6  transition duration-300 ease-in">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">
                      {data.category}
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3 hover:underline">
                      <p>
                       {data.title}
                      </p>
                    </h1>
                    <p className="leading-relaxed mb-3 text-orange-500">
                      BY {data.author} / {data.date}
                    </p>
                  </div>
                </a>
      </div>
      )

      )}
      
    </div>
    <hr className="mx-16 pb-4" />
    </div>
    </div>
  )
}

export default IngredientsTop;