import React, { useState } from 'react';
import { SignIn } from '../ApiService/LoginApi';
import { useNavigate } from 'react-router-dom';
import{useForm} from "react-hook-form";


const Login = () => {
   
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {

        var login = {
            Email: data.email,
            Password: data.password
        }


          
        SignIn(login).then((response) => {
            if (response.status == 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/blog");
            }
            if (response.status == 500) {
                alert("Something Wrong !");
            }
        }).catch(error => console.log(error));
    };

    return (
        <div className='flex justify-center items-center bg-gray-300 h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded pt-6 px-8 pb-8 mb-4 '>
                <div className='mb-4'>
                    <label className='text-sm font-bold block text-gray-500 mb-2 ' htmlFor='email'>Email</label>
                    <input className='shadow appearance-none border rounded  w-full py-2 px-4 text-gray-500
                           leading-tight focus:outline-none focus:shadow-outline '
                        text="name" placeholder='Enter your Email'  {...register('email')} />
                </div>

                <div className='mb-6'>
                    <label className='text-sm font-bold block text-gray-500 mb-2' htmlFor='password'>Password</label>
                    <input className='shadow appearance-none border border-red-500 rounded  w-full py-2 px-4 text-gray-500 
                           leading-tight focus:outline-none focus:shadow-outline '
                        type="password" placeholder='***********'  {...register('password')} />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Login