<<<<<<< HEAD
// keydown even name -> window
window.addEventListener('keydown',function(event){
    // 键值
    let keyCode = event.keyCode;  //  按键事件的数据
    let audioEle = 
        document.querySelector(`audio[data-key="${keyCode}"]`);
    // console.log(audioEle);
    if(!audioEle)return;
    audioEle.play();
    let keyEle = 
        document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!keyEle)return;

    keyEle.classList.add('playing');
    // 定时器 1000ms
    // setTimeout(function(){
    //     // console.log('---------------');
    //     keyEle.classList.remove('playing');
    // }, 500)

    // console.log(keyCode);

})



const keys = document.querySelectorAll('.key');
for(let key of keys){
    // console.log(key);
    // event 一个个加，不能给集体加
    // 当transitionend过渡效果完成后执行一个function
    key.addEventListener('transitionend', function(event){
        // 不同类型的事件 event对象也是不同的
        // console.log(event , '------------------')
        event.target.classList.remove('playing');
    })
=======
// keydown even name -> window
window.addEventListener('keydown',function(event){
    // 键值
    let keyCode = event.keyCode;  //  按键事件的数据
    let audioEle = 
        document.querySelector(`audio[data-key="${keyCode}"]`);
    // console.log(audioEle);
    if(!audioEle)return;
    audioEle.play();
    let keyEle = 
        document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!keyEle)return;

    keyEle.classList.add('playing');
    // 定时器 1000ms
    // setTimeout(function(){
    //     // console.log('---------------');
    //     keyEle.classList.remove('playing');
    // }, 500)

    // console.log(keyCode);

})



const keys = document.querySelectorAll('.key');
for(let key of keys){
    // console.log(key);
    // event 一个个加，不能给集体加
    // 当transitionend过渡效果完成后执行一个function
    key.addEventListener('transitionend', function(event){
        // 不同类型的事件 event对象也是不同的
        // console.log(event , '------------------')
        event.target.classList.remove('playing');
    })
>>>>>>> 3060b42 (第一次Git提交所有文件)
}