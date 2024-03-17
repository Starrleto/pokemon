import React from 'react'
import image from '../../assets/image 1.png'
import './style.css'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <img src={image} alt="POKEMON" className='img-fluid header-picture'></img>
        <h1 className='yeah'>PokeSearch</h1>
    </div>
  )
}

export default HeaderComponent