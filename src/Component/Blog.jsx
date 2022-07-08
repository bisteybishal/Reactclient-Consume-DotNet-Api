import React, { useState, useEffect } from 'react'
import { GetBlog } from '../ApiService/BlogApi';
import Card from '../Pages/Card'
import { Link, useNavigate } from "react-router-dom";
import{setBlog} from"../Redux/action/BlogActions";
import{useSelector,useDispatch} from "react-redux"


const Blog = () => {
    // const blog=useSelector((state) => state.Blogs.blogs);
    const [blogs, setBlogs] = useState();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const AllBlog = () => {

        GetBlog().then((response) => {
            if (response.status == 200) {
                setBlogs(response.data);
                dispatch(setBlog(response.data));
               
            }
            if (response.status == 401) {
                window.localStorage.removeItem("token");
                navigate("/login");
            }
        })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        AllBlog();

    }, []);
    return (
        <>
            <div className=' float-right mt-4'>
                <button className='rounded shadow-md bg-blue-500 hover:bg-blue-700
                py-2 px-4 mr-10' onClick={() => navigate('/addblog')} >
                    Add-Blog</button>
            </div>
            <div className='h-screen grid grid-cols-3 px-6 gap-3 mt-10'>
                {
                    blogs && blogs.map((item, index) => <Card blog={item} key={index} />)
                }

            </div>
        </>
    )
}

export default Blog