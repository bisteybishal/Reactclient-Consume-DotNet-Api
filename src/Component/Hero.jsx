import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl
             text-black items-center mb-10">EGGCELLENT </h1>
           
            <Link to="/" className='flex bg-yellow-500 text-3xl  py-6 px-10
             rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out 
             animate-bounce items-center'>Order Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8
                     2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </Link>
        </div>
    )
}

export default Hero