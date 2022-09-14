import React, { useState } from 'react';
import { AiFillTwitterCircle, AiFillInstagram, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaFacebookF } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dashboardOpen = () => { setIsOpen(!isOpen) };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="flex-none">
                    {!isOpen ?
                        (
                            <button onClick={dashboardOpen} className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        ) :
                        (
                            <button className="btn btn-ghost text-white text-xl hover:text-rose-600 rounded-full fixed top-4 left-4 z-20" onClick={dashboardOpen}>x</button>
                        )
                    }
                    <div className={`top-0 left-0 fixed bg-gray-800 lg:w-[23vw] w-[60vw] h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-700 z-10`}>
                        <div className='my-16'>
                            <a href="/" className='text-white font-bold text-6xl bg-rose-600 lg:p-4 p-2 rounded-full'>epi</a>
                        </div>

                        <ul>
                            <li className='text-white hover:text-rose-600 font-bold mb-4'>
                                <a href="/">RECIPIES & MENU</a>
                            </li>
                            <li className='text-white hover:text-rose-600 font-bold mb-4'>
                                <a href="/">EXPERT ADVICE</a>
                            </li>
                            <li className='text-white hover:text-rose-600 font-bold mb-4'>
                                <a href="/">INGREDIENTS</a>
                            </li>
                            <li className='text-white hover:text-rose-600 font-bold mb-4'>
                                <a href="/">HOLIDAYS & EVENTS</a>
                            </li>
                            <li className='text-white hover:text-rose-600 font-bold mb-4'>
                                <a href="/">VIDEOS</a>
                            </li>
                        </ul>

                        <div className='mt-10'>
                            <p className='text-gray-500 font-bold'>Follow Epicurious!</p>
                            <div className='flex my-2'>
                                <div className='flex mx-auto'>
                                    <p className='text-3xl text-rose-600 mr-4'>
                                        <a href="https://www.fb.com">
                                            <FaFacebookF />
                                        </a>
                                    </p>
                                    <p className='text-3xl text-rose-600 mr-4'>
                                        <a href="https://www.fb.com">
                                            <AiOutlineTwitter />
                                        </a>
                                    </p>
                                    <p className='text-3xl text-rose-600 mr-4'>
                                        <a href="https://www.fb.com">
                                            <AiOutlineInstagram />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-ghost text-white border-1 border-b-gray-500 hover:text-rose-600 mt-4">Sign In</button>
                    </div>
                </div>

                <p className='m-2 text-xl text-gray-500 hover:text-gray-700'><BsFillHeartFill /></p>
                <a className='text-gray-500 hover:text-gray-700 text-sm font-bold hidden lg:block' href="/">Sign In</a>
            </div>

            <div className="navbar-center">
                <a className="cursor-pointer normal-case font-bold text-3xl text-rose-600" href='/'>epicurious</a>
            </div>

            <div className="navbar-end">
                <p className='mr-4 font-bold text-gray-500 pb-2 hidden lg:block'>Follow</p>
                <a className='text-2xl text-rose-600 mr-3 hidden lg:block' href="https://www.fb.com">
                    <FaFacebookSquare />
                </a>
                <a className='text-3xl text-rose-600 mr-3 hidden lg:block' href="https://www.fb.com">
                    <AiFillTwitterCircle />
                </a>
                <a className='text-3xl text-rose-600 hidden lg:block' href="https://www.fb.com">
                    <AiFillInstagram />
                </a>
                <a className="flex mx-4 cursor-pointer text-gray-500 hover:text-gray-700" href='/'>
                    <p className='pr-2 font-bold hidden lg:block'>Search</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </a>
            </div>
        </div>
    );
};

export default Navbar;