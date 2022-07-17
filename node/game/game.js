// 应用层 游戏业务开发
// export default
// 常量  
const ALLACTIONS = ['rock', 'scissor', 'paper'];

module.exports = function(playerAction){
    if(ALLACTIONS.indexOf(playerAction) == -1){
        // 没有执行下去的必要了
        // return
        throw new Error('invalid playerAction')
    }
    // console.log(playerAction);  // 输入rock  rock
    // 电脑
    let computerAction;
    let random = Math.floor(Math.random() * 3)  // 0  1  2 
    // console.log(random, '/////');
    computerAction = ALLACTIONS[random];
    // console.log(computerAction)
    if (computerAction == playerAction) {
        console.log('平局');
        return 0; 
    } else if ( 
        (computerAction == 'rock' && playerAction == 'scissor') ||
        (computerAction == 'scissor' && playerAction == 'paper') || 
        (computerAction == 'paper' && playerAction == 'rock')
    ) {
        console.log('电脑赢了')
        return -1;
    } else {
        console.log('你赢了')
        return 1;
    }
}