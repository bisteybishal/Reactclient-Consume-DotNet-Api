import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Detailcomponent from '../Component/Detailcomponent';
import Card from './Card';

const BlogDetail = () => {
 
  var location = useLocation();
  var blogs = useSelector((state) => state.Blogs.blogs);
  var blogId = location.state.blogId;
  

  const blogx = blogs.find(blog => {
    return blog.blogId == blogId;

  });


  return (
    <div>
      {blogx && 
      <Detailcomponent blog={blogx} />
      }
    </div>
  )
}

export default BlogDetail