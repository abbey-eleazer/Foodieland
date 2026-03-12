import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'www.themealdb.com/api/json/v1/1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
