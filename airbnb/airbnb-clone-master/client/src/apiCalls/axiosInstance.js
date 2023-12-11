import axios from "axios"
// import.meta.env.VITE_REACT_APP_SERVER_URL,

export const userInstance = axios.create({
    baseURL:"http://localhost:4000",
    headers:{
        'Content-Type':'application/json'
    }
})