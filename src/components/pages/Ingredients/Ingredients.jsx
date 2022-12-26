import React from 'react';
import IngredientsTop from './IngredientsTop';
import CardBottom from './CardBottom';
import IngredientsBigGuide from './IngredientsBigGuide';

const ingredients = () => {
  return (
    <>
        <IngredientsTop></IngredientsTop>
        <IngredientsBigGuide></IngredientsBigGuide>
        <CardBottom></CardBottom>
    </>
  )
}

export default ingredients