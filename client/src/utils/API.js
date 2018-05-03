import axios from "axios";

export default {
    userSignup: userData => {
        return axios.post('/api/signup', userData);
    },
    userLogin: userData => {
        return axios.post('/api/login', userData);
    },
    getUser: userData => {
        return axios.get('/api/user/', userData);
    }
}