import React from 'react'

function PopUp({books}) {
  return (
    <div className='popup'>
      <div className='box'>
      <div className='titlePopUp'>{books.title}</div>
      <div className='description'>{books.description}</div>
      <button className='close' onClick={books.handleClose}>Close</button>
      </div>
    </div>
  )
}

export default PopUp
