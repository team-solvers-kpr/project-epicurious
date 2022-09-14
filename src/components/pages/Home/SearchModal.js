import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchModal = () => {
    return (
        <div>
            <input type="checkbox" id="search-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-full h-full max-h-full relative opacity-90 bg-gray-400">
                    <label htmlFor="search-modal" className="btn btn-sm btn-circle absolute right-52 top-32">✕</label>
                    <span className="sr-only">Search</span>
                    <div className='hover:text-gray-800'>
                        <span className="absolute inset-y-0 flex items-center pl-4 -top-64 left-60 text-gray-500 hover:text-gray-800 text-3xl z-10">
                            <FaSearch />
                        </span>
                        <input className="mt-40 placeholder:italic placeholder:text-slate-400 mx-auto bg-white w-2/3 border-gray-600 border-b-4 rounded-md py-4 pl-14 pr-3 shadow-md focus:outline-none focus:border-rose-600 focus:ring-rose-600 focus:ring-1 text-3xl opacity-80 font-bold" placeholder="Find a Recipe..." type="text" name="search" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;