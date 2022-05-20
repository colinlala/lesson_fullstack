/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-20 14:27:05
 * @LastEditTime: 2022-05-20 16:25:03
 * @Description: 
 */
import styled, { createGlobalStyle } from 'styled-components';  // styled-components样式组件

// css reset
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
		/* color: #fff; */
	}
`

export const Article = styled.div`
    width: 400px;
    background-color: #81ecec;
    border-bottom:1px solid #bfbfbf;
    margin: auto;
    padding-bottom: 5px;
    color: black;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 2px gray;
`
export const Hd = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-around;
    a {
        padding: 10px 5px;
        margin: 1px 8px;
        &.author{
            span {
                font-size: 16px;
                color: black;
                margin-right: 4px;
            }
        }
        &.author::after{
            content: "|";
            color: gray;
            margin-right: 0px;
        }
        &.time {
            span {
                padding: 4px 0;
                font-size: 14px;
                color: gray;
                margin-left: 4px;
            }
        }
        &.quit {
            flex: 1;
            text-align: right;
            margin-right: 7px;
            margin-top: 5px;
            font-size: 20px;
            color: gray;
            font-size: 10px;
            line-height: 5px;
        }
    }
`
export const Bd = styled.div`
    margin: 15px 15px;
    padding: 2px 0;
`
export const Ft = styled.div`
    margin: 0 10px ;
    display: flex;
    a {
        margin: 5px 5px;
        &.praise{
            font-size: 5px;
            color:gray;
        }
        &.comment{
            font-size: 5px;
            color:gray;
        }
        &.label {
            flex: 1;
            text-align: right;
            font-size: 5px;
            color:grey;
        }
        span {
            margin: 0 5px;
        }
    }
`
export const Title = styled.div`
    font-size: 20px;
    font-weight: 550;
`
export const Content = styled.div`
    margin-top: 15px;
    display: flex;
`
export const Text = styled.div`
    flex: 1;
    color: black;
    display: -webkit-box;
    overflow: hidden;
    /* 内容只显示4行，多余的...显示 */
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-all;   // 合适的地方换行
    line-height: 1.2em;
`
export const Img = styled.div`
    img {
        max-width: 100%;
        height: 75px;
    }
`

