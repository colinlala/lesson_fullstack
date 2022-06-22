import axios from 'axios'


export const getBanners = () =>
    axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/flter')


export const getRestaurants = () =>
    axios.get('https://www.fastmock.site/mock/fc09142a9029fcb292822d4ee872f52b/beers/restaurants')
