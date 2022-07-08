import React, { useState } from 'react'
import { PostBlog } from '../ApiService/BlogApi';

const AddBlog = () => {
    const [heading, setHeading] = useState();
    const [content, setContent] = useState();

    const handleCreate = (e) => {
        e.preventDefault();
        var newblog = {
            Heading: heading,
            Content: content,
        }
        console.log(newblog);
        PostBlog(newblog).then((response) => {
            if(response.status == 201)
            {
                alert("Successfully Created");
            }
        }).catch(error => console.log(error));
    }


    return (
        <div className='flex justify-center items-center bg-slate-200 h-screen'>
            <form className='bg-white shadow-md rounded px-8 pt-4 pb-8 mb-6' >
                <div>
                    <label className='text-sm font-bold text-gray-500 block mb-3'>Heading</label>
                    <input type="text" placeholder='Enter a Heading' value={heading} onChange={(e) => { setHeading(e.target.value) }}
                        className='border shadow rounded w-full px-4 py-2 appearance-none focus:outline-none mb-2 leading-tight' />
                </div>
                <div>
                    <label className='text-sm font-bold text-gray-500 block mb-3'>Content</label>
                    <textarea name="content" rows="8" cols="40" value={content} onChange={(e) => { setContent(e.target.value) }}
                        className='border shadow rounded w-full px-4 py-2 appearance-none focus:outline-none mb-2 leading-tight'>Content</textarea>

                </div>

                <button className='shadow rounded px-4 py-2 bg-blue-400 cursor-pointer hover:bg-blue-600' onClick={handleCreate}>Create</button>
            </form>

        </div>
    )
}

export default AddBlog;