import React from 'react'
import Recipe from './Recipe';
import { Swiper, SwiperSlide } from 'swiper/react';
import recipesData from '../../../assets/data/RecipesData';

// swiper style import
import 'swiper/css';


export default function NewestRecipes() {
  return (
    <div className='newest_recipes bg-slate-100'>
        <div className='lg:m-40 sm:p-2 sm:m-28'>
            <div className='recipes_header'>
                <div className="divider md:inline-flex lg:inline-flex w-full mt-16 text-black">
                    <h1 className='font-bold font-serif text-3xl'>Our Newest Recipes</h1>
                </div>
            </div>
            <div className='recipes_allItems md:m-8 mb-8'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={5}
                    breakpoints={{
                        // when windows width is >= 640px
                        640: {
                        slidesPerView: 2,
                        },
                        // when windows width is >= 768px
                        768: {
                        slidesPerView: 3,
                        },
                        1200: {
                        slidesPerView: 5,
                        },
                    }}
                >
                {recipesData.map((recipe, index) =>{
                    if(index >= 5) return '';
                    return (
                        <SwiperSlide 
                        key={recipe.id}>
                            <Recipe 
                                title={recipe.title}
                                img={recipe.img}
                                heading={recipe.heading}
                            />
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        </div>
    </div>
  )
}
