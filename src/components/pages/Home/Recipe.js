import React from 'react'
import recipesImg from '../../../assets/images/CandiedCitrus_RECIPE_080420_37712.jpg';

export default function Recipe({
    img = recipesImg,
    name = 'new recipes name',
    desc = 'recipes desc'
}) {
  return (
    <div>
        <a href='/' className="recipes_img">
            <img src={img} alt="recipes img" />
        </a>
        <div className="recipes_info">
            <a href='/'>
                <p className="recipes_desc">{desc}</p>
            </a>
            <h3 className="projectItem_title">{name}</h3>
            
      </div>
    </div>
  )
}
