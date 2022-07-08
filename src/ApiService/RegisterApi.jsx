import axios from "axios";
import { axiosconfig } from "./ApiHelpers";

export function Register(register) {
    return new Promise((resolve, reject) => {
        axios.post("https://localhost:44378/api/Account/register", register).then((response) => {
            resolve(response);
        }).catch(error => reject(error));
    });
}