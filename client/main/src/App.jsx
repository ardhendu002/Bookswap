import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/home.jsx'));
const Login = lazy(() => import('./pages/login.jsx'));
const Signup = lazy(() => import('./pages/signup.jsx'));

function App() {
  return (
      <Suspense
        fallback={
          <div className="flex text-8xl font-extrabold text-amber-950 items-center justify-center text-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    
  );
}

export default App;
