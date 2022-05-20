/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-20 14:18:39
 * @LastEditTime: 2022-05-20 16:31:58
 * @Description: 
 */
import { useState } from 'react'
import { GlobalStyle, Article, Hd, Bd, Ft, Title, Content, Text, Img } from './style'


function App() {
  const data =
  {
    authorName: ['小伙子', '笨小孩'],
    time: '2月前',
    title: [
      '在项目中用ts封装axios，一次封装整个团队收益 ',
      '关于电竞职业选手转前端开发这件事'
    ],
    text: [
      '这篇文章封装的axios已经满足如下功能：无处不在的代码提示；灵活的拦截器；可以创建多个实例，灵活根据项目进行调整；每个实例，或者每个接口这篇文章封装的axios已经满足如下功能：无处不在的代码提示；灵活的拦截器；可以创建多个实例，灵活根据项目进行调整；每个实例，或者每个接口',
      '这篇文章封装的axios已经满足如下功能：无处不在的代码提示；灵活的拦截器；可以创建多个实例，灵活根据项目进行调整；每个实例，或者每个接口这篇文章封装的axios已经满足如下功能：无处不在的代码提示；灵活的拦截器；可以创建多个实例，灵活根据项目进行调整；每个实例，或者每个接口'],
    img: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F57d0cb770d7b9.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655621491&t=ca4f31f254633d1a7bed497091fa91b7',
      'https://img1.baidu.com/it/u=3471464898,1556242076&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
    ],
    praise: [6666, 1111],
    comment: [999, 666],
    label: [
      'axios',
      'TypeScript',
      'JavaScript'
    ]
  }


  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Article>
        <div>
          <Hd>
            <a className='author'>
              <span>{data.authorName[0]}</span>
            </a>
            <a className='time'>
              <span>{data.time}</span>
            </a>
            <a className='quit'>x</a>
          </Hd>
          <Bd>
            <Title>
              <a>{data.title[0]}</a>
            </Title>
            <Content>
              <Text>
                <a>{data.text[0]}</a>
              </Text>
              <Img>
                <img src={data.img[0]} alt="" />
              </Img>
            </Content>
          </Bd>
          <Ft>
            <a className='praise'>
              <span>点赞{data.praise[0]}</span>
            </a>
            <a className='comment'>
              <span>评论{data.comment[0]}</span>
            </a>
            <a className='label'>
              <span>{data.label[0]} {data.label[1]}</span>
            </a>
          </Ft>
        </div>
      </Article>
      <Article>
        <div>
          <Hd>
            <a className='author'>
              <span>{data.authorName[1]}</span>
            </a>

            <a className='time'>
              <span>{data.time}</span>
            </a>
            <a className='quit'>x</a>
          </Hd>
          <Bd>
            <Title>
              <a>{data.title[1]}</a>
            </Title>
            <Content>
              <Text>
                <a>{data.text[1]}</a>
              </Text>
              <Img>
                <img src={data.img[1]} alt="" />
              </Img>
            </Content>
          </Bd>
          <Ft>
            <a className='praise'>
              <span>点赞{data.praise[1]}</span>
            </a>
            <a className='comment'>
              <span>评论{data.comment[1]}</span>
            </a>
            <a className='label'>
              <span>{data.label[1]} {data.label[2]}</span>
            </a>
          </Ft>
        </div>
      </Article>
    </div>
  )
}

export default App
