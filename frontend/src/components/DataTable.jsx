import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'antd';

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
        title: "Title",
        dataIndex: "title",
        align: "center"
    },
    {
        title: "Author",
        dataIndex: "author",
        align: "center"
    },
    {
        title: "Description",
        dataIndex: "description",
        align: "center"
    }
];

    return(
        <div>
            <Table
            columns={columns}
            dataSource={modifedData}
            bordered
            loading={loading}/>
        </div>
    )
}

export default DataTable;
