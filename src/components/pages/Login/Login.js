import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-[#F5F1E7] h-[410px]'>
        <div className='max-w-md mx-auto'>
          <div className='pt-10 pb-4'>
            <h1 className='text-3xl font-bold font-serif'>Sign in to your account</h1>
            <h3 className='pt-4 text-slate-700'>Enter your email address to continue.</h3>
          </div>
          <div className='bg-white m-5 h-52  rounded'>
            <form action=''>
            <p className='pt-8 pb-1 text-start pl-10 text-xs'>Email</p>
            <label>
            <input  className=' border border-black h-12 w-4/5' type="email" name='email' placeholder='Your email address' required='' autoComplete='off' />
            </label>
            </form>
            <Link to='/'>
              <button type='submit' value="Submit" className=' bg-slate-700 h-12 text-center text-white uppercase mt-6 w-4/5 rounded hover:bg-rose-600'>Next</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

