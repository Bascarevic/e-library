import React from 'react'
import { useState } from 'react';
import {FaHeart} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import PopUp from './PopUp';

function Books({book, Add, present}) {

  const [selectedButton, setColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (

    
    <div className={present===1 ? 'book' : 'book2'}>
      <img className='book_img'
              src={book.image}></img>

      <div className='title'>Title: {book.title}</div>
      <div className='author'>Author: {book.author_id.name}  {book.author_id.surname}</div>
      <div className='category'>Category: {book.category_id.type}</div>
      {present===true ? 
    <>
    <div className='more'>
    <style>{`
        .red {color: red}
        .white {color: white}
        
      `}</style>
      
    <button className='button_more' onClick={togglePopup}>
      <AiOutlinePlus></AiOutlinePlus>
      {isOpen &&  <PopUp
      handleClose={()=>{}}
      content={<div className='desc'>{book.description}</div>}
      />}
     
      </button>
    Read more
    </div>
    <div className='like'> 
    <button style={{border: "none"}} className={selectedButton}
    onMouseDown={() => setColor((selectedButton) => (selectedButton === "white" ? "red" : "white"))}
    onClick={()=>Add(book)}>
      <FaHeart></FaHeart>
      </button>
      Like the book
    </div>

    </> : <></>

    }
      
    </div>
  )
}

export default Books
