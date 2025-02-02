import axios from 'axios';

const API_URL = "http://localhost:3000/user/";

const login = async (email, password) => {
    const response = await axios.post(API_URL + "login", {
        email,
        password
    });
    if (response.data.type && response.data.token) {
        localStorage.setItem("type", response.data.type);
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("type");
    localStorage.removeItem("token");
};

const register = async (fullname, email, password, type) => {
    const response = await axios.post(API_URL + "create", {
        fullname,
        email,
        password,
        type
    });
    return response.data;
};

export default {
    login,
    logout,
    register
}