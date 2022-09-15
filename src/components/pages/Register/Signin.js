import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div>
        <div className='bg-zinc-500'>
            <p className='uppercase p-8'>Email</p>
            <form>
            <input  className='border-4 border-solid h-12' type="text" placeholder='enter your email' />
            </form>
            {/* <a href="/" role="button" className="btn mt-5 bg-rose-600">Signin</a> */}
            
            <Link to='/'>
            <button type='submit' className=' mb-5 bg-slate-900 h-12 text-center text-white uppercase mt-6 w-20 rounded hover:bg-rose-600'>Signin</button>
            </Link>
            
            <h3 className='text-2xl'>Enter your email to go next step!</h3>
        </div>
    </div>
  )
}
