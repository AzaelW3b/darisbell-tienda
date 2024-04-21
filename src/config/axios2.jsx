import axios from "axios"

const api2 = axios.create({ baseURL: import.meta.env.VITE_URL_BACKEND2 })


export default api2