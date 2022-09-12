import React from 'react'

export default function Information({
    heading = 'Meal Plan',
    title = 'this is meal',
    author = 'author name'
}) {
  return (
    <div className='section_title p-8'>
        <h2 className="heading uppercase font-bold text-slate-300 ">{heading}</h2>
        <p className=' title hover:underline text-2xl my-5'>{title}</p>
        <p className='mb-5'>vartical content</p>
        <h3 className=' authorname uppercase text-red-600'>{author}</h3>
    </div>
  )
}
