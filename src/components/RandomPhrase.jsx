import React from 'react'

const RandomPhrase = ({ quote }) => {

    const { author, phrase } = quote;

  return (
    <div className='phraseAuthor'>
        <p>{phrase}</p>
        <p className='fuente'>Fuente: {author}</p>
    </div>
  )
}

export default RandomPhrase