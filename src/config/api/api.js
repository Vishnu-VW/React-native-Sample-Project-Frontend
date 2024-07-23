import axios from "axios"

const BASE_URL = 'http://172.16.10.168:3001/';


export const axiosClient = axios.create({
    baseURL : BASE_URL
})

export const SIGN_UP = 'api/auth/signup'
export const LOGIN = 'api/auth/login'