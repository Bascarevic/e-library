import axios from 'axios';
import React from 'react'
import { useState } from "react"
import { useParams } from 'react-router-dom';
 
function PopupChangeBook ({book}){
 let user = useParams();

  function handleChanging(e){
    e.preventDefault();
 let bookId = book.id;
 if(user.user_id !== null && user.user_id!==undefined){//+ user.user_id
    axios.put('http://127.0.0.1:8000/api/booksStore/'+bookId , changeData,{
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
      console.log(changeData)
      window.alert(e.message + '\nProveri unos ' + user.user_id)
  })
}else{
  axios.put('http://127.0.0.1:8000/api/booksStore/'+bookId, changeData,{
      headers:{
          'Authorization' : 'Bearer ' +window.sessionStorage.getItem('auth_token')
      }
    }) .then((res)=>{
      console.log(res.data)
      if(res.data.success){
          window.alert(res.data.message)
          window.location.reload()
      }else{
          alert(res.data.error)
      }
       
  }).catch((e)=>{
      console.log(e)
      console.log(window.sessionStorage.getItem('auth_token'))
      window.alert(e.message + '\nProveri unos' + user.user_id)
  })

} 
}

  const[changeData, setChangeData] = useState({
    title:"",
    author: "",
    category: "",
    description: ""
});
 
//let navigate = useNavigate();
 
function handleInput(e){
  
  e.persist();
  setChangeData({
    ...changeData,
    [e.target.name]:e.target.value,
  });
  
}
/*
handleClose = () => {
  this.setState({ model_open: false })
}
*/

  return (
      <div className='popupChange'>
      <div className='boxChange'>
      <div class="change_book">
            <form onSubmit={handleChanging}>
               
                    
                <div class="form-group" >
                    <label>Title</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="title" defaultValue={book.title} onInput={handleInput} />
                </div>  
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="author"  defaultValue={book.author_id.name_and_surname} onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="category"  defaultValue={book.category_id.type} onInput={handleInput}/>
                </div>    
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="description"  defaultValue={book.description} onInput={handleInput}/>
                </div> 
                <div className="text-center text-lg-start mt-2 pt-2">
                <button type="submit" className="change_btn"  >Change</button>
                </div>
                
            </form>     
            
        </div>
       {/* <button className='close' onClick={book.handleClose}>x</button> */} 
      </div>
     
    </div>
    
  )
}
 
export default PopupChangeBook
