import React from 'react'
import it from '/ita.jpg'

const Loading = () => {
  return (
    <div className='preloader'>
      <img src={it} alt="Loading..." />
      <h1>Loading...</h1>
    </div>
  )
}

export default Loading
