const defaultTxt = document.querySelector('.def p');
const debounceTxt = document.querySelector('.debounce p');
const throttleTxt = document.querySelector('.throttle p');
const ipt = document.querySelector('input');

ipt.oninput = (e) =>{
    setDefTxt(e.currentTarget.value);
    setDebounceTxt(e.currentTarget.value);
    setThrottleTxt(e.currentTarget.value);
}
const setDefTxt = (txt) =>{
    defaultTxt.innerHTML = txt;
};

// 防抖函数
const debounce = (cb,delay = 1000) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    };
};

const setDebounceTxt = debounce((txt) => {
    debounceTxt.innerHTML = txt;
},500);



//节流函数
const throttle = (cb,delay = 1000) => {
    let isWaiting = false;
    let lastArgs ;
    const timeOutFn = () => {
        if(lastArgs){
            cb(...lastArgs)
            lastArgs = null;
            setTimeout(timeOutFn,delay);
        } else{
            isWaiting = false;
        }
    };
    return (...args) => {
        if(isWaiting){
            return;
        }
        cb(...args);
        isWaiting = true;
        setTimeout(timeOutFn,delay);
    };
};

const setThrottleTxt = throttle((txt) => {
    throttleTxt.innerHTML = txt;
},1000)
