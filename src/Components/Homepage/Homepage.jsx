import React from 'react'
import "./Homepage.scss"
import alcoBus from "../../Pictures/cartoon_bus.png";
const Homepage = () => {

  return (

    <div className='welcome-container'>


        <h1 className='welcome-container__heading'> Welcome to Drink Voyage!</h1> 

        <p className='welcome-container__paragraph'>
        Welcome to "Drink Voyage: Explore the Essence of Europe's Finest Drinks"! Our website is your one-stop destination for discovering a vast collection of exquisite and diverse alcohols from across the European continent. Whether you're an adventurous connoisseur, an aspiring mixologist, or simply someone who appreciates the rich cultural heritage of Europe's libations, Drink Voyage has something for everyone.

<p className='welcome-container__paragraph'>At Drink Voyage, we pride ourselves on curating an extensive selection of alcoholic beverages that represent the distinct flavors and traditions of each European country. From the smooth and sophisticated whiskies of Scotland to the fiery and aromatic grappas of Italy, our platform showcases an unparalleled range of spirits, wines, liqueurs, and more.</p>

<p className='welcome-container__paragraph'>Immerse yourself in the wonders of European craftsmanship as you browse through our user-friendly interface. Each product page is thoughtfully designed to provide you with comprehensive information about the drink's origin, production methods, tasting notes, and recommended pairings. Whether you're seeking a rich and robust Bordeaux wine, a crisp and refreshing German lager, or a delicate French champagne, Drink Voyage offers a platform that satisfies every palate.</p>

Discover the hidden gems and lesser-known gems alike through our expertly crafted search and filtering system. Explore by country, spirit type, flavor profiles, or even by food pairing suggestions to find the perfect match for your taste preferences or occasion. Our goal is to empower you with knowledge and help you make informed decisions as you venture into the world of European alcohol.

Drink Voyage also recognizes the importance of community and sharing experiences. Join our vibrant online community of enthusiasts, where you can engage in discussions, share recommendations, and learn from fellow aficionados. Uncover the stories behind the labels, swap tasting notes, and embark on a virtual journey across Europe's diverse alcohol landscape.</p>

<p className='welcome-container__paragraph'> We have also partnered with reputable and reliable distributors to ensure a seamless and secure shopping experience. With just a few clicks, you can add your desired products to your cart and have them delivered right to your doorstep, allowing you to indulge in the flavors of Europe without leaving the comfort of your home.

Whether you're a seasoned spirit explorer or a curious beginner, Drink Voyage offers an immersive and educational platform that celebrates the unique heritage and craftsmanship of European alcohols. Embark on a delightful voyage through the tastes and traditions of Europe, one sip at a time, only at Drink Voyage.
        </p>

       <div className='welcome-container__picture-container'>
        <img src={alcoBus} alt="bus" className='welcome-container__picture' />
        </div> 



    </div>

  )


}

export default Homepage