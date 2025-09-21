import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useAuthForm from "../hooks/useAuthform"

function Login(){
    const { email, setEmailValue, password, setPasswordValue, resetForm } = useAuthForm();
    function formhandler(e){
        e.preventDefault();
        console.log("Login attempt",{email,password});
        resetForm();
    }
    return(
        <div className='w-screen overflow-x-hidden min-h-screen'>
            <div className='flex flex-col h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200'>
                <div className='flex flex-col items-center mt-32 bg-gradient-to-tr from-amber-600 to-amber-400 via-amber-500 sm:p-10 sm:mx-80 rounded-3xl mx-5 p-6'>
                    <h1 className='font-extrabold sm:text-5xl text-3xl'>
                        Login
                    </h1>
                    <form className='flex flex-col gap-y-4' onSubmit={formhandler}>
                        <div className='flex flex-col items-center justify-center w-screen gap-y-2 mt-6'>
                            <label className='sm:-translate-x-56 -translate-x-24 text-amber-950 font-bold'>
                                Email :
                            </label>
                            <input type="email" required id='email' value={email} onChange={(e)=>setEmailValue(e.target.value)} placeholder='Email' className='w-3/4 sm:w-1/3 p-4 rounded-2xl bg-amber-100 '></input>
                        </div>
                        <div className='flex flex-col items-center justify-center w-screen gap-y-2'>
                            <label className='sm:-translate-x-52 text-amber-950 font-bold mt-6 -translate-x-20'>
                                Password : 
                            </label>
                            <input type="password" required id='email' value={password} onChange={(e)=>setPasswordValue(e.target.value)} placeholder='passoword' className='w-3/4 sm:w-1/3 p-4 rounded-2xl bg-amber-100 '></input>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='flex bg-amber-950 text-amber-100 p-3 rounded-full pl-10 pr-10 hover:bg-gradient-to-tr hover:from-amber-800 hover:to-amber-700 hover:via-amber-600 hover:text-amber-100 transition-all ease-in-out duration-200 sm:mt-5'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login