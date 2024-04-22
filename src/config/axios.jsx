import axios from "axios"

const api = axios.create({ baseURL: 'https://correos-web.onrender.com/' })


export default api