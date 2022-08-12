import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Books from './Books'

function Favourites({books}) {
  return (
    <div>
      <h3 className='favbooks'>Your favoutite books</h3>
      {books.map((prom) => (
         <Books book={prom} key={prom.id} present={false}/>
      ))}
    </div>
  )
}

/*
const Favourites = () => {
  const[books, setBooks] = useState(null);
  useEffect(()=>{
    if(books===null){
     axios.get('http://127.0.0.1:8000/api/books').then((res)=>{
      setBooks(res.data.books)
     }).catch((e)=>{

     })
    }
  })

  return (
    <div>
      <h3 className='favbooks'>Your favoutite books</h3>
      {books.map((book) => (
         <Books book2={book} key={book.id} present={false}/>
      ))}
    </div>
  )
}
*/
export default Favourites


