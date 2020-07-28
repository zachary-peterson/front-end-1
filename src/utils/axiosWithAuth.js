import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: '75.74.208.109:3000/api/auth'
    })
}

export default axiosWithAuth;