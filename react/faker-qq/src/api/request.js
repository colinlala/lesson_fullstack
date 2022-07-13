// import axios from 'axios'

// export const getMessageListRequest = () =>
//     axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/massages')

// export const getFriendsListRequest = () =>
//     axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/friends')

// export const getSubscriptionListRequest = () =>
//     axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/subscription')

// export const getGroupListRequest = () =>
//     axios.get('https://www.fastmock.site/mock/be16eda287b24f69cf9baefad9651667/qq/friends')

import { axiosInstance } from "./config";

export const getMessageListRequest = 
        () => axiosInstance.get('/massages')
        
export const getSearchListRequest = 
        () => axiosInstance.get('/searchHistoryList')

export const getFriendsListRequest =
        () => axiosInstance.get('/friends')
    
// export const getRecommendListRequest = 
//         () => axiosInstance.get('/personalized')