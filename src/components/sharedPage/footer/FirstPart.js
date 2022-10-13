import React from "react";
import image from "../../../assets/images/Gourmet.png";
import image2 from "../../../assets/images/bon.png";
import image3 from "../../../assets/images/self.png";
import image4 from "../../../assets/images/penguin.png";
import image5 from "../../../assets/images/weelicious.png";
import image6 from "../../../assets/images/harper.png";

const FirstPart = () => {
  return (
    <div class='mb-20'>
      {/* // -- first part 1st phase of footer-- */}
      <section class='hidden lg:block  '>
        <div className='mb-32 '>
          <h1 class='text-black-600 mx-2 p-1 font-bold font-serif text-3xl'>
            OUR PARTNERS
          </h1>

          <div className='flex justify-between mx-48 '>
            <div>
              <img src={image} alt='' />
              <h5 class=''>
                {" "}
                <a
                  href='https://www.epicurious.com/source/gourmet'
                  class='hover:underline underline-offset-0  text-slate-700    text-sm font-bold  '
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
            <div>
              <img src={image2} alt='' />
              <h5 class='mt-4'>
                {" "}
                <a
                  href='https://www.epicurious.com/source/bon-appetit'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
            <div>
              <img src={image3} alt='' />
              <h5 class='mt-4'>
                {" "}
                <a
                  href='https://www.epicurious.com/source/self'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
            <div>
              <img src={image4} alt='' />
              <h5 class='m-11'>
                {" "}
                <a
                  href='https://www.epicurious.com/source/randomhouse'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
          </div>

          <div className='flex  mx-48'>
            <div>
              <img className='mix-blend-luminosity' src={image5} alt='' />
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/source/weelicious'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
            <div>
              <img className='mix-blend-luminosity' src={image6} alt='' />
              <h5 class='mt-8'>
                {" "}
                <a
                  href='https://www.epicurious.com/source/harpercollins'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  view Recipes
                </a>
              </h5>
            </div>
          </div>
        </div>
        {/* // -- first part 2nd phase of footer-- */}
        <div class=' border-t border-gray-300 '>
          <div className='flex mx-60  justify-between mt-8'>
            <div class='m-4 '>
              <div class='mb-10'>
                <h3 class='text-slate-700 font-bold p-1 text-lg'>
                  QUICK LINKS
                </h3>
              </div>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/meal/breakfast'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1 my-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Breakfast Recipes
                </a>
              </h5>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/meal/lunch'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lunch Recipes
                </a>
              </h5>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/meal/dinner'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dinner Recipes
                </a>
              </h5>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/meal/dessert'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dessert Recipes
                </a>
              </h5>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/meal/drink'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Drink Recipes
                </a>
              </h5>
              <h5 class='my-2'>
                {" "}
                <a
                  href='https://www.epicurious.com/special-consideration/healthy'
                  class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  Healthy Recipes
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href='https://www.epicurious.com/special-consideration/quick-and-easy'
                  class='hover:underline underline-offset-0  text-slate-700  p-1 text-sm font-bold  leading-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Quick and Easy Recipes
                </a>
              </h5>
            </div>
            <div class='m-4 border-l border-gray-300 p-2 mx-auto'>
              <div class='ml-60 '>
                <div class='mb-10'>
                  <h3 class='text-slate-700 font-bold mx-2 p-1 text-lg'>
                    THE BEST OF
                  </h3>
                </div>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/occasion/valentines-day'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1 my-4'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Valentine’s Day Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/occasion/st-patricks-day'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    St. Patrick’s Day Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/recipes-menus/easter-recipes'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Easter Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/occasion/fourth-of-july'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {" "}
                    4th of July Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/occasion/halloween'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Halloween Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/collection/thanksgiving-recipes-menus-strategies-tips'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Thanksgiving Recipes
                  </a>
                </h5>
                <h5>
                  {" "}
                  <a
                    href='https://www.epicurious.com/occasion/christmas'
                    class='hover:underline underline-offset-0  text-slate-700  p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Christmas Recipes
                  </a>
                </h5>
              </div>
            </div>
            <div class='m-4 border-l border-gray-300 p-2'>
              <div class='ml-40'>
                <div class='mb-10'>
                  <h3 class='text-slate-700 font-bold mx-2 p-1 text-lg '>
                    EPICURIOUS CLASSICS
                  </h3>
                </div>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/beef'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1 my-4'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Beef Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/chicken'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Chicken Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/seafood'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Seafood Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/pasta'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Pasta Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/type/salad'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Salad Recipes
                  </a>
                </h5>
                <h5 class='my-2'>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/fish'
                    class='hover:underline underline-offset-0  text-slate-700  mx-2 p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Pork Recipes
                  </a>
                </h5>
                <h5>
                  {" "}
                  <a
                    href='https://www.epicurious.com/ingredient/fish'
                    class='hover:underline underline-offset-0  text-slate-700  p-1 text-sm font-bold  leading-1'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Fish Recipes
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstPart;
