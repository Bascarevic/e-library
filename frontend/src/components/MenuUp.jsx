import React from 'react'
import { useState, useEffect } from 'react';
import PopupAddBook from './PopupAddBook';
import PopupRemoveBook from './PopupRemoveBook';
import axios from 'axios';

function MenuUp() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
 
  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  }
 
 // const [isOpenChange, setIsOpenChange] = useState(false);
 
 
  const [isOpenRemove, setIsOpenRemove] = useState(false);
 
  const togglePopupRemove = () => {
    setIsOpenRemove(!isOpenRemove);
  }

  const[quotesData, setQuotesData] = useState(null);

  useEffect(()=>{
    if(quotesData == null){
      axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((res)=>{
        console.log(res)
        setQuotesData(res.data)
      }).catch((e)=>{

      })
    }
  }, [quotesData])
 

 let user_role = (window.sessionStorage.getItem('user_role'));
 console.log(user_role);


 function logoutUser(e) {
  e.preventDefault()
  axios.post('http://localhost:8000/api/logout', {}, {
      headers: {
          'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
      }
  })
      .then((res) => {
          console.log(res.data)
          if (res.data.success) {
              alert(res.data.message)
              window.sessionStorage.clear()
              window.location.href = '/'
          }
      }).catch((e) => {
      console.log(e)
  })
}
  return (
    <div>
    <div className='menuUp'>
      <div className='menuUpText'>Welcome to e-library</div>  
      <button className='btn btn-danger btn btn-info' style={{marginRight: '0px'}} //PROBAJ DA BOLJE POZICIONIRAS OVO
                                    onClick={logoutUser}>Odjava</button>  
    </div>
    {user_role !== 'admin'?
    <div  className='options'>
    {quotesData == null ? <></> ://ovde moze da se izvuce i autor citata
         
          <p className='quotesData'>Quote of the day: {quotesData.en} - {quotesData.author}</p>
          
         }
    </div>: 
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
      value="Remove"
      onClick={togglePopupRemove}
    />
        {isOpenRemove && <PopupRemoveBook
      handleClose={togglePopupRemove}
    />}
      
      </div>
    </div>
        }
    </div>
  )
        }
export default MenuUp