import './App.css';
import Side from './Side'
import Main from './Main'
import { useState } from 'react';

function App() {

  const [cardNumber, setCardNumber] = useState('0000000000000000');
  const [cardHolder, setCardHolder] = useState('JANE APPLESEED');
  const [cardMonth, setCardMonth] = useState('00');
  const [cardYear, setCardYear] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');

  return (
    <div className="App">
      <Side cardNumber={cardNumber} cardHolder={cardHolder} cardMonth={cardMonth} cardYear={cardYear} cardCVC={cardCVC} />
      <Main setCardNumber={setCardNumber} setCardHolder={setCardHolder} setCardMonth={setCardMonth} setCardYear={setCardYear} setCardCVC={setCardCVC}/>
    </div>
  );
}

export default App;
