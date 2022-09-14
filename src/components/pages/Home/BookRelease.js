import React from 'react'
import allBooksImg from '../../../assets/images/allBooks.png';
import ProductInfo from "../../ProductInfo";

export default function BookRelease() {
  return (
    <div>
        <div className="container">
            <a href='/'>
            <div className="books_img inline-block border-solid border-2 border-indigo-900">
                <img src={allBooksImg} alt='All the books' />
            </div>
            <div className="information bg-white h-60 lg:w-2/5 lg:-mt-16 relative  lg:ml-96 sm:ml-48 sm:-mt-40 md:-mt-40 md:ml-56">
                <ProductInfo heading='shopping' title='34 New Baking BookRelease Coming This Fall' author='By Jacqueline Raposo' />
            </div>
            </a>
        </div>
    </div>
  )
}
