import axios from 'axios'

const api = axios.create({
  baseURL:'google.com'
})

export default api