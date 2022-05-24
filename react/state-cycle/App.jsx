/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-24 19:12:22
 * @LastEditTime: 2022-05-24 20:42:11
 * @Description: props、useEffect
 */
import React, { useState, useEffect } from 'react'
// jsx 对象 React.createElement('div',{className:'hello'},'Hello World')
const Hello = () => <div className='hello'>Hello World</div>
// console.log(Object.prototype.toString.call(Hello));
// 1. jsx 优秀 且简单的UI 表达创新
// 2. jsx -> babel -> 转义为 React.createElement()
//  状态，自有的，useState 响应式，但是一般建议放在父组件中
// 便于多个子组件共享数据
// 子组件里  props参数对象的
// 子组件里不要去添加自有状态，外界可能不同步，除非外界不用


const Header = () => {
  return (
    <div>
      <Title title="首页" />
    </div>
  )
}
// props? 父组件给的 不是自己的
const Title = (props) => {
  const { title } = props;
  return (
    <header>
      {title}
    </header>
  )
}
const Main = ({ users }) => {
  return (
    <div>
      Main
      <ul>
        {/* 唯一的key  为了不警告，加id*/}
        {users.map(user => <li key={user.id}>{user.name}-{user.age}</li>)}
      </ul>
    </div>
  )
}

const Footer = ({ count }) => {
  return (
    <footer>
      Footer,有{count} 位用户
    </footer>
  )
}

// 如果外层的不重要也可以直接不写
const Index = () => {
  // 不是用useState   数据绑定且响应
  // 不够格成为状态
  // 状态，响应式的

  // state 自有的，父组件
  const [users, setUsers] = useState([{
    name: 'colin',
    age: 18,
    id: 1
  }, {
    name: 'lala',
    age: 25,
    id: 2
  }, {
    name: 'colin',
    age: 19,
    id: 3
  }]);

  // 生命周期函数  onload   onDOMContentLoaded
  // Component useEffect  onDOMContentLoaded 表示组件挂载上去了
  useEffect(() => {
    console.log('组件加载好了');
    setTimeout(() => {
      setUsers([...users, {
        name: 'cc',
        age: 19,
        id: 4
      }])
    }, 2000)
  }, [])
  // setTimeout(() => {
  //   // users.push() 此时返回的不是数组,应该数组的解构加入
  //   setUsers([...users, {
  //     name: 'cc',
  //     age: 19,
  //     id: 4
  //   }])
  // }, 1000)
  return (
    // 如果唯一的父元素，只是起到包裹作用，且不需要标签，省就可以了
    <>
      <Header />
      <Main users={users} />
      <Footer count={users.length} />
    </>
  )
}

function App() {
  return (<Index />)
  // return <Hello />
  // return React.createElement('div', null, 'hello world')
}

export default App