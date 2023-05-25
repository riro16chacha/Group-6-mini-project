import React from "react";
import { useState } from "react";

function FormComponent(){
    const[userName, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[button, setButton]=useState("")
    return(
        <>
        <form>
           <input type="text" id='username-input' placeholder='Username'/>
           <input type="text" id='password-input' placeholder='Password' />
           <button id='login-button'>Submit</button>
        </form>
        </>
    );
}
export default FormComponent