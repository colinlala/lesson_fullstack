import axios from 'axios'

export const doSearch = (filter) =>
    axios.get(`https://swapi.dev/api/people?search=${filter}`)

