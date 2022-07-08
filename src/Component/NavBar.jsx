import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import UseAuth from '../Utility/UseAuth';

const NavBar = () => {
    const auth = UseAuth();
    const navigate=useNavigate();
    const Logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <nav className=' shadow-sm flex justify-between items-center
         bg-white font-mono h-16 relative
          text-black' role="navigation">
            <Link to="/" className='pl-8'>EGG</Link>
            <div className='md:hidden p-4 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </div>
            <div className='pr-6 md:block hidden'>

                <Link to="/" className='p-4'>Home</Link>
                {
                    auth ?
                        <>
                            <Link to="/about" className='p-4'>About</Link>
                            <Link to="/menu" className='p-4'>Menu</Link>
                            <Link to="/blog" className='p-4'>Blog</Link>
                            <Link to="/contact" className='p-4'>Contact</Link>
                            <button className='rounded shadow px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-700' onClick={Logout}>Logout</button>
                        </> :
                        <>
                            <Link to="/login" className='p-4'>Login</Link>
                            <Link to="/register" className='p-4'>Register</Link>
                        </>

                }



            </div>
        </nav>
    )
}

export default NavBar