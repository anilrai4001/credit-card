import React from 'react'
import './Side.css'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Side = ({cardNumber, cardHolder, cardMonth, cardYear, cardCVC }) => {
  
  return (
    <div className='Side'>
      <CardFront cardNumber={cardNumber} cardHolder={cardHolder} cardMonth={cardMonth} cardYear={cardYear} />
      <CardBack cardCVC={cardCVC} />
    </div>
  )
}

export default Side
