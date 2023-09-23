import React from 'react'
import './CardBack.css'

const CardBack = ({cardCVC}) => {
  
  return (
    <div className='CardBack'>
      <div className='blackstrip'></div>
      <div className='greystrip'>
        <span className='cvc'>{cardCVC}</span>
      </div>

      <div className='design'>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
        <div className='four'></div>
      </div>
      <div className='design'>
        <div className='three'></div>
        <div className='one'></div>
        <div className='four'></div>
        <div className='two'></div>
      </div>
      <div className='design'>
        <div className='four'></div>
        <div className='three'></div>
        <div className='two'></div>
        <div className='one'></div>
      </div>

    </div>
  )
}

export default CardBack