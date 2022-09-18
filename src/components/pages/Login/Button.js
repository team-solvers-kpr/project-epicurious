import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
    btnText = 'Text',
    btnLink = 'text',
}) {
  return (
    // <button type={type} value={value} className=' bg-slate-700 h-12 text-center text-white uppercase mt-6 w-full rounded active:bg-rose-600'>
    //     {btnText}
    // </button>
    <div className=' bg-slate-700 h-12 text-center text-white uppercase mt-6  w-full rounded active:bg-rose-600 pt-[12px]'>
        <Link to={btnLink} >
        {btnText}
        </Link>
    </div>
  )
}
