import axios from 'axios'


export const getBanners = () =>
    axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/flter')


export const getMovies = () =>
    axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/movies')

