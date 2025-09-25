import { useState } from "react";
import useAuthForm from "../hooks/useAuthform"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate();

    if(sumbitStatus){
        return(
            <div className="w-screen h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200">
                Entering into Swapverse
            </div>
        )
    }
    return(
       <div className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200 min-h-screen">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 pl-10 hover:to-orange-500 transition-all duration-300 pt-2" onClick={()=>navigate("/")}>
            Swapverse
        </div>
        <div className="flex flex-col items-center mt-32 bg-gradient-to-tr from-amber-600 to-amber-400 via-amber-500 sm:p-10 sm:mx-80 rounded-3xl mx-5 p-6">
        <h1 className="font-extrabold sm:text-5xl text-3xl">
            Signup
        </h1>

        <form className="flex flex-col gap-y-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-y-2 mt-5">
                <label htmlFor="name" className="text-left text-amber-950 font-bold">
                    Name :
                </label>
                <input
                type="text"
                required
                id="name"
                value={name}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder="Name"
                className="w-full p-4 rounded-2xl bg-amber-100"/>
            </div>

            <div className="flex flex-col w-full gap-y-2 mt-5">
                <label
                    htmlFor="email"
                    className="text-left text-amber-950 font-bold"
                >
                    Email :
                </label>
                <input
                    type="email"
                    required
                    id="email"
                    value={email}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Email"
                    className="w-full p-4 rounded-2xl bg-amber-100"
                />
            </div>

        <div className="flex flex-col w-full gap-y-2 mt-5">
          <label
            htmlFor="password"
            className="text-left text-amber-950 font-bold"
          >
            Password :
          </label>
          <input
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-amber-100"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex bg-amber-950 text-amber-100 p-3 rounded-full px-10 hover:bg-gradient-to-tr hover:from-amber-800 hover:to-amber-700 hover:via-amber-600 hover:text-amber-100 transition-all ease-in-out duration-200 sm:mt-5">
            Submit
          </button>
        </div>
      </form>
    </div>
     <h1 className="flex items-center justify-center mt-10 mb-10">
        Already a user{" "}
        <button
          className="pl-1 pr-1 font-semibold underline"
          onClick={() => navigate("/login")}>
          Login
        </button>{" "}
            here
      </h1>
    </div>
    </div>

    )
}