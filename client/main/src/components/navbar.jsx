import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const navigate = useNavigate();
    const [isOpen , setIsOpen] = useState(false);
    return(
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center">
            <h1 className="text-3xl font-bold text-orange-500">Swapverse</h1>
        </div>
      <button
        className="sm:hidden "
        onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} className="text-2xl pr-2 " />
      </button>

      {/* Desktop Menu */}
        <div className="hidden sm:flex sm:flex-row space-x-6 ml-8">
          <button
            className="flex text-sm font-semibold sm:text-lg p-2 text-amber-900 hover:text-amber-300"
            onClick={() => navigate("/userface")}>
              Home
          </button>
          <button className="flex text-sm font-semibold sm:text-lg p-2  text-amber-900 hover:text-amber-300">
            Profile
          </button>
        </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute inset-0 z-20 flex flex-col items-end justify-start p-10 bg-gradient-to-r from-yellow-700 to-orange-600 text-amber-100 sm:hidden  transition-transform duration-300 ease-in-out
        ${isOpen ? "animate-slide-in" : "animate-slide-out"}`}>
          <a
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl "></FontAwesomeIcon>
          </a>
          <a
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => {
              setIsOpen(false);
              navigate("/userface")
            }}
          >
            Home
          </a>
          <a
            
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => {
              setIsOpen(false);
              navigate("/userface")
            }}
          >
            Swipe to Swap
          </a>
          <a
            href="#"
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => setIsOpen(false)}
          >
            Browse Books
          </a>
          <a
            href="#"
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => setIsOpen(false)}
          >
            Learn about Swapverse
          </a>
          <a
            href="#"
            className="py-2 text-xl font-semibold hover:text-amber-300"
            onClick={() => {setIsOpen(false);navigate("/")}}
          >
            Logout
          </a>
        </div>
)}

    </nav>
    )
}