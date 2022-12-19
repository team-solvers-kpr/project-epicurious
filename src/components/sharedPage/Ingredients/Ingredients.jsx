import React from 'react';
import IngredientsTop from './IngredientsTop';
import CardTop from './CardTop'
import CardBottom from './CardBottom';
import TheBigGuide from '.././../sharedPage/Ingredients/TheBigGuide';

const ingredients = () => {
  return (
    <>
        <IngredientsTop></IngredientsTop>
        <CardTop></CardTop>
        <TheBigGuide></TheBigGuide>
        <CardBottom></CardBottom>
    </>
  )
}

export default ingredients