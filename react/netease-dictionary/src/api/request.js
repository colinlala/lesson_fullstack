import { axiosInstance } from "./config";



export const getBannerRequest = 
    () => axiosInstance.get('/flter')


export const getMoviesRequest = 
    () => axiosInstance.get('/movies')

