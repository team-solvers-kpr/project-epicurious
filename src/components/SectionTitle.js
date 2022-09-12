import React from 'react'

export default function Information({
    heading = 'Meal Plan',
    title = 'this is meal',
    author = 'author name',
}) {
  return (
    <div className='section_title p-6'>
        <h2 className="heading uppercase text-slate-300 ">{heading}</h2>
        <p className=' title hover:underline text-2xl my-5 text-black font-semibold'>{title}</p>
        <div className="divider"></div> 
        <h3 className=' authorname uppercase text-red-600'>{author}</h3>
    </div>
  )
}
