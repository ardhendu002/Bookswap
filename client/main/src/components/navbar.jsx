import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
    return(
         <nav>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-orange-500">Swapverse</h1>
            </div>
      <button
        className="sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl pr-2" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/profile" className="hover:text-gray-300">Profile</a>
        <a href="/logout" className="hover:text-gray-300">Logout</a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-700 flex flex-col space-y-4 p-4 sm:hidden">
          <a href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/profile" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Profile</a>
          <a href="/logout" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Logout</a>
        </div>
      )}
    </nav>
    )
}