import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import {FaTumblrSquare} from 'react-icons/fa'
import {TiSocialYoutubeCircular} from 'react-icons/ti'
import {ImGooglePlus3} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import { BsRssFill } from 'react-icons/bs';

const MiddlePart = () => {
    return (
        <div class='bg-gray-100  '>
            

             

            {/* // -- middle part of footer-- */}
            <section class='lg:h-96 lg:px-60 py-10 h-1/2  ' style={{backgroundColor:'#f93f23'}}>
            <div class='lg:flex justify-between ' >
                    <div class='lg:flex '>
                    <div class=' p-2'>
                        <h1 class='text-5xl font-bold text-white'>epicurious</h1>
                       <div class='m-2 flex p-2 md:flex justify-center '>
                        < BsFacebook class='text-white text-2xl mx-1 '></BsFacebook>
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
                <div class='lg:flex p-2 hidden lg:block'>
                       <div class='m-4 '>
                       <div class='mb-4 '>
                       <h3><a href='https://www.condenast.com/careers' class='hover:underline underline-offset-0 text-xl text-white font-bold mx-2 p-1' target='_blank' rel="noopener noreferrer">SITE MAP</a></h3>
                       </div>
                       <h5> <a href='https://www.epicurious.com/recipes-menus' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Recipes & Menus</a></h5>
                       <h5> <a href='https://www.epicurious.com/expert-advice' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Expert Advice</a></h5>
                       <h5> <a href='https://www.epicurious.com/ingredients' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Ingredients</a></h5>
                       <h5> <a href='https://www.epicurious.com/holidays-events' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Holidays & Events</a></h5>
                       <h5> <a href='https://video.epicurious.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Video</a></h5>
                       </div>
                       <div class='m-4'>
                       <div class='mb-4'>
                       <h3 class=' text-white text-xl font-bold mx-2 p-1'>HELPFUL LINKS</h3>
                       </div>
                       <h5> <a href='https://www.epicurious.com/info/epicurious-user-help-article' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Subscription FAQs</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/contact-us' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Contact us</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/masthead' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Masthead</a></h5>
                       <h5> <a href='https://www.epicurious.com/expert-advice/accessibility-help-article' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Accessibility Help</a></h5>
                       <h5> <a href='https://www.condenast.com/careers' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Advertising</a></h5>
                       <h5> <a href='https://www.epicurious.com/about/press-center' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Press Center</a></h5>
                       <h5> <a href='https://www.epicurious.com/newsletter' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Newsletters</a></h5>
                       </div>
                       <div class='m-4'>
                       <div class='mb-4'>
                       <h3 class='text-white text-xl font-bold mx-2 p-1'>FOOD INNOVATION GROUP</h3>
                       </div>
                       <h5> <a href='https://www.bonappetit.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Bon Appetit</a></h5>
                       <h5> <a href='https://www.epicurious.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Epicurios</a></h5>
                       <h5> <a href='http://www.gourmet.com/' class='hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1' target='_blank' rel="noopener noreferrer">Gourment</a></h5>
                       
                       </div>
                      
                       
                    </div>

                    </div>
           
                
                </section>

             
        </div>
    );
};

export default MiddlePart;