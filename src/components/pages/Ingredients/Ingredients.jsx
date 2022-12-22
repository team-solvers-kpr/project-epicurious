import React from 'react';
import IngredientsTop from './IngredientsTop';
// import CardTop from './CardTop';
import CardBottom from './CardBottom';
import IngredientsBigGuide from './IngredientsBigGuide';

const ingredients = () => {
  return (
    <>
        <IngredientsTop></IngredientsTop>
        {/* <CardTop></CardTop> */}
        <IngredientsBigGuide></IngredientsBigGuide>
        <CardBottom></CardBottom>
    </>
  )
}

export default ingredients