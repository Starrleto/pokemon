import React from 'react'
import image from '../assets/image 1.png'

const HeaderComponent = () => {
  return (
    <div>
        <img src={image} alt="POKEMON" className='img-fluid header-picture'></img>
        <h1>PokeSearch</h1>
    </div>
  )
}

export default HeaderComponent