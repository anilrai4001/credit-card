import React from 'react'
import './CardFront.css'

const CardFront = ({cardNumber, cardHolder, cardMonth, cardYear}) => {
  
  const four = [];
  const eight = [];
  const twelve = [];
  const sixteen = [];
  for(let i=0;i<4;i++){
    four.push(<span>{cardNumber[i]}</span>);
  }
  for(let i=4;i<8;i++){
    eight.push(<span>{cardNumber[i]}</span>);
  }
  for(let i=8;i<12;i++){
    twelve.push(<span>{cardNumber[i]}</span>);
  }
  for(let i=12;i<16;i++){
    sixteen.push(<span>{cardNumber[i]}</span>);
  }
  
  return (
    <div className='CardFront'>
      <div className='disc'></div>
      <div className='ring'></div>
      <div className='cardnumber'>
        {four}<span>&nbsp;</span>{eight}<span>&nbsp;</span>{twelve}<span>&nbsp;</span>{sixteen}
        </div>
      <div className='cardholder'>{cardHolder}</div>
      <span className='month'>{cardMonth}</span><span className='slash'>/</span><span className='year'>{cardYear}</span>
      
        
      
    </div>
  )
}

export default CardFront
