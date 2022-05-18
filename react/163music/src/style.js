/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-18 22:42:43
 * @LastEditTime: 2022-05-18 23:51:43
 * @Description: 
 */
// es6 module 一个文件里可以有多个输出
import styled, { createGlobalStyle } from 'styled-components';  // styled-components样式组件
import style from './assets/global-style';

// 一般输出 花括号解构
// css in js
export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	html, body {
		background: #f2f3f4;;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
`

// styled-components天生支持css变量
// 全局的变量放到 assets/global-style
export const Tab = styled.div`
	height: 44px;
    display: flex;
    justify-content: space-around;
    background: ${style["theme-color"]};
    a{
        flex: 1;
        padding: 2px 0; 
        font-size: 14px;
        color: #e4e4e4;
		&.selected{
			span{
				padding: 3px 0;
				font-weight: 700;
				color:#f1f1f1;
				border-bottom: 2px solid #f1f1f1;
			}
		}
    }
    /* a.selected span{
        padding: 3px 0;
        font-weight: 700;
        color:#f1f1f1;
        border-bottom: 2px solid #f1f1f1;
    } */
`

export const TabItem = styled.div`
    height:100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
// export const yh = 2;
// const obj = { a: 1 }
// export default obj;
// export default { GlobalStyle };  // 失败  默认输出 只能有一个
// export default GlobalStyle;  //成功