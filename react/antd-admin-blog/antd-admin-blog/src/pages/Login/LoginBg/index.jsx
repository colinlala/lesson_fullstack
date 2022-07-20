import React, { useEffect } from 'react'
import './index.css'

export default function LoginBg() {
    useEffect(() => {
        // 常量
        const BACKGROUND_COLOR = 'rgb(0, 43, 54)';
        const POINT_NUM = 80; // 星星数量
        const POINT_COLOR = 'rgb(255, 255, 255)';
        const LINE_LENGTH = 10000;
        // 画
        // canvas 语义化, video audio type=range color email required
        // html5  localStorage kv sessionStorage  
        // session 会话 后端 内存 
        // canvas 与其他的html 标签不一样 api 绘图
        const cvs = document.createElement('canvas'); // 画布
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        cvs.style.cssText = 
            'position:fixed;top:0px;left:0px;z-index:-1;opacity:1.0;';
        document.body.appendChild(cvs);
        const ctx = cvs.getContext('2d'); // 上下文 
        
        function randomFloat(min, max) {
            return min + Math.random()*(max-min)
        }

        function Point() {
            this.x = randomFloat(0, cvs.width);
            this.y = randomFloat(0, cvs.height);
            const speed = randomFloat(0.3, 1.4);
            const angle = randomFloat(0, 2 * Math.PI);
            // 
            this.dx = Math.sin(angle) * speed;
            this.dy = Math.cos(angle) * speed;
            this.r = 1.2
            this.color = POINT_COLOR;
        }

        Point.prototype.move = function() {
            this.x += this.dx;
            if (this.x < 0) { // 左边的边界 
                this.x = 0; //  不离开
                this.dx = -this.dx; // 反向 
            } else if (this.x > cvs.width) { // 右边的边界
                this.x = cvs.width;
                this.dx = -this.dx;
            }
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 0;
                this.dy = -this.dy;
            } else if (this.y > cvs.height) {
                this.y = cvs.height;
                this.dy = -this.dy;
            }
        }

        Point.prototype.draw = function() {
            // canvas html5 绘图 
            ctx.fillStyle = this.color;// 什么颜色的画笔
            ctx.beginPath(); // 开始画
            // 画圆 
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.closePath();// 结束绘制
            ctx.fill();
        }

        const points = [];
        function initPoints(num) {
            for (let i = 0;  i < num; ++i) {
                points.push(new Point());
            }
        }

        const p0 = new Point(); // 鼠标跟随的小星星
        p0.dx = p0.dy = 0;
        document.onmousemove = function(ev) {
            p0.x = ev.clientX;
            p0.y = ev.clientY;
        }
        document.onmousedown = function(ev) {
            p0.x = ev.clientX;
            p0.y = ev.clientY;
        }
        document.onmouseup = function(ev) {
            p0.x = ev.clientX;
            p0.y = ev.clientY;
        }
        document.onmouseout = function(ev) {
            p0.x = null;
            p0.y = null;
        }

        function drawFrame() {
            cvs.width = window.innerWidth;
            cvs.height = window.innerHeight;
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, cvs.width, cvs.height);
            const arr = p0.x == null ? points : [p0].concat(points);
            for (let i = 0; i < arr.length; i++) {
                arr[i].draw();
                arr[i].move();
            }
            // 按设备的刷新帧率来反复调用drawFrame 函数， 
            // canvas 动态绘制的重要API
            window.requestAnimationFrame(drawFrame);
        }

        initPoints(POINT_NUM)
        drawFrame();
    }, [])
    return (
        <></>
    )
}
