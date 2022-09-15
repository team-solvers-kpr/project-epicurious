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
            <section class='h-screen bg-gray-100'>
            <p class="text-sky-400">The quick brown fox...</p>

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