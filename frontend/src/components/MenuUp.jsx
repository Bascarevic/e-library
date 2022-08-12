import React from 'react'

function MenuUp() {
  return (
    <div>
    <div className='menuUp'>
      <div className='menuUpText'>Welcome to e-library</div>     
    </div>
    <div className='options'>

      <div><button type="button" class="btn btn-danger btn btn-info" id="add_button">Add book</button></div>
      <div><button type="button" class="btn btn-danger btn btn-info" id="change_button">Change book's properties</button> </div>
      <div><button type="button" class="btn btn-danger btn btn-info" id="remove_button">Remove book</button> </div>
    </div>
    </div>
  )
}

export default MenuUp
