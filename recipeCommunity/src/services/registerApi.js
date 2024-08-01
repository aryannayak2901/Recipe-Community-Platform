import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const register = (email, password, first_name, last_name) => {
    return axios.post(`${API_URL}/register/`, {
        email,
        password,
        first_name,
        last_name
    });
};

const verifyOtp = (email, otp) => {
    console.log('Sending OTP verification request:', { email, otp });
    return axios.post(`${API_URL}/verify-otp/`, {
        email,
        otp
    });
};


export default {
    register,
    verifyOtp
};
