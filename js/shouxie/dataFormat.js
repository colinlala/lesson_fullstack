// 实现日期格式化函数
/**
 * @func  实现日期格式化  '2020-12-01' - 2020/12/01 | 2020/12-01 | 2020年4月1日 
 * @params data 日期对象    format 格式
 * @returns String
*/
const dataFormat = (date,format) => {
    // console.log(typeof date,Object.prototype.toString.call(date));
    // console.log(date.getDate()<10?'0'+date.getDate():date.getDate());
    var day = date.getDate(); //日子
    if(day < 10)day = '0' + day;
    var month = date.getMonth() + 1;  //月份从0开始
    if(month < 10)month = '0' + month;
    var year = date.getFullYear();  //年
    format = format.replace('yyyy',year);
    format = format.replace('MM',month);
    format = format.replace('dd',day);
    return format;
}

console.log(dataFormat(new Date('2020-09-01'),'yyyy/MM/dd'));
console.log(dataFormat(new Date('2020-09-01'),'yyyy年MM月dd日'));

