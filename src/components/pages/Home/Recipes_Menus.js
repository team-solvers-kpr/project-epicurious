import React from "react";
import Navbar from "../../sharedPage/Navbar";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Products from "./Products";
import MainImage from '../../../assets/images/main.jpg'
import { IoMdArrowDropright } from 'react-icons/io';


const Recipes_Menus = () => {
  return (
    
    <div>
      <Navbar></Navbar>
       
        {/* find recipes section start */}
        <section>
        <div className=" text-4xl  font-semibold flex justify-start ml-10 md:ml-32 lg:ml-60 mt-10 ">
     <h1>RECIPES & MENUS</h1>
    </div>

   
    <div className="lg:flex justify-around lg:px-60 lg:py-10">
    <div className="p-10 ">
        <h1 className='lg:text-7xl text-5xl  font-semibold lg:font-bold text-sky-700'>FIND A RECIPE</h1>
        <div className="flex item-center justify-center p-6 ">
        <div className="flex w-full lg:w-96 rounded border border-1  ">
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
        
       <div className="hidden lg:block">
        <div className="flex justify-evenly mb-4">
        
                       <h5 class='text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/search' class='hover:underline underline-offset-0   mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">WHAT'S NEW</a></h5>
                       <div className="border-r-2 border-gray-400 "></div>
                       <h5 class=' text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/search?special-consideration=healthy' class='hover:underline underline-offset-0   mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">HEALTHY</a></h5>
                       <div className="border-r-2 border-gray-400 "></div>
                       <h5 class='text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/search?special-consideration=quick-and-easy' class='hover:underline underline-offset-0    mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">QUICK & EASY</a></h5>
                       
        </div>
        <div className="flex justify-evenly">
                       <h5 class='text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/holidays-events' class='hover:underline underline-offset-0    mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">HOLIDAY</a></h5>
                       <div className="border-r-2 border-gray-400 "></div>
                       <h5 class='text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/search?special-consideration=wheat-gluten-free' class='hover:underline underline-offset-0    mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">GLUTEN-FREE</a></h5>
                       <div className="border-r-2 border-gray-400 "></div>
                       <h5 class='text-lg text-sky-600 font-semibold'> <a href='https://www.epicurious.com/search?special-consideration=vegetarian' class='hover:underline underline-offset-0    mx-2 p-1   leading-1' target='_blank' rel="noopener noreferrer">VEGETARIAN</a></h5>
                       
        </div>
       </div>
    </div>


    <div className="border-r-2 border-gray-300 ">

    </div>
    <div className="p-10">
    <h1 className='lg:text-7xl text-5xl font-semibold lg:font-bold'  style={{color:'#f93f23'}}>CREATE A MENU</h1>
       <div className="p-4 mt-10">
       <p className="text-xl font-semibold">Use our new menu creator to create your own</p>
        <p className="text-xl font-semibold"> menu collection from any recipes and share it</p>
        <p className="text-xl font-semibold">with friends!</p>
       </div>

       <div className="flex  justify-center">
       <a href='https://id.condenast.com/interaction/nnPP-NADhxjdTFZ8GlWNk/email?xid=22d82be7-60f3-4b62-9cde-2bb784a73434&scope=openid%20offline_access&state=%7B%22redirectURL%22%3A%22%2Faccount%2Fsaved%22%7D&prompt=select_account%20consent&client_id=condenast.identity.bd96ef0e8186fcea33396720bc76b8b9&redirect_uri=https%3A%2F%2Fwww.epicurious.com%2Fauth%2Fcomplete&response_type=code' class='hover:underline underline-offset-0 text-xl  font-semibold mx-2 p-1' style={{color:'#f93f23'}} target='_blank' rel="noopener noreferrer">CREATE A MENU </a>
        <IoMdArrowDropright className="text-2xl text-gray-400 mt-1 pt-1"  style={{color:'#f93f23'}}></IoMdArrowDropright>
       </div>
    </div>
    </div>
      
        </section>
        {/* find recipes section End */}

       <div className="flex justify-center mx-60 relative ">
       <img src={MainImage} className='w-full ' style={{height:750}} alt="Image"/>
       <div class='mt-4 absolute' style={{marginLeft:800, marginTop:140}}>
                        <button class='w-72 h-14 p-2 font-semibold text-white text-lg' style={{backgroundColor:'#f93f23'}}>COOK THIS NOW</button>
                    </div>
      
       <div className="absolute w-1/3 mt-10 px-6 pt-32 bg-white  " style={{height:450,marginLeft:800, marginTop:180}}>
          <div className="">
         
          <h3><a href='https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses' class='hover:underline underline-offset-2 text-5xl text-gray-800 font-bold mx-2 p-1' target='_blank' rel="noopener noreferrer">Chocolate-Pecan Sheet Pie</a></h3>
       <p className="text-lg p-6 font-semibold">Creamy chocolate ganache, sweetened with earthy molasses, and crunchy candied pecans add texture and richness to this eminently shareable dessert.</p>
       <div className="flex  justify-center">
       <a href='https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses' class='hover:underline underline-offset-0 text-xl  font-semibold mx-2 p-1' target='_blank' rel="noopener noreferrer" style={{color:'#f93f23'}}>VIEW RECIPE </a>
        <IoMdArrowDropright className="text-2xl mt-1 pt-1"  style={{color:'#f93f23'}}></IoMdArrowDropright>
       </div>
          </div>
      
      
       </div >
       </div>
       
    
    </div>
  );
};

export default Recipes_Menus;
