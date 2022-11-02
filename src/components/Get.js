import React, {useEffect, useState} from "react"
import axios from "axios"
function Get() {
    const[state, setstate]= useState([])
  useEffect(() => {
    axios.get("https://6362424b66f75177ea2a9970.mockapi.io/ToDo").then((res)=>{
      console.log(res.data);
      setstate(res.data);
      })
  }, [])

  return (
    <div>
        { state.map((items)=>{
      return(
        <>
        <p> {items.fName}</p>
        <p> {items.lName}</p>
        </>
      )})}
        </div>
  )
}

export default Get