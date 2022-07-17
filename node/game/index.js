// 输入、输出设备打交道
const game = require('./game.js');

let winCount = 0; // 计算器赢的次数
// 进程  cpu 运算单位，隔离资源的最小单元  A B C D  进程切换 中断 
process.stdin.on('data',(buffer) => {
    // 输入 rock         node buffer格式
    // <Buffer 72 6f 63 6b 0d 0a>
    // console.log(buffer);  // 二进制缓冲
    // <Buffer 72 6f 63 6b 0d 0a> rock
    // console.log(buffer,buffer.toString());  // 二进制缓冲变成中文格式

    const action = buffer.toString().trim();
    const result = game(action);  // 把输入的值 交给游戏逻辑，并且展示输赢

    if(result == 1){
        winCount++
        if(winCount >= 3){
            console.log('不玩啦.....');
            // 退出进程
            process.exit();
        }
    }

}) 