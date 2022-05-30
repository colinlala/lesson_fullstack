/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 19:59:34
 * @LastEditTime: 2022-05-28 20:06:14
 * @Description: 
 */
import React from "react";


const Results = ({ beers }) => {
    return (
        <div>
            {beers.map(beer => <li key={beer.id}>
                {beer.title}  <img src={beer.pic} />
            </li>)}
        </div>
    )
}

export default Results