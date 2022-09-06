import React from 'react'
import {BsChevronDoubleRight} from 'react-icons/bs'
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
//{token}
function MenuDown () {

  const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (weatherData == null) {

            axios.get('http://api.weatherapi.com/v1/current.json?key=3dd6b82dd3274c4e9d3182627221206&q=London')
                .then((res) => {
                    console.log(res)
                    setWeatherData(res.data)
                }).catch((e) => {
            })

        }
    }, [weatherData])

    //https://programming-quotes-api.herokuapp.com/quotes/random

    let user_role = (window.sessionStorage.getItem('user_role'));

  return (
    <div className='menuDown'>
      <div className='menuDownText'>See my favourite books
      <Link to='/fav' className='button_next'>
        <BsChevronDoubleRight></BsChevronDoubleRight>
        </Link> 
        
        <br></br>
        {user_role!== 'admin'?<></>:
        <a href="/profile" className="link-danger">Profile</a>
      }
        </div>
        {weatherData == null ? <></> :
        <div className='weatherDataText'>
          City:{weatherData.location.name}, {weatherData.location.country} <br></br>
          Temperature:  {weatherData.current.temp_c} C
          </div>
         }
         
    
       
        
    </div>
  )
}

export default MenuDown
