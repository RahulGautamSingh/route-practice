import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import React from "react";
import Nav from './Nav';


function  Main()

{   let history = useHistory()
    let userData,userName="";
    if(history.location.state!==undefined){ userData = history.location.state;userName=userData.name}
   function handleChange(event){
        setNameOfUser(event.target.value)
    }
    let [nameOfUser,setNameOfUser] = useState(userName);
    return (
        <div className="container">
           <Nav name={nameOfUser}/>

           <div className="main-box box">
               <h1>Please Enter Your Name</h1>
           <input onChange={handleChange} />
           </div>
       
        </div>
    )
}

export default  Main