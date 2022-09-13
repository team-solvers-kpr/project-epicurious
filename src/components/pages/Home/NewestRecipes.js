import React from 'react'
import Recipe from './Recipe'

export default function NewestRecipes() {
  return (
    <div className='newest_recipes bg-slate-100 h-96 '>
        <div className='recipes_header'>
            <div className="divider m-16 inline-flex w-3/4">
                <h1 className='font-bold font-serif text-3xl'>Our Newest Recipes</h1>
            </div>
        </div>
        <div className='recipes_allItems'>
            <div>
                all the projects
            </div>
        </div>

        <Recipe />
    </div>
  )
}
