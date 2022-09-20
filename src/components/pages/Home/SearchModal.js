import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchModal = () => {
  return (
    <div>
      <input type='checkbox' id='search-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box w-full max-w-full h-full max-h-full relative opacity-90 bg-gray-400'>
          <label
            htmlFor='search-modal'
            className='btn btn-sm btn-circle absolute lg:right-52 lg:top-32 top-1 right-1'
          >
            ✕
          </label>
          <span className='sr-only'>Search</span>
          <div className='hover:text-gray-800'>
            <span className='absolute inset-y-0 lg:flex hidden items-center pl-4 lg:-top-64 left-60 text-gray-500 hover:text-gray-800 lg:text-3xl z-10'>
              <FaSearch className='top-50' />
            </span>
            <input
              className='lg:mt-40 mt-4 placeholder:italic placeholder:text-slate-400 block justify-start lg:mx-auto bg-white lg:w-2/3 w-full border-gray-600 border-b-4 rounded-md lg:py-4 py-1 lg:pl-14 lg:pr-3 pl-6 shadow-md focus:outline-none focus:border-rose-600 focus:ring-rose-600 focus:ring-1 lg:text-3xl opacity-80 lg:font-bold'
              placeholder='Find a Recipe...'
              type='text'
              name='search'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
