import React from 'react'
import { useState } from 'react';
import {FaHeart} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BsFileEarmarkArrowDown} from 'react-icons/bs'
import PopUp from './PopUp';
import PopupChangeBook from './PopupChangeBook';
import axios from 'axios';

function Books({book, Add, present}) {

  const [selectedButton, setColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false);
  

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [isOpenChange, setIsOpenChange] = useState(false);
 
  const togglePopupChange = () => {
    setIsOpenChange(!isOpenChange);
  }

  
  function download() {
    axios({
      url: 'http://127.0.0.1:8000/api/download',
      method: 'GET',
      responseType: 'blob',
    }).then((response)=>{
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CV.pdf'); //msm da ovde moze bilo koje drugo ime
     // document.body.appendChild(link);
      link.click();
    })
    
  }
  let user_role = (window.sessionStorage.getItem('user_role'));
  return (

    
    <div className={present===1 ? 'book' : 'book2'}>
      <img className='book_img'
              src={book.image}></img>

      <div className='title'>Title: {book.title}</div>
      <div className='author'>Author: {book.author_id.name_and_surname}  {book.author_id.surname}</div>
      <div className='category'>Category: {book.category_id.type}</div>
      {present===true ? 
    <>
    {/*Read more*/}
    <div className='more'>
    <style>{`
        .red {color: red}
        .white {color: white}
        
      `}</style>
      
    <button className='button_more' onClick={togglePopup}>
      <AiOutlinePlus></AiOutlinePlus>
      {isOpen &&  <PopUp
      handleClose={()=>{}} 
      book ={book}
     /* content={<div className='desc'>{book}</div>} */
      />}
     
      </button>
    Read more
    </div>
    {/*Update book*/}
    {user_role!== 'admin'?<></>:
    <div className='more'>
    <style>{`
        .red {color: red}
        .white {color: white}
        
      `}</style>
      
  <button className='button_more'  > 
  <AiOutlineBook onClick={togglePopupChange}></AiOutlineBook>
      {isOpenChange && <PopupChangeBook 
       handleClose={()=>{}} 
      book={book}
      handleCloseChange={togglePopupChange}
    />}
    </button>
  
     
    Update book
    </div>
}
{/*Like book*/}
    
    <div className='like'> 
    <button style={{border: "none"}} className={selectedButton}
    onMouseDown={() => setColor((selectedButton) => (selectedButton === "white" ? "red" : "white"))}
    onClick={()=>Add(book)}>
      <FaHeart></FaHeart>
      </button>
      Like the book
    </div>

     {/*ODAVDE KRECE DOWNLOAD;  RADII!!!!!!!!!!!!
     p.s. promeniti pdf fajl koji se skida */}

<div className='more'>
    <style>{`
        .red {color: red}
        .white {color: white}
        
      `}</style>
     
  <button className='button_more' onClick={download}>
      <BsFileEarmarkArrowDown ></BsFileEarmarkArrowDown>
   
    
    </button>
     
    Download book
    </div>

    </> : <></>

    }
      
    </div>
  )
}

export default Books
