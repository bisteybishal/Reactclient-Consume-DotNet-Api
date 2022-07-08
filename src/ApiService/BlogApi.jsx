import { axiosconfig } from "./ApiHelpers";
import axios from "axios";

export function GetBlog() {
    return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem("token");
        axiosconfig(token).get("/blog")
            .then((response) => {
                resolve(response)
            }).catch(error => reject(error));
    })
}
export function PostBlog(blog) {
    return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem("token");
        axiosconfig(token).post("/blog", blog)
            .then((response) => {
                resolve(response);
            }).catch(error => reject(error));
    });
};
export function GetblogById(blogId) {
    return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem("token");
        axiosconfig(token).get(`/Blog/GetBlogsById?blogId=${blogId}`).then((response) => {
            resolve(response);
        }).catch(error => reject(error));
    });

}

export function UpdateBlog(blog) {
    return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem("token");
        axiosconfig(token).put("/Blog", blog).then((response) => {
            resolve(response);
        }).catch(error => { reject(error); });
    })
}
export function Deleteblog(blogId) {
    return new Promise((resolve, reject) => {
        var token = window.localStorage.getItem("token");
        axiosconfig(token).delete(`/Blog/blogId?blogId=${blogId}`).then((response) => {
            resolve(response);
        }).catch(error => reject(error));


    });
}

