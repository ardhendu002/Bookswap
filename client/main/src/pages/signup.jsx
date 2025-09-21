import { useState } from "react";
import useAuthForm from "../hooks/useAuthform"

export default function Signup(){
    const [selectedGenres , setSelectedGenres] = useState([]);
    const { email, setEmailValue, password, setPasswordValue, resetForm ,name , setNameValue } = useAuthForm();
    const handleGenre = (Genere,checked) => {
        if(checked){
            setSelectedGenres([...selectedGenres,Genere]);
        }
        else{
            setSelectedGenres(selectedGenres.filter((g)=> g!=Genere));
        }
    }
    const handleSubmit = async(e) => {
        e.preveventDefault();
        const values = {formdata,Genere:selectedGenres}
        resetForm();
        await setSubmitstatus(true);
    }
    const [sumbitStatus ,setSubmitstatus] = useState(false);

    if(sumbitStatus){
        return(
            <div className="w-screen h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200">
                Entering into Swapverse
            </div>
        )
    }
    return(
        <div className="w-screen overflow-x-hidden min-h-screen">
            <div className="flex flex-col h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200">
                <div className="flex flex-col items-center mt-32 bg-gradient-to-tr from-amber-600 to-amber-400 via-amber-500 sm:p-10 sm:mx-80 rounded-3xl mx-5 p-6">
                    <h1 className="font-extrabold sm:text-5xl text-3xl">
                        Signup
                    </h1>
                    <form className="flex flex-col gap-y-4 w-full" onClick={handleSubmit}>
                        <div className="flex flex-col items-center w-full gap-y-2 mt-5">
                            <label className="sm:-translate-x-96 -translate-x-28 text-amber-950 font-bold">
                                Name : 
                            </label>
                            <input type="text" required id='name' value={name} onChange={(e)=>setNameValue(e.target.value)} placeholder='Name' className='w-full sm:w-full p-4 rounded-2xl bg-amber-100 '></input>
                        </div>
                        <div className="flex flex-col items-center w-full gap-y-2 mt-5">
                            <label className="sm:-translate-x-96 -translate-x-28 text-amber-950 font-bold">
                                Email : 
                            </label>
                            <input type="text" required id='email' value={email} onChange={(e)=>setEmailValue(e.target.value)} placeholder='email' className='w-full sm:w-full p-4 rounded-2xl bg-amber-100 '></input>
                        </div>
                        <div className="flex flex-col items-center w-full gap-y-2 mt-5 ">
                            <label className="flex sm:-translate-x-96 sm:pl-10 -translate-x-24 text-amber-950 font-bold">
                                Password : 
                            </label>
                            <input type="password" required id='password' value={password} onChange={(e)=>setPasswordValue(e.target.value)} placeholder='passoword' className='w-full p-4 rounded-2xl bg-amber-100 '></input>
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