// .jsx -> .tsx
// Hello.tsx -> App.tsx
// 父组件向子组件提供props jsx输出    prop-types 拒绝luo奔
// 面向对象中，特性 父子组件间的约定 
import * as React from 'react'
// 定义一个接口，父子组件间用
// 子组件需要实现Props里面规定的接口属性和方法
// ts 语法能力 面向对象的能力更牛逼
// ts 让java 一样
// 接口定义区域
interface Props{
    userName:string;
    userAge:number;
}
// 接口和组件结合 组件要实现接口 
// props  { } 空对象
// React.FC 类型定义由 @type/react 提供
const HelloComponent:React.FC<Props> = (props) => {
    return (
        <h2>
            Hello user : {props.userName}!
            <br />
            年纪：{props.userAge}!
        </h2>
    )
}
export default HelloComponent