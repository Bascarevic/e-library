import React from 'react'
import './App.css';
import { useState } from 'react';


import Bookstore from './components/Bookstore';
import Favourites from './components/Favourites';
import MenuDown from './components/MenuDown';
import MenuUp from './components/MenuUp';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from './components/Login';
import Register from './components/Register';
import MenuFixed from './components/MenuFixed';
import Profile from './components/Profile';

function App() {

 const [selectedBooks, setSelected] = useState([]);


  const [books]=useState([
    {
      id: 1,
      //image: picture1,
      title: "Anna Karenina",
      author:"Leo Tolstoy",
      category: "romance",
      description: "Throughout, Tolstoy points no moral, merely inviting us not to judge but to watch. As Rosemary Edmonds comments, 'He leaves the shifting patterns of the kaleidoscope to bring home the meaning of the brooding words following the title, 'Vengeance is mine, and I will repay.",
      counter: 0
    },
    {
      id: 2,
     // image: picture2,
      title: "The Brothers Karamazov",
      author:"Fyodor Dostoevsky",
      category: "crime",
      description: "The Brothers Karamazov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental.",
      counter: 0
    },
    {
      id: 3,
      //image: picture3,
      title: "The Metamorphosis",
      author:"Franz Kafka",
      category: "drama",
      description: " It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosis has taken its place as one of the most widely read and influential works of twentieth-century fiction",
      counter: 0
    },
    {
      id: 4,
      //image: picture4,
      title: "The Little Prince",
      author:"Antoine de Saint-Exupéry",
      category: "fiction",
      description: "The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages",
      counter: 0
    },
    {
      id: 5,
     // image: picture5,
      title: "Crime and Punishment",
      author:"Fyodor Dostoevsky",
      category: "crime",
      description: "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption",
      counter: 0
    },
    {
      id: 6,
     // image: picture6,
      title: "The Master and Margarita",
      author:"Mikhail Bulgakov",
      category: "comedy",
      description: "The Master and Margarita is recognized as one of the essential classics of modern Russian literature. The novel's vision of Soviet life in the 1930s is so ferociously accurate that it could not be published during its author's lifetime and appeared only in a censored edition in the 1960s. Its truths are so enduring that its language has become part of the common Russian speech.",
      counter: 0
    },
    {
      id: 7,
      //image: picture7,
      title: "War and Peace",
      author:"Leo Tolstoj",
      category: "fiction",
      description: "In Russia's struggle with Napoleon, Tolstoy saw a tragedy that involved all mankind. Greater than a historical chronicle, War and Peace is an affirmation of life itself, `a complete picture', as a contemporary reviewer put it, `of everything in which people find their happiness and greatness, their grief and humiliation'.",
      counter: 0
    },
    {
      id: 8,
      //image: picture8,
      title: "Eugene Onegin",
      author:"Alexander Pushkin",
      category: "novel in verse",
      description: "Eugene Onegin is the master work of the poet whom Russians regard as the fountainhead of their literature. Set in 1820s Russia, Pushkin's verse novel follows the fates of three men and three women. Engaging, full of suspense, and varied in tone, it also portrays a large cast of other characters and offers the reader many literary, philosophical, and autobiographical digressions, often in a highly satirical vein.",
      counter: 0
    },

  ]);


  function favouriteBooks(){
    
    let favs = books.filter((book)=>book.counter>0);
    setSelected(favs);

  }


  function likeABook(book){
    console.log("Success");
    alert("You liked: "+book.title+" written by "+book.author_id.name);

    books.forEach((book)=>{
      /*
      if(book.id==id){
        book.counter++;
      }
      */
      
    }
    )

    selectedBooks.push(book);
    // favouriteBooks();

  };

  return (
    <BrowserRouter>
       
       <Routes>
       <Route path='/login' element={<div><MenuFixed></MenuFixed><Login/></div>}/>
       <Route path='/register' element={<div><MenuFixed/><Register/></div>}/>
        <Route path='/' element={<div><MenuUp></MenuUp><Bookstore books={books} Add={likeABook}></Bookstore><MenuDown></MenuDown></div>}/>
        <Route path='/fav' element={<div><MenuFixed></MenuFixed><Favourites books={selectedBooks} /></div>}/>
        <Route path='/profile' element={<div><MenuUp></MenuUp><Profile></Profile></div>}/>
       </Routes>
     
       
      
    </BrowserRouter>
  )
}

export default App
