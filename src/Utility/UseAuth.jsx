import React from 'react'

const UseAuth = () => {

   const token = window.localStorage.getItem("token");
   return token ? true : false;

}

export default UseAuth;