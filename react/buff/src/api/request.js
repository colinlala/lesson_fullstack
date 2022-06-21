import axios from 'axios'

export const getGuns = () =>
    axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/guns')