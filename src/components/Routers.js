import React from 'react'

//import Store from './Store'
import {  Routes, Route } from 'react-router-dom';
//import Login from './Login';
//import Home from './Home';
//import Get from './Get';
import Get from './Get';
//import Delete from './Delete'
import Update from './Ubdate';
import Create from './Create';
function Routers() {
  return (
    <div>
        <Routers>
          <Route path='/Update'element={<Update/>}></Route>
          <Route path='/Get' element={<Get/>} ></Route>
        {/* <Route path="/Login" element={<Login/>}></Route>  */}
        <Route path='/Create' element={<Create/>} ></Route>
        <Route path="/Delete" element={<Delete/>}></Route> 
        
        </Routers>


    </div>
  )
}

export default Router