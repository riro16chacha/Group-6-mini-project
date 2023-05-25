import React, { useEffect } from "react";
import { useState } from "react";

function FormComponent(){
    const[userName, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[isValid, setIsValid]=useState(false)
    const handleChangeUsername = (event) => {
        // 👇 Get input value from "event"
        setUsername(event.target.value);
      };
    const handleChangePassword = (event) => {
        // 👇 Get input value from "event"
        setPassword(event.target.value);
      };
    const checkValidity=()=>{
        if (userName && password !=="" ){
           setIsValid(true)
        }else(
           setIsValid(false)
        )
    }
      useEffect(()=> {
        checkValidity()
        console.log(isValid)
    },[userName, password])
    function handleSubmit(uName,pwd){
        // event.preventDefault()
        console.log(uName, pwd)
    } 
    return(
        <>
        <form >
           <input onChange={handleChangeUsername}  type="text" name="username" id='username-input' placeholder='Username'/>
           <input onChange={handleChangePassword} type="password" name="password" id='password-input' placeholder='Password' />
           <button  onSubmit= {handleSubmit({userName, password})} disabled={!isValid} id='login-button' type="submit">Submit</button>
        </form>
        </>
    );
}
export default FormComponent