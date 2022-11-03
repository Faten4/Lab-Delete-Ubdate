import React, { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ubdate () {

    const navigate = useNavigate();
    const [FName, setFName] = useState("")
    const [LName, setLName] = useState("")
    const[id, setId] = useState("");

    useEffect(() =>{
    setId(localStorage.getItem("id"));
    setFName(localStorage.getItem("firstname"));
    setLName(localStorage.getItem("lasttname"));


}, [])

const UpdateData =() => {
    axios.put(`https://6362424b66f75177ea2a9970.mockapi.io/ToDo/${id}`,{

    FName,
    LName,

    }).then(res =>{
        console.log(res);
        navigate("/Get");
    }).catch(err => {
        console.log(err);
    })

}
return(
    <div>
        <input
        placeholder="firstName"
        onChange={(e)=>{
            setFName(e.target.value);
        }}></input>
        <input 
        placeholder="lastName"
        onChange={(e)=>{
            setFName(e.target.value);
        }}></input>
        <button onClick={UpdateData}>Update</button>
    </div>
)
}
export default Ubdate; 