import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import { GetblogById, UpdateBlog } from '../ApiService/BlogApi';
import { useForm } from "react-hook-form";

const EditBlog = () => {
    const navigate=useNavigate();
    var location = useLocation();
    var blogId = location.state.blogId;
    const [blog, setBlog] = useState();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();
   

    useEffect(() => {
        
        GetblogById(blogId).then((response) => {
            var blog=response.data;
          setValue('heading', blog.heading )
            setValue('content', blog.content)
            setBlog(response.data);

        });
    }, []);

    const onSubmit = (data) => { 
        
        var newblog = {
            Id: blogId,
            Heading: data.heading,
            Content: data.content
        }
           console.log(newblog);
        UpdateBlog(newblog).then((response) => {
            if (response.status == 200) {
                alert("Sucessfully Updated Blog");
              navigate("/blog");
            }
        }).catch(error => console.log(error));
    }



    return (
        <div className='flex justify-center items-center bg-slate-200 h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-6' >
                <div>
                    <label className='text-sm font-bold text-gray-500 block mb-3'>Heading</label>
                    <input type="text" name='heading' placeholder='Enter a Heading'
                        className='border shadow rounded w-full px-4 py-2 appearance-none focus:outline-none mb-2 leading-tight'
                        {...register("heading", { required: true })} />
                    {errors.heading?.type === 'required' && "heading is required"}
                </div>
                <div>
                    <label className='text-sm font-bold text-gray-500 block mb-3'>Content</label>
                    <textarea name="content" rows="8" cols="40" className='border shadow rounded w-full px-4 py-2 appearance-none focus:outline-none mb-2 leading-tight'
                        {...register("content", { required: true })} />
                        {errors.content?.type === 'required' && "content is required"}
                   
                </div>

                <button type="submit" className='shadow rounded px-4 py-2 bg-blue-400 cursor-pointer hover:bg-blue-600'>Update</button>
            </form>

        </div>
    )
}

export default EditBlog;