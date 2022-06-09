import React from 'react'
import { List, Icon } from 'antd';
import classNames from 'classnames';

const TodoList = ({ todos, onDelete }) => {

    // 应该是父组件给的
    // const onDelete=()=>{
    // }

    return (
        <div className="list-wrap">
            {/* {todos.map(todo => <li key={todo.id}>{todo.text}</li>)} */}
            {todos.length === 0 ? (
                <p>暂无待办事项</p>
            ) : (
                // List 组件来自antd 
                <List
                    // 数据行排列
                    itemLayout='horizontal'
                    // 数据源
                    dataSource={todos}
                    // 每一个jsx输出
                    renderItem={({ id, text, finished }, index) => {
                        const className = classNames({
                            "list-item": true,
                            "list-item__finished": finished
                        })
                        return (
                            // 也可以 const { Item } = List  然后就直接 <Item>...</Item>
                            <List.Item className={className}>
                                <div className='list-item-wrap'>
                                    <span className="list-item-text">{text}</span>
                                    <Icon type="delete" onClick={onDelete.bind(null, id)} />
                                </div>
                            </List.Item>
                        )
                    }}
                />
            )}
        </div>
    )
}

export default TodoList
