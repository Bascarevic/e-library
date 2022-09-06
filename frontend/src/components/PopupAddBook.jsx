import axios from 'axios';
import React from 'react'
import { useState } from "react"
import {useParams} from "react-router-dom";
 
const PopupAddBook = () => {

    let user= useParams();
    function handleAdding(e){
        e.preventDefault();
        
      if(user.user_id !== null && user.user_id!==undefined){
      axios.post('http://127.0.0.1:8000/api/booksStore/'+user.user_id, addData,{
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
        window.alert(e.message + '\nProveri unos ' + user.user_id)
    })
}else{
    axios.post('http://127.0.0.1:8000/api/booksStore', addData,{
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

} //OBRATI PAZNJU NA OVO!!!!!
}
  /*
 const[userData, setUserData] = useState({
        email:"",
        password: "",
    });
  */
  const[addData, setAddData] = useState({
    title:"",
    author: "",
    category: "",
    description: ""
});
 
//let navigate = useNavigate();
 
function handleInput(e){
  //e.persist();
  setAddData({
    ...addData,
    [e.target.name]:e.target.value,
  });
}



  return (
      <div className='popupAdd'>
      <div className='boxAdd'>
   
 
      <div class="add_book">
            <form onSubmit={handleAdding}>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="title" onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="author" onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="category" onInput={handleInput}/>
                </div> 
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="description" onInput={handleInput}/>
                </div>    
                <div className="text-center text-lg-start mt-2 pt-2">
                <button type="submit" className="add_btn" >Add</button>
                </div>
            </form>        
        </div>
       {/* <button className='close' onClick={book.handleClose}>x</button> */} 
      </div>
    </div>
  )
}
 
export default PopupAddBook
