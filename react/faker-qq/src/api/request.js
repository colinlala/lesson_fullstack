import axios from 'axios'

export const getMessageListRequest = () =>
    axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/massages')

export const getFriendsListRequest = () =>
    axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/friends')