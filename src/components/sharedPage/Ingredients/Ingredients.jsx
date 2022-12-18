import React from 'react';
import IngredientsTop from './IngredientsTop';
import CardTop from './CardTop'
import CardBottom from '../../pages/Home/HomeCard';
import TheBigGuide from '.././../sharedPage/TheBigGuide';

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