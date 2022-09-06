import React, { useEffect, useState } from 'react'
import Books from './Books'
import axios from "axios";
/*
function Bookstore({books, Add}) {
  
  return (
    <div className='bookstore'>
      
      {books.map((prom) => (
         <Books book={prom} key={prom.id} Add={Add} present={true}/>
      ))}
    
    
    </div>
  )
}
*/

function Bookstore({Add}) {
  const[books, setBooks] = useState(null);
  useEffect(()=>{
    console.log("Ovde bi trebalo da se prikazu sve knjige")
    if(books===null){
     axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
      setBooks(res.data.books)
      console.log(res.data.books);
     }).catch((e)=>{

     })
    }
  })

  return(
    <>
    <div className='bookstore'>
      {books===null?<></>:
        books.map((book)=>(
          <Books book={book} key={book.id} Add={Add}  present={true}/>
      ))}
    </div>
    </>
  )
}

export default Bookstore
