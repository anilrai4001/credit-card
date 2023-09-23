import React from 'react'
import './Form.css'
import { useState } from 'react'



const Form = ({setCardNumber, setCardHolder, setCardMonth, setCardYear, setCardCVC}) => {

  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  const [cvc,setCVC] = useState('');

  const handleCardName = (e)=>{
    setName(e.target.value);
  }
  const handleCardNumber = (e)=>{
    setNumber(e.target.value);
  }
  const handleCardMonth = (e)=>{
    setMonth(e.target.value);
  }
  const handleCardYear = (e)=>{
    setYear(e.target.value);
  }
  const handleCardCVC = (e)=>{
    setCVC(e.target.value);
  }
  
  

  const getDetails = (e)=>{
    e.preventDefault();
    if(name && number && number.length===16 && month && month.length===2 && month>=1 && month<=12 && year && year.length===2 && year>=23 && year<=99 && cvc && cvc.length===3){
      setCardHolder(name);
      setCardNumber(number);
      setCardMonth(month);
      setCardYear(year);
      setCardCVC(cvc);
    }
    if(!name){
      document.getElementById('nameCheck').style.display = 'block';
    }else{
      document.getElementById('nameCheck').style.display = 'none';
    }

    

    if(number && (number.length===16)){
      document.getElementById('numberCheck').style.display = 'none';
    }
    else{
      document.getElementById('numberCheck').style.display = 'block';
    }



    if(month && month.length===2 && month>=1 && month<=12){
      document.getElementById('monthCheck').style.display = 'none';
    }
    else{
      document.getElementById('monthCheck').style.display = 'block';
    }


    
    if(year && year.length===2 && year>=23 && year<=99) {
      document.getElementById('yearCheck').style.display = 'none';
    }
    else{
      document.getElementById('yearCheck').style.display = 'block';
    }


    if(cvc && cvc.length===3){
      document.getElementById('cvcCheck').style.display = 'none';

    }
    else{
      document.getElementById('cvcCheck').style.display = 'block';
    }
    
  }

  

  return (
    <div className='Form'>
      <form >

        <div style={{margin:'15px 0'}}>
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <input type='text' id='name' placeholder='e.g. Jane Appleseed' onChange={handleCardName} />
          <p id='nameCheck' className='checks' >Cardholder name required</p>
        </div>

        <div style={{margin:'15px 0'}}>
        <label htmlFor='number'>CARD NUMBER</label>
        <input type='number' id='number' placeholder='e.g. 1234 5678 9123 0000' onChange={handleCardNumber}/>
        <p id='numberCheck' className='checks'>Card number required</p>
        </div>

        <div className='inline-content' style={{margin:'15px 0'}}>
          <div>
            <div className='label' style={{width:'100%'}}><label htmlFor='month'>EXP. DATE (MM/YY)</label></div>
            <div>
              <input type='number' id='month' placeholder='MM' onChange={handleCardMonth}/>
              <p id='monthCheck' className='checks'>Month required</p>
            </div>
            <div>
              <input type='number' id='year' placeholder='YY'  onChange={handleCardYear}/>
              <p id='yearCheck' className='checks'>Year required</p>
            </div>
          </div>

          <div>
            <label htmlFor='cvc'>CVC</label>
            <input type='number' id='cvc' placeholder='e.g. 123' onChange={handleCardCVC}/>
            <p id='cvcCheck' className='checks'>CVC required</p>
          </div>
        </div>

        <button id='confirm' onClick ={getDetails} style={{margin:'15px 0'}}>Confirm</button>

      </form>
    </div>
  )
}

export default Form