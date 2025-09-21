import React from "react";
import { useState } from "react";

export default function Authform(){
    const [email,setEmailValue] = useState("");
    const [password,setPasswordValue] = useState("");
    const [name,setNameValue] = useState("");

    const resetForm = ()=>{
        setEmailValue("");
        setPasswordValue("");
        setNameValue("");
    };

    return(
        {
            email,
            password,
            name,
            setEmailValue,
            setPasswordValue,
            setNameValue,
            resetForm
        }
    )
}

