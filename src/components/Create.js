import axios from 'axios'
import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [FName, setFName] =useState()
    const [LName, setLName] =useState()
    const [Email, setEmail] =useState()
    const [Pass, setPass] =useState()
    let url="https://6362424b66f75177ea2a9970.mockapi.io/ToDo"

    const postData =() => {
        axios.post(url,{
            FName,
            LName,
            Email,
            Pass
        })
        // navigate("/Get");
        .then(res =>{
             console.log(res);
       }) 
    }
    
  return (
    <div>
<input placeholder='FName' onChange={e=>{ setFName ( e.target.value) }}></input>
<input placeholder='LName' onChange={e=>{ setLName ( e.target.value) }}></input>
<input placeholder='Email' onChange={e=>{ setEmail ( e.target.value) }}></input>
<input placeholder='Pass' onChange={e=>{ setPass ( e.target.value) }}></input>
<button onClick={postData}>LogIn</button>

    </div>
  )
}

export default Create