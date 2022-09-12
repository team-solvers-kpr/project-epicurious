import React from 'react'
import allBooksImg from '../../../assets/images/allBooks.png';
import Information from '../../SectionTitle';

export default function Books() {
  return (
    <div>
        <div className="container">
            <a href='/'>
            <div className="books_img">
                <img className="inline-block" src={allBooksImg} alt='All the books' />
            </div>
            <div className="information bg-white h-60 w-2/5 -mt-16 relative  ml-96">
                <Information heading='shopping' title='34 New Baking Books Comming This Fall'  author='By Jacqueline Raposo' />
            </div>
            </a>
        </div>
    </div>
  )
}
