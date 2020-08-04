import axios from 'axios';


export const verifyUser = async(payload) => {
    console.log(payload, "--------------------user info");
    await axios.post('http://localhost:4000/api/user/login', payload)
        .then(response => {
           return response.data;
        })
        .catch(error => {
            return error;
        });

}