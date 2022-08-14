import axios from 'axios';
import React from 'react'
import { useState } from "react"
import { useEffect } from 'react';
 
function PopupRemoveBook () {
 let id;


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
     axios.delete('http://127.0.0.1:8000/api/booksStore/'+id)
     .then((res)=>{
        console.log(res.data)
        window.alert(res.data)
        window.location.reload()
        /*
        if (res.data.success) {
            window.location.href='/' //ovo je jedan nacin resenja, al ovo ponovo ucitava sve
                 
        }
        */
    }).catch((e)=>{
        console.log(e)
        //window.alert(e.message + '\nProveri unos')
    })
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
