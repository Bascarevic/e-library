import React from 'react'
import DataTable from './DataTable';

function Profile() {
    /*
    const[books, setBooks] = useState(null);
    const[q, setQ] = useState("");
    useEffect(()=>{
      console.log("Ovde bi trebalo da se prikazu sve knjige ulogovanog")
      if(books===null){
       axios.get('http://127.0.0.1:8000/api/userbooks').then((res)=>{
        setBooks(res.data.books)
       }).catch((e)=>{
  
       })
      }
    })
*/
    return(
        <div className='App'>
            
            <DataTable/>
        </div>

    );
}

export default Profile