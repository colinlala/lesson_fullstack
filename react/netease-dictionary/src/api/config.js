
import axios from 'axios'

export const baseUrl = "https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers";
const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~~')
    }
)

export { axiosInstance }