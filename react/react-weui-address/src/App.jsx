/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 13:49:25
 * @LastEditTime: 2022-06-04 15:36:20
 * @Description: 
 */
import { useState, useEffect } from 'react'
import axios from 'axios'
import Address from './Address'

function App() {
  const [address, setAddress] = useState([])
  // const [showDialog, setShowDialog] = useState(false)


  useEffect(function () {
    // 比立即执行函数可读性高(官方文档推荐)
    async function getUserAddress() {
      const { data } = await axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/address')
      // console.log(data);
      if (data && data.length > 0) {
        setAddress([...data])
      }
    }
    getUserAddress()

    // (async function () {
    // })()
  }, [])


  return (
    <div className="App">
      <Address address={address} />
    </div>
  )
}

export default App
