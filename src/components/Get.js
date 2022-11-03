// import axios from 'axios'
// import React, {useEffect, useState } from 'react'

//  function Get(){
//     const [state, setState]=useState([])

//     useEffect (() =>{
//     // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
//     // console.log(res.data.results);
//     // setState(res.data.results)
//     axios.get("https://rickandmortyapi.com/api/character").then((res) => {
//      console.log(res.data.results);
//     setState(res.data.results)
      
//       })
    
//     },[])
//       return (
       
//         <div >
    
    
//            {state.map(items=>{
//       return(
//         <div className='' >
//         <p>Image Name:{items.name}</p>
//         <img src= {items.image}></img>
    
//         </div>
//       )
//     })}
    
//     {/* {state.map(items=>{
//       return(
//         <div className='bor' >
//         <p>Image Name:{items.name}</p>
//         <img src= {items.image}></img>
//         </div>
//       )
//     })}   */}
    
//         </div>
//       );
//     }
 

//  export default Get



import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Get() {
    const[state, setstate]= useState([])
  useEffect(() => {
    axios.get("https://6362424b66f75177ea2a9970.mockapi.io/ToDo").then((res)=>{
      console.log(res.data);
      setstate(res.data);
      })
  }, [])
const onDelete =(id) => {
  console.log(id)
  axios.delete(`https://6362424b66f75177ea2a9970.mockapi.io/ToDo/${id}`).then(res => {
    console.log(res);
    setstate(state.filter(del =>{
      return del.id != id 
    }))
  })
}
  return (
    <div>
        { state.map((items)=>{
      return(
        <>
        <p> {items.FName}</p>
        <p> {items.LName}</p>
        <button onClick={()=> {onDelete(items.id)}}>Delete</button>
        
         
        <Link to="Update"><button>Update</button></Link>
        </>
      )})}
        </div>
 )

      }
      

export default Get