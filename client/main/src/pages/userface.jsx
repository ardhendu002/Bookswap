import { useNavigate } from "react-router-dom";
import backdrop from "../assets/backdrop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";


function userface(){
    return(
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200 p-8">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center mb-8">
            <Navbar></Navbar>
            </div>

            {/* Main Hero Section  */}
            <div className="relative mb-12">
                <div className="text-center items-center rounded-3xl p-24 relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${backdrop})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    {/* Background blur overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/70 rounded-3xl hover:bg-black/25 ease-in-out duration-300 transition-all"></div>
                    
                    {/* Content */}
                    <h1 className="relative z-10 flex items-center justify-center text-center text-4xl sm:text-6xl font-bold drop-shadow-lg  text-amber-200 hover:text-amber-900 tarnsition-all duration-300 ease-in-out">
                        Swapverse
                    </h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:mt-48">
            <button className="relative overflow-hidden bg-gradient-to-r from-yellow-700 to-orange-600 text-white font-bold py-12 px-8 rounded-2xl text-xl transition-all duration-300 hover:from-yellow-600 hover:to-orange-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-1 active:translate-y-0">
                <span className="relative z-10">SWIPE TO SWAP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
            </button>
            
            <button className="relative overflow-hidden bg-gradient-to-r from-yellow-700 to-orange-600 text-white font-bold py-12 px-8 rounded-2xl text-xl transition-all duration-300 hover:from-yellow-600 hover:to-orange-500 hover:shadow-2xl hover:shadow-orange-500/25  hover:-translate-y-1 active:translate-y-0">
                <span className="relative z-10">BROWSE BOOKS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
            </button>
            
            <button className="relative overflow-hidden bg-gradient-to-r from-yellow-700 to-orange-600 text-white font-bold py-12 px-8 rounded-2xl text-xl transition-all duration-300 hover:from-yellow-600 hover:to-orange-500 hover:shadow-2xl hover:shadow-orange-500/25  hover:-translate-y-1 active:translate-y-0">
                <span className="relative z-10">LEARN ABOUT<br />SWAPVERSE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
            </button>
            </div>
        </div>
    </div>
    );
}

export default userface;