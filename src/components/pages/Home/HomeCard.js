import React from "react";
import image1 from "../../../assets/images/f1.avif";
import image2 from "../../../assets/images/f2.avif";
import image3 from "../../../assets/images/f3.avif";
import image4 from "../../../assets/images/f4.avif";
import image5 from "../../../assets/images/f5.avif";
import image6 from "../../../assets/images/f6.avif";

const HomeCard = () => {
  return (
    <div>
        <hr className="py-4 mx-10"/>
      <div class=" bg-gray-100">
        <section class="md:h-full flex items-center text-gray-600">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-wrap m-4 ">
              <div class="p-4 sm:w-1/2 lg:w-1/3 ">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image1}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-1"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      Meal Plan
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>
                        A Week of Easy Dinners to Get You Back in the Cooking
                        Groove
                      </u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      BY ANNA HIZAL
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="#"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image2}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-2"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      SHOPPING
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>
                        Considering a Smart Toaster Oven? Get a Multi-Oven
                        Instead
                      </u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      BY EMILY FARRIS
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="#"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image3}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-3"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      KITCHEN INTELLIGENCE
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>Why Does Spinach Make My Teeth Feel Weird?</u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      BY GENEVIEVE YAM
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="/"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image4}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-4"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      FALL
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>Our Best September Recipes for 2022</u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      THE EDITORS OF EPICURIOUS
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="#"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image5}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="image"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      Meal Plan
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>
                        A Week of Easy Dinners to Get You Back in the Cooking
                        Groove
                      </u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      BY ANNA HIZAL
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="#"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={image6}
                    class="lg:h-72 md:h-48 w-full object-cover object-center"
                    alt="meal-5"
                  />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    <h2 class="text-base font-medium text-indigo-300 mb-1">
                      COOKBOOKS
                    </h2>
                    <h1 class="text-2xl font-semibold mb-3">
                      <u>This Vegan Cookbook Celebrates Chinese Home Cooking</u>
                    </h1>
                    <p class="leading-relaxed mb-3 text-orange-500">
                      BY GENEVIEVE YAM
                    </p>
                    <h1 class=""></h1>
                    <div class="flex item-center flex-wrap">
                      <a
                        href="#"
                        class="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeCard;
