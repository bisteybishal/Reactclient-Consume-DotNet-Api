import React from 'react';
import { Register } from '../ApiService/RegisterApi';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        var newregister = {

            Email: data.email,
            Password: data.password
        }

        // console.log(newregister)
        Register(newregister).then((response) => {
            if (response.status == 200) {
                alert("Register Sucessfully");
                navigate("/login");
            }
            if (response.status == 500) {
                alert("Something went wrong!! Try Again");
            }
        }).catch(err => console.log(err));
    };


    return (
        <div className='flex justify-center items-center bg-gray-300 h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-sm rounded pt-6 px-8 pb-8 mb-4'>
                <div className='mb-6'>
                    <label className='text-sm  font-bold block text-gray-700 mb-2' htmlFor='email'>Email</label>
                    <input text="email" placeholder='Enter your Email'
                        {...register('email')}
                        className='shadow appearance-none py-2 px-4 border w-full 
                text-gray-500 focus:shadow-outline focus:outline-none leading:tight'/>
                </div>
                <div className='mb-6'>
                    <label className='text-sm font-bold block text-gray-700 mb-2' htmlFor='password'>Password</label>
                    <input text="password" placeholder='Enter your Password'
                        {...register('password')}
                        className='shadow appearance-none py-2 px-4 border border-red-500 w-full 
                text-gray-500 focus:shadow-outline focus:outline-none leading:tight'/>
                </div>
                <div className='flex justify-between items-center'>
                    <button type="submit"
                        className='rounded-md font-bold text-white shadow-md hover:bg-teal-700 bg-teal-500 px-4 py-2 transition duration-100 ease-in-out focus:shadow-outline focus:outline-none'>Register</button>
                    <Link to="/login" className='rounded-md font-bold text-white shadow-md hover:bg-blue-700 bg-blue-500 px-4 py-2 transition duration-100 ease-in-out focus:shadow-outline focus:outline-none'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
