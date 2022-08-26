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

  return (
    <div className='menuDown'>
      <div className='menuDownText'>See my favourite books
      <Link to='/fav' className='button_next'>
        <BsChevronDoubleRight></BsChevronDoubleRight>
        </Link>
        
        {weatherData == null ? <></> :
        <div className='weatherData'>
          <p>City:{weatherData.location.name}, {weatherData.location.country}</p>
          <p>Temperature:  {weatherData.current.temp_c} C</p>
          </div>
         }
         {quotesData == null ? <></> ://ovde moze da se izvuce i autor citata
         <div className='quotesData'>
          <p>Quote: {quotesData.en}</p>
         </div>
         }
    
        </div>
        
    </div>
  )
}

export default MenuDown
