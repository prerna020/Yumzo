import {useEffect,useRef,useState} from 'react'
import FoodItem from "./FoodItem"

const FoodSection = () => {
  return (
    <div className='relative min-h-[180vh] bg-black text-white px-10 py-40 flex flex-col'>
      <FoodItem image='/images/download.png' label='Pizza' direction="from-left"/>
      <FoodItem image='/images/burger.png' label='Burger' direction="from-right" />
      <FoodItem image='/images/noodles.png' label='Noodles' direction="from-left"/>
      <FoodItem image='/images/drink.png' label='Drinks' direction="from-right"/>
    </div>
  )
}

export default FoodSection