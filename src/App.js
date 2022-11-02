import './App.css';
import React, {useEffect, useState} from "react"
import axios from "axios"
import { Grid } from '@chakra-ui/react'
import Create from './components/Create';
import Get from './components/Get';

function App() {
  // const[state, setstate]= useState([])
  // useEffect(() => {
  //   axios.get("https://6362424b66f75177ea2a9970.mockapi.io/ToDo").then((res)=>{
  //     console.log(res.data);
  //     setstate(res.data);
  //     })
  // }, [])

  return (
    <div className="App">
      <Create/>
      <Get/> 

      
    {/* { state.map((items)=>{
      return(
        <>
        { <p> {items.name}</p> } */}
        {/* <p> {items.image}</p> */}
        {/* <img src={items.image}></img>
        </>
       )
    })}  */}
    
    </div>
  );
}

export default App;