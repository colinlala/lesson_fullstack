// node 版本 es6 晚 
const fetch = require("node-fetch"); // 在后端发送一个请求 rpc 调用 

const URL_RANKING = 
    "https://api.bilibili.com/x/web-interface/ranking?rid={rid}&day=3";

const fetchRankingById = (rId) => {
    return fetch(URL_RANKING.replace("{rid}", rId))
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchRankingById
}