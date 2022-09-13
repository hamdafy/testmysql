import React  ,{ useEffect, useState } from 'react'
import {useNavigate,useParams,Link} from "react-router-dom"
import "./AddEdit.css"
import axios from 'axios'
import {toast} from "react-toastify"

const initialState = {
  name:"",
  email:"",
  contact:"",
};


const AddEdit = () => {
  const history = useNavigate();
  const [state,setState]= useState(initialState);
  const {name,email,contact}=state;
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!name || !email || !contact){
      toast.error("pleas  ")
    }else{
      axios
      .post("http://localhost:5001/api/post",{
        name,
        email,
        contact,
      })
      .then(()=>{
        setState({name:"",email:"",contact:""})
      })
      .catch((err)=>toast.error(err.response.data));
      toast.success("richtig hinzugefügt")
    setTimeout(() => history("/"),500)

    }

  };

  const handleInputChange = (e) =>{
    const {name,value} =e.target;
    setState({...state,[name]:value})

  }
  return (
    <div style={{marginTop:"100px"}}>
      <form style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"

      }}
      onSubmit={handleSubmit}
      >
        <label htmlFor='name'>name</label>
        <input 
        type="text"
        id="name"
        name="name"
        placeholder="your name is"
        value={name}
        onChange={handleInputChange}
        /> 


      

      <label htmlFor='email'>Email</label>
        <input 
        type="email"
        id="email"
        name="email"
        placeholder="your email is"
        value={email}
        onChange={handleInputChange}
        /> 


<label htmlFor='contact'>contact</label>
        <input 
        type="number"
        id="contact"
        name="contact"
        placeholder="yourcontact is"
        value={contact}
        onChange={handleInputChange}
        /> 
        <input type='submit' value='save'></input>
        <Link to ='/'>
          <input type='button' value='go back'/> 
        </Link>
        </form>
      <h2> add edit </h2>
    </div>
  )
}

export default AddEdit
