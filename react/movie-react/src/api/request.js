/*
 * @Date         : 2022-06-13 21:17:31
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-13 21:19:21
 * @description  : 
 */
import axios from 'axios'
export const getContestData = () =>
    axios.get('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/match')
