import React from 'react'
import { useState } from 'react';
import PopupChangeBook from './PopupChangeBook';
import PopupAddBook from './PopupAddBook';
import PopupRemoveBook from './PopupRemoveBook';

function MenuUp() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
 
  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  }
 
  const [isOpenChange, setIsOpenChange] = useState(false);
 
  const togglePopupChange = () => {
    setIsOpenChange(!isOpenChange);
  }
 
  const [isOpenRemove, setIsOpenRemove] = useState(false);
 
  const togglePopupRemove = () => {
    setIsOpenRemove(!isOpenRemove);
  }
 


  return (
    <div>
    <div className='menuUp'>
      <div className='menuUpText'>Welcome to e-library</div>    
    </div>
    <div className='options'>
 
      <div>
      <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Add book"
      onClick={togglePopupAdd}
    />
        {isOpenAdd && <PopupAddBook
      handleClose={togglePopupAdd}
    />}
      </div>
 
      <div>
      <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Change book's characteristics"
      onClick={togglePopupChange}
    />
        {isOpenChange && <PopupChangeBook
      handleCloseChange={togglePopupChange}
    />}
 
 </div>
 
      <div>
      <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Remove"
      onClick={togglePopupRemove}
    />
        {isOpenRemove && <PopupRemoveBook
      handleClose={togglePopupRemove}
    />}
      
      </div>
    </div>
 
    </div>
  )
        }
export default MenuUp