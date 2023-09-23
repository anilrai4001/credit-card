import React from 'react'
import './Main.css'
import Form from './Form'

const Main = ({setCardNumber, setCardHolder, setCardMonth, setCardYear, setCardCVC}) => {

  
  return (
    <div className='Main'>
      <Form setCardNumber={setCardNumber} setCardHolder={setCardHolder} setCardMonth={setCardMonth} setCardYear={setCardYear} setCardCVC={setCardCVC}/>
    </div>
  )
}

export default Main
