import { Outlet, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";


export default function Homepage(){
    const navigate = useNavigate();
    return(
    <div className='w-full overflow-x-hidden'>
    <div className="flex justify-between items-center p-4 w-full">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-500 transition-all duration-300 pt-2">Swapverse</h1>
      <div className='flex gap-x-8 sm:gap-x-6 pt-2 pr-3'>
        <div className='flex hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-900 transition-all duration-200 rounded-lg text-amber-800 hover:text-white'>
         <button
          className="flex text-sm font-semibold sm:text-lg p-2"
          onClick={() => navigate("/")}>
            About
          </button>
        </div>
        <div className='flex hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-900 transition-all duration-200 rounded-lg text-amber-800 hover:text-white'>
           <button className='text-sm font-semibold sm:text-lg p-2' onClick={()=>navigate('/Login')}>Login/Signup</button>
        </div>
        
      </div>
    </div>
    <div className='flex flex-col bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200 min-h-screen w-full overflow-x-hidden '>
      <div className='flex flex-col sm:flex-row gap-2 justify-center items-center md:flex-row mt-36 md:mt-24'>
        <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Swipe.
        </span>
        <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Swap.
        </span>
        <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Read.
        </span>
        <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Repeat.
        </span>
      </div>
      <div className='flex justify-center items-center mt-52 md:mt-12 flex-col'>
         <p className="text-xl text-amber-800 font-medium text-center px-10">"Your next favorite book is just a swap away"</p>
          <p className="text-lg text-amber-900 text-center font-bold mt-10 px-10">
            Swap books with nearby readers, earn credits, and discover hidden gems.
          </p>
          <p className="text-lg text-amber-900 text-center font-bold px-10">
            Safe spots, smart matches, and zero money drama — just pure book energy.
          </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
         <a className='bg-yellow-950 text-yellow-200 hover:bg-yellow-300 hover:text-amber-900 font-semibold px-12 py-4 text-lg rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-200 mt-20 md:mt-24'>
            start swapping
          </a>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-36 px-12'>
          <div className='flex flex-col text-center items-center space-y-4 bg-yellow-200 border-0 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-800  transition-all duration-200 text-amber-950 hover:text-white'>
            <FontAwesomeIcon icon={faArrowsRotate} className="text-6xl" />
            <p className='font-semibold'>
              just swipe and search your favourite books around you
            </p>
          </div>
          <div className='flex flex-col text-center items-center space-y-4 bg-yellow-200 border-0 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-800  transition-all duration-200 text-amber-950 hover:text-white'>
            <FontAwesomeIcon icon={faRightLeft} className='text-6xl'/>
            <p className='font-semibold'>
              Exchange books with trusted readers around you
            </p>
          </div>
          <div className='flex flex-col text-center items-center space-y-4 bg-yellow-200 border-0 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-amber-500 hover:to-amber-800  transition-all duration-200 text-amber-950 hover:text-white'>
            <FontAwesomeIcon icon={faCertificate} className='text-6xl'/>
            <p className='font-semibold'>
              earn badges and credits on each swap
            </p>
          </div>
      </div>
      <div className='flex px-2 mx-auto mt-32 sm:mt-28 sm:mb-28 sm:px-44'>
        <div className='flex bg-yellow-200 p-10 rounded-3xl m-10 sm:m-32 '>
          <p className='font-semibold text-center sm:text-xl'>
          Swap books safely and easily with nearby readers. Users can swipe through available books in their area
          and click "Go" to request a swap. Each swap request allows adding a personal message, and requests are
          confirmed by the owner. The swap progresses through statuses: pending → accepted → completed. After a successful swap, both users earn credits (+2). Users can view nearby safe swap spots within 5 km and
          track their swap history. The app also offers AI-powered book recommendations based on your reading
          preferences.
          </p>
        </div>
      </div>
    </div>
    <div className='flex flex-col sm:flex-row items-center justify-center gap-y-8 sm:justify-between'>
      <a className='mt-8 text-3xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-500 transition-all duration-300 sm:ml-14 sm:mt-5 sm:mb-5'>
        Swapverse
      </a>
      <div className='flex flex-row gap-x-11 mb-6 font-medium sm:mr-14 sm:mt-5 sm:mb-5'>
        <a className='hover:text-amber-700'>
          Home
        </a>
        <a className='hover:text-amber-700'>
          Github
        </a>
        <a className='hover:text-amber-700'>
          login
        </a>
        <a className='hover:text-amber-700'>
          Signup
        </a>
      </div>
    </div>
    </div>
    );
}