import React from 'react'
import picture from "../../Pictures/types_of_alcohol-768x432.jpg.webp";
import "./WelcomeBanner.scss"

const WelcomeBanner = () => {


  return (


    <div className='banner-container'>
        <img src={picture} alt="alcohols" className='banner-container__alcohols'/>
        <h1 className='banner-container__header'>Drink Voyage</h1>


    </div>



  )

}

export default WelcomeBanner