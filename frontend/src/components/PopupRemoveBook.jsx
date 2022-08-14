import axios from 'axios';
import React from 'react'
import { useState } from "react"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
function PopupRemoveBook () {
 let id;
 let user= useParams();

 function vratiID(){
    books.forEach(book => {
        if(book.title === removeData.title){
           // console.log(book);//nasao je knjigu
           // return book.id;
           console.log(book.id);
           id = book.id;
           console.log(id)
        }
    });
}

    function handleRemoving(e){
        e.preventDefault();
        
       
       vratiID();
       if(user.user_id !== null && user.user_id!==undefined){
         axios.delete('http://127.0.0.1:8000/api/booksStore/'+id + user.user_id,{
          headers:{
            'Authorization' : 'Bearer ' +window.sessionStorage.getItem('auth_token')
      }
     })
     .then((res)=>{
      console.log(res.data)
      if(res.data.success){
          window.alert(res.data.message)
          window.location.reload()
      }else{
          alert("Niste ulogovani!")
      }
       
  }).catch((e)=>{
      console.log(e)
      alert(e.message)
  })
}else{
  axios.delete('http://127.0.0.1:8000/api/booksStore/'+id, {
      headers:{
          'Authorization' : 'Bearer ' +window.sessionStorage.getItem('auth_token')
      }
    }) .then((res)=>{
      console.log(res.data)
     // alert(res.data)
      if(res.data.success){
          window.alert(res.data)
          window.location.reload()
      }else{
          alert(res.data)
      }
       
  }).catch((e)=>{
      console.log(e)
      //console.log(window.sessionStorage.getItem('auth_token'))
      alert(e.message)
  })

}
      }

      const[books, setBooks] = useState(null);
      useEffect(()=>{
        console.log("Ovde bi trebalo da se prikazu sve knjige")
        if(books===null){
         axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
          setBooks(res.data.books)
         }).catch((e)=>{
     
         })
        }
      })
     

    const[removeData, setRemoveData] = useState({
        title:"",
    });
 
 
function handleInput(e){
    
   e.persist();
  setRemoveData({
    ...removeData,
    [e.target.name]:e.target.value,
  });
}
 

 
 
return (
    <div className='popupRemove'>
    <div className='boxRemove'>
    <div class="remove_book">
          <form onSubmit={handleRemoving}>
              <div class="form-group">
                  <label>Book</label>
                  <input type="text" id="form3Example3" className="form-control form-control-lg" name="title" placeholder="Write a title of the book you want to remove." onInput={handleInput}/>
              </div>  
              <div className="text-center text-lg-start mt-2 pt-2">
              <button type="submit" className="remove_btn">Remove</button>
              </div>
          </form>        
      </div>
    </div>
  </div>
)
}
 
export default PopupRemoveBook
