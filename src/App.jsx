import './App.css';
import { useState } from 'react';
import RandomPhrase from './components/RandomPhrase';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import ButtonPhrase from './components/ButtonPhrase';
import rectangle from './assets/rectangle1.svg';
import comillas from './assets/comillas.jpg';
import bgArray from './utils/bgArray.json';
function App() {

const sentence = randomIndex(phrases);
const bgIndex = randomIndex(bgArray);

const [quote, setQuote] = useState(sentence);
const [bgImgFondo, setBgImgFondo] = useState(bgIndex);

const bgStyle = {
  backgroundImage: `url('../fondo${bgImgFondo}.jpg')`,
}

  return (
    <div  className='imgFondo' style={bgStyle}>
      <div className='container'>
        <h1>GALLETAS DE LA<br/>FORTUNA</h1>

        <div className='rectangle'>
          <img src={rectangle}/>
        </div>

        <RandomPhrase
          quote={quote} 
        />
        
        <ButtonPhrase
        setQuote={setQuote}
        setBgImgFondo={setBgImgFondo}
        />
      </div>
    </div>
  )
}

export default App;
