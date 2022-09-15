import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import {FaTumblrSquare} from 'react-icons/fa'
import {TiSocialYoutubeCircular} from 'react-icons/ti'
import {ImGooglePlus3} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import { BsRssFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div class='mt-20'>
            <h1>This is footer section!!!</h1>

             {/* // -- first part of footer-- */}
            <section class='h-screen bg-gray-100'>
            
            <div>

            </div>
             {/* // -- first part 2nd phase of footer-- */}
            <div class='flex mx-60  justify-between'>
                      <div class='m-4 '>
                       <div class='mb-10'>
                       <h3 class='text-slate-700 font-bold mx-2 p-1 text-lg'>QUICK LINKS</h3>
                       </div>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/meal/breakfast' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1 my-4' target='_blank' rel="noopener noreferrer">Breakfast Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/meal/lunch' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Lunch Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/meal/dinner' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Dinner Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/meal/dessert' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Dessert Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/meal/drink' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Drink Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/special-consideration/healthy' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer"> Healthy Recipes</a></h5>
                       <h5> <a href='https://www.epicurious.com/special-consideration/quick-and-easy' class='hover:underline underline-offset-0  text-slate-700  p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Quick and Easy Recipes</a></h5>
                       </div>
                       <div class='m-4 border-l border-gray-300 p-2'>
                      <div class='ml-10'>
                      <div class='mb-10'>
                       <h3 class='text-slate-700 font-bold mx-2 p-1 text-lg'>THE BEST OF</h3>
                       </div>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/occasion/valentines-day' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1 my-4' target='_blank' rel="noopener noreferrer">Valentine’s Day Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/occasion/st-patricks-day' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">St. Patrick’s Day Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/recipes-menus/easter-recipes' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Easter Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/occasion/fourth-of-july' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer"> 4th of July Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/occasion/halloween' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Halloween Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/collection/thanksgiving-recipes-menus-strategies-tips' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Thanksgiving Recipes</a></h5>
                       <h5> <a href='https://www.epicurious.com/occasion/christmas' class='hover:underline underline-offset-0  text-slate-700  p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Christmas Recipes</a></h5>
                      </div>
                       </div>
                       <div class='m-4 border-l border-gray-300 p-2'>
                       <div class='ml-10'>
                       <div class='mb-10'>
                       <h3 class='text-slate-700 font-bold mx-2 p-1 text-lg '>EPICURIOUS CLASSICS</h3>
                       </div>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/ingredient/beef' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1 my-4' target='_blank' rel="noopener noreferrer">Beef Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/ingredient/chicken' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Chicken Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/ingredient/seafood' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Seafood Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/ingredient/pasta' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Pasta Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/type/salad' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Salad Recipes</a></h5>
                       <h5 class='my-2'> <a href='https://www.epicurious.com/ingredient/fish' class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Pork Recipes</a></h5>
                       <h5> <a href='https://www.epicurious.com/ingredient/fish' class='hover:underline underline-offset-0  text-slate-700  p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Fish Recipes</a></h5>
                       </div>
                       </div>
            </div>

            </section>

            {/* // -- middle part of footer-- */}
            <section class='h-96 px-60 py-10 ' style={{backgroundColor:'#f93f23'}}>
            <div class='flex justify-between'>
                    <div class='flex'>
                    <div class=' p-2'>
                        <h1 class='text-4xl font-bold text-white'>epicurious</h1>
                       <div class='m-2 flex p-2'>
                        < BsFacebook class='text-white text-2xl mx-1'></BsFacebook>
                                <FaTwitterSquare class='text-white text-2xl mx-1' ></FaTwitterSquare>
                                <BsPinterest  class='text-white text-2xl mx-1'></BsPinterest>
                                <FaTumblrSquare class='text-white text-2xl mx-1'></FaTumblrSquare>
                                <TiSocialYoutubeCircular class='text-white text-3xl mx-1'></TiSocialYoutubeCircular>
                                <ImGooglePlus3 class='text-white text-2xl mx-1'></ImGooglePlus3>
                                <AiFillInstagram class='text-white text-3xl mx-1'></AiFillInstagram>
                                <BsRssFill class='text-white text-2xl mx-1'></BsRssFill>
                       </div>

                    </div>
               
                    </div>
                <div class='flex p-2'>
                       <div class='m-4 '>
                       <div class='mb-4 '>
                       <h3><a href='https://www.condenast.com/careers' class='hover:underline underline-offset-0  text-white font-bold mx-2 p-1' target='_blank' rel="noopener noreferrer">SITE MAP</a></h3>
                       </div>
                       <h5> <a href='https://www.epicurious.com/recipes-menus' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Recipes & Menus</a></h5>
                       <h5> <a href='https://www.epicurious.com/expert-advice' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Expert Advice</a></h5>
                       <h5> <a href='https://www.epicurious.com/ingredients' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Ingredients</a></h5>
                       <h5> <a href='https://www.epicurious.com/holidays-events' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Holidays & Events</a></h5>
                       <h5> <a href='https://video.epicurious.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Video</a></h5>
                       </div>
                       <div class='m-4'>
                       <div class='mb-4'>
                       <h3 class='text-white font-bold mx-2 p-1'>HELPFUL LINKS</h3>
                       </div>
                       <h5> <a href='https://www.epicurious.com/info/epicurious-user-help-article' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Subscription FAQs</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/contact-us' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Contact us</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/masthead' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Masthead</a></h5>
                       <h5> <a href='https://www.epicurious.com/expert-advice/accessibility-help-article' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Accessibility Help</a></h5>
                       <h5> <a href='https://www.condenast.com/careers' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Advertising</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/press-center' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Press Center</a></h5>
                       <h5> <a href='https://www.epicurious.com/newsletter' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Newsletters</a></h5>
                       </div>
                       <div class='m-4'>
                       <div class='mb-4'>
                       <h3 class='text-white font-bold mx-2 p-1'>FOOD INNOVATION GROUP</h3>
                       </div>
                       <h5> <a href='https://www.bonappetit.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Bon Appetit</a></h5>
                       <h5> <a href='https://www.epicurious.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Epicurios</a></h5>
                       <h5> <a href='http://www.gourmet.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-xs font-bold  leading-1' target='_blank' rel="noopener noreferrer">Gourment</a></h5>
                       
                       </div>
                      
                       
                    </div>

                    </div>
           
                
                </section>

               {/* // -- last part of footer-- */}
              <section class='h-76 px-60 py-20 ' style={{backgroundColor:'#292929'}}>
                    <div class='flex justify-between'>
                    <div class='flex'>
                    <div class=' p-2'>
                        <h1 class='text-4xl font-semibold text-gray-600'>Condé Nast</h1>
                    </div>
                <div class=' p-2'>
                    
                    <select class=' px-3 py-2 border border-gray-500 border-2 text-gray-600'  style={{backgroundColor:'#292929'}}>
                        <option>Condé Nast Websites</option>
                        <option>allure</option>
                        <option>Architectural Digest</option>
                        <option>GQ</option>
                        <option>Self</option>
                        <option>Lucy</option>
                        <option>Style</option>
                        <option>Vogue</option>
                        <option>Wired</option>
                        
                      
                        
                    </select>
                  
                    
                </div>
                    </div>
                <div class=' p-2'>
                        <a href='https://www.condenast.com/careers' class='hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1' target='_blank' rel="noopener noreferrer">CAREERS</a>
                        <a href='https://condenaststore.com/' class='hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1'target='_blank' rel="noopener noreferrer">CONDE NAST STORE</a>
                        <a href='https://www.condenast.com/reprints-permissions' class='hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1'target='_blank' rel="noopener noreferrer">CONDé NAST</a>
                    </div>

                    </div>
                    <div class='mt-4'>
                        <button class='border border-gray-500 border-2  p-2 text-gray-600'><a href='https://www.epicurious.com/expert-advice/accessibility-help-article' class='hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1'target='_blank' rel="noopener noreferrer">Cookies Setting</a></button>
                    </div>
                    <div class='p-6'>
                        <p class='text-gray-500 text-xs font-semibold'>
                        © 2022  Condé Nast. All rights reserved.Use of and/or registration on any portion of this site constitutes acceptance of our User Agreement
                        (updated as of 1/1/21) and  (updated as of 1/1/21).Your California Privacy Rights.
                        The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Condé Nast.
                        </p>
                        
                       
                    </div>
                    
                   
                </section>
        </div>
    );
};

export default Footer;