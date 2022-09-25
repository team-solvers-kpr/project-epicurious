import React from "react";
import { IoMdArrowDropright } from 'react-icons/io';


const Recipes_Menus = () => {
  return (
    <div>
        <div className=" text-4xl  font-semibold flex justify-start ">
     <h1>RECIPES & MENUS</h1>
    </div>
    <div className="flex justify-around p-20">
    <div className="p-10 ">
        <h1 className='text-7xl  font-bold text-sky-500'>FIND A RECIPE</h1>
        <div className="flex item-center justify-center p-6 ">
        <div className="flex w-96 rounded border border-1  ">
            <input 
            type={'Search'}
            name='search'
            id='search'
            placeholder="Search" 
            className="w-full px-4 bg-gray-100 py-1 text-gray-900 outline-none focus:none"/>
            <button className="m-2 rounded bg-teal-800 px-4 py-2 text-white">
                Search

            </button>
            
            
           
        </div>
        </div>
        
       
    </div>
    <div className="border-r-2">

    </div>
    <div className="p-10">
    <h1 className='text-7xl  font-bold text-orange-500'>CREATE A MENU</h1>
       <div className="p-4">
       <p className="text-xl">Use our new menu creator to create your own</p>
        <p className="text-xl"> menu collection from any recipes and share it with friends!</p>
       </div>

       <div className="flex  justify-center">
       <a href='https://www.condenast.com/careers' class='hover:underline underline-offset-0 text-xl text-orange-500 font-semibold mx-2 p-1' target='_blank' rel="noopener noreferrer">CREATE A MENU </a>
        <IoMdArrowDropright className="text-2xl text-gray-400 mt-2"></IoMdArrowDropright>
       </div>
    </div>
    </div>
  
    
    </div>
  );
};

export default Recipes_Menus;
