//对象字面量？
//用逗号分隔多个“值”
var empty_object = {};
var stooge = {
    "first-name":"Jerome",
    "last-name":"Hpward",
    nickname:'BB'
};
//对象字面量，里面可以嵌套
var flight = {
    airline:"Occ",
    number:001,
    departure:{
        tmie:"2020-01-01 13:01",
        city:"Beijing"
    },
    arrival:{
        time:"2020-01-01 18:32",
        city:"Nanchang"
    }
};
//检索
stooge["first-name"] //"Jerome"
//stooge中没有big-name 则返回undefined值
stooge["big-name"]//undefined

//对象通过引用传值，他们永远不会不会被拷贝？？
var x = stooge;
x.nickname = 'AA';
var aa = stooge.nickname;//aa为'AA'