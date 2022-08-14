import React from 'react'

function PopUp({book}) {
  
  return (
    <div className='popup'>
      <div className='box'> 
      <div className='titlePopUp'>{book.title}</div>
      <div className='description'>{book.description}</div>
      <button className='close' onClick={book.handleClose}>X</button>
      </div>
    </div>
  )
  
 
}
export default PopUp
