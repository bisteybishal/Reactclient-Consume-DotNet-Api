import React, { useEffect } from 'react'
import e3 from "../Image/e3.webp"
import UseAuth from '../Utility/UseAuth'
import { Link, useNavigate } from "react-router-dom";
import { Deleteblog } from '../ApiService/BlogApi';


const Card = ({ blog }) => {
  useEffect(() => {
console.log(blog[0]);
  }, []);

  const deleteBlog = (blogId) => {
    Deleteblog(blogId).then((response) => {
      if (response.status == 200) {
        alert("Sucessfully Deleted Blog");
        window.location  .reload();
      }
    }).catch(error => console.log(error));
  }

  const auth = UseAuth();
  const navigate = useNavigate();

  return (

    <div className='max-w-sm h-screen overflow-hidden  rounded shadow-sm px-6 py-4'>
      <img className='mb-2' src={e3} alt="" />
      <div className=''>
        <div className='text-xl mb-2 font-bold'>  {blog.heading}  </div>
        <p className='text-gray-600 text-base mb-5'>
          {blog.content}
        </p>
      </div>
      <div className=' '>
        <span onClick={() => navigate("/blogdetail", { state: { blogId: blog.blogId } })}
         className='rounded-full px-3 py-2 text-sm font-semibold bg-blue-500 inline-block mr-3 mb-2'>
          ReadMore...
        </span>
        <button onClick={() => navigate("/editblog", { state: { blogId: blog.blogId } })}
          className='rounded-full px-3 py-2 text-sm font-semibold bg-teal-300 inline-block mr-3 mb-2'>
          Edit
        </button>

        <span onClick={() => deleteBlog(blog.blogId)}
          className='rounded-full px-3 py-2 text-sm font-semibold bg-red-400 inline-block mr-3 mb-2' >
          Delete
        </span>
      </div>

    </div>


  )
}

export default Card