import axios from 'axios';
import React from 'react'
import { useState } from "react"
 
const PopupAddBook = () => {
    function handleAdding(e){
        e.preventDefault();
        /*axios.post("api/add", addData).then(res=>{
            console.log(res.data);
            navigate("/add");
        }).catch(e=>{
            console.log(e)
        });
      */
     /*
      axios.post('http://127.0.0.1:8000/api/books', addData,{
          headers: {
              'Authorization' : 'Bearer' + window.sessionStorage.getItem('auth_token')
          }
      }).then((res)=>{
          console.log(res.data)
          window.alert(res.data.message)
      }).catch((e)=>{
          console.log(e)
          window.alert(e.message + '\nProveri unos')
      })
      }
 */

      axios.post('http://127.0.0.1:8000/api/booksStore', addData)
      .then((res)=>{
        console.log(res.data)
        window.alert(res.data.message)
        if (res.data.success) {
            window.location.href='/' //ovo je jedan nacin resenja, al ovo ponovo ucitava sve
                 
        }
    }).catch((e)=>{
        console.log(e)
        window.alert(e.message + '\nProveri unos')
    })
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
    /*
    let newAddData = addData;
    newAddData[e.target.name] = e.target.value;
    console.log(newAddData)
   setAddData(newAddData);
   */
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
      </div>
    </div>
  )
}
 
export default PopupAddBook
