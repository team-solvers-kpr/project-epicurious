import React from 'react'

export default function Information({
    heading = 'Meal Plan',
    title = 'this is meal',
    author = 'author name'
}) {
  return (
    <div className='section_title'>
        <h2 className="uppercase">{heading}</h2>
        <p>{title}</p>
        <h3>{author}</h3>
    </div>
  )
}
