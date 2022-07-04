import React from 'react'
import './app.css'

// :React.FC<{}> 类型约束
// FC就是FunctionComponent的缩写，事实上React.FC可以写成React.FunctionComponent
export const App :React.FC<{}> = () => {
    return (
        <div className='app'>
            App
        </div>
    )
}