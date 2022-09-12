import React from 'react'
import { Link } from 'react-router-dom';
import allBooksImg from '../../../assets/images/allBooks.png';
import Information from '../../SectionTitle';

export default function Books() {
  return (
    <div>
        <div className="container">
            <Link to="/" className="">
            <div className="books_img">
                <img className="inline-block" src={allBooksImg} alt='All the books' />
            </div>
            <div className="information">
                <Information heading='shopping' title='34 New Baking Books Comming This Fall' author='By Jacqueline Raposo' />
            </div>
            </Link>
        </div>
    </div>
  )
}
