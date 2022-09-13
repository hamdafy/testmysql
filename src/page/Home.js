import React  ,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import { toast } from 'react-toastify'
import axios from "axios"





const Home = () => {
    const [data,setData]=useState([]);
    const loadData = async() =>{
        const response = await axios.get("http://localhost:5001/api/get");
        setData(response.data);

    };
    useEffect (()=>{
        loadData();

    },[]);

    const deleteContact = (id) =>{
      if(window.confirm(" bghiti vrm tsuprimer")){
        axios.delete(`http://localhost:5001/api/remove/${id}`);
        toast.success("erfolgereich deleted ");
       setTimeout(() => loadData(),500   );
         
      }
    }
  return (
    <div style={{marginTop:"50px"}}>
          <Link  to ="/addcontact"> 
          <button className='btn btn-contact'> add contact</button>
          </Link>
        <table className='table-stayled'>
        <thead>
            <tr>
            <th style={{textAlign:"center"}}>nr </th>
            <th style={{textAlign:"center"}}>name </th>
            <th style={{textAlign:"center"}}>email </th>
            <th style={{textAlign:"center"}}>contact </th>
            <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>

            {data.map((item,index)  =>{
                return(
                <tr key={item.id}>
                <th scope='row'>{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                    <Link to={`/update/${item.id}`}>  
                    <button className='btn btn-edit'>edit</button>
                    </Link>
                    <button className='btn btn-delete' onClick={() =>deleteContact(item.id)}>delete</button>
                    <Link to={`/view/${item.id}`}>  
                    <button className='btn btn-edit'>view</button>
                    </Link>
                </td>
                </tr>
                )
            }
            )}
        </tbody>
        </table>
      homeee hamzaa
    </div>
  )
}

export default Home
