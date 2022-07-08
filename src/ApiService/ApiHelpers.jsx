import axios from "axios";
export function axiosconfig(token){
   
    return axios.create({
        baseURL:"https://localhost:44378/api",
        headers:{
            "content-type":"application/Json",
            "Authorization": `Bearer ${token}`
        }
    });
};