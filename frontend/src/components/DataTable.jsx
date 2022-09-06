import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'antd';
import { DataGrid } from '@mui/x-data-grid';


const DataTable = ()=>{

    const[gridData, setGridData] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        loadData();
    }, []);

    const loadData = async() =>{
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/userbooks', {
        headers:{
            'Authorization' : 'Bearer ' +window.sessionStorage.getItem('auth_token')
        }
      })
      .then((res)=>{
        console.log(res.data) //prikazuje se
        setGridData(res.data.books);
      }).catch((e)=>{

      })


        setLoading(false);
    }
    console.log("grid data", gridData); //prikazuje se

    const modifedData = gridData.map(({author_id, ...item})=>({
        ...item,
        key: item.id,
        author: author_id.name_and_surname
    }));

    const columns = [{
        headerName: "Title",
        field: "title",
        width: 450
    },
    {
        headerName: "Author",  //title
        field: "author", //dataIndex
        width: 450 //align
    },
    {
        headerName: "Description",
        field: "description",
        width: 450
    }//PREMESTITI DA SVE BUDE U JEDNOJ KOMPONENTI, DA NE IDE I U PROFILE I U DATATABLE
];

    return(
        <div className="dataGrid"> 
             <DataGrid
        rows={modifedData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      /> {/* 
            <Table
            columns={columns}
            dataSource={modifedData}
            bordered
            loading={loading}/>
            */}
        </div>
    )
}

export default DataTable;
