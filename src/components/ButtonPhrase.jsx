import React from 'react';
import phrases from '../utils/phrases.json';
import randomIndex from '../services/randomIndex';
import bgArray from '../utils/bgArray.json';

const ButtonPhrase = ({setQuote, setBgImgFondo}) => {

  
  const handleButton = ( ) => {
    const bgIndex = randomIndex(bgArray)
      const sentence = randomIndex(phrases)
        setQuote(sentence)
        setBgImgFondo(bgIndex)
    }

  return (
    <div className='btn'>
    <button onClick={handleButton}>Ver Otro</button>
    </div>
  )
}

export default ButtonPhrase;