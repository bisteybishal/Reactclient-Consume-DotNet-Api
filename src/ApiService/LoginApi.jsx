
import axios from "axios";

export function SignIn(login) {
    return new Promise((resolve, reject) => {

        axios.post("https://localhost:44378/api/Account/login", login).then((response) => {
            resolve(response);
        }).catch(err => reject(err));
    });
}