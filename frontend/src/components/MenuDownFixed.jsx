import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function MenuDownFixed({token}) {

    function handleLogout(){
        var config = {
            method: 'post',
            //url: 'api/logout',
            headers: { 
              'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token"),
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            window.sessionStorage.setItem("auth_token", null);
            //navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <div className='menuDown'>
    <div className='logOut'>
    <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Logout"
      onClick={handleLogout}>
      </input>
      </div>
  </div>
  )
}

export default MenuDownFixed