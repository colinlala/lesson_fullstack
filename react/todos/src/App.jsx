/*
 * @Date         : 2022-06-08 15:06:53
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-08 21:21:14
 */
import { useState, useEffect } from 'react'
import './App.css'
import { fetchTodos } from './api'
// 引入UI框架的样式
import 'antd/dist/antd.css'
import { Spin, Tabs } from 'antd'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'




const { TabPane } = Tabs

function App() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState('');
  const [activeKey, setActiveKey] = useState('全部');
  const [loading, setLoading] = useState([]);
  const [placeholder, setPlaceholder] = useState('')

  const onSetQuery = (query) => {
    // console.log(query)
    setQuery(query)
    // setLoading(true)
    // fetchTodos({ query: query, tab: activeKey })
    //   .then(data => {
    //     setLoading(false);
    //     setTodos([...data.result])
    //   })
  }

  const onDelete = (id) => {
    // console.log(id)
    let newTodos = todos.filter(todo => todo.id != id)
    setTodos([
      ...newTodos
    ])
  }

  useEffect(() => {
    // 只在切换tab的时候运行，（更新）
    // onload 第一次加载
    setLoading(true)
    setPlaceholder(`在${activeKey}内搜索`)
  }, [activeKey])

  useEffect(() => {
    // useEffect 不止是做生命周期的onload，还可以做更新事件
    // [] 第二个参数，如果改变后函数内部会执行
    // console.log('更新')
    setLoading(true)
    fetchTodos({ query: query, tab: activeKey })
      .then(data => {
        setLoading(false);
        setTodos([...data.result])
      })
  }, [activeKey, query])

  // useEffect(() => {
  //   // 请求数据（前后端分离的话）
  //   // setLoading(true);

  //   // 本来是axios请求数据，但是这次数据在本地
  //   // fetchTodos ？ 参数（对象）
  //   // Promise {<pending>} 实例
  //   // console.log(fetchTodos({ query: '', tab: 'finished' }))
  //   fetchTodos({ query: 'todo', tab: 'finished' })
  //     .then(data => {
  //       setLoading(false);
  //       // console.log(data);
  //       setTodos([...data.result])
  //     })
  // }, [])

  return (
    <>
      {/* 通用的 框架组件 */}
      {/* activeKey等于什么就亮哪里 */}
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <TabPane tab="全部" key="全部" />
        <TabPane tab="已完成" key="已完成" />
        <TabPane tab="未完成" key="未完成" />
      </Tabs>
      <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        <TodoInput
          placeholder={placeholder}
          onSetQuery={onSetQuery}
        />
        <Spin spinning={loading} tip="加载中~">
          {/* 业务组件，显示任务列表 */}
          <TodoList todos={todos} onDelete={onDelete} />
        </Spin>
      </div>

    </>
  )
}

export default App
