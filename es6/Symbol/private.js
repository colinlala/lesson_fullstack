// 立即执行函数 + 闭包
var PClass = (function () {
    var a = '私有变量';
    var getA = function () {
        console.log(a, '私有方法')
    }
    var setA = function (val) {
        // console.log(a, '私有方法')
        a = val;
    }
    // 闭包区域，变量永生
    function P() {
        // 闭包空间里面的a 作为私有属性提供给类
        this.b = 1;  // public
    }
    P.prototype = {
        // 私有属性
        // a: a,  不行这样可以通过原型链找到

        // public方法
        getType: function (type) {
            if (type == 'a') {
                getA();
            }
        },
        setType: function (type, val) {
            if (type == 'a') {
                setA(val);
            }
        }
    }
    return P;
})();
// public 门户开放性的  private 按规矩来 定义

const pclass = new PClass();
// console.log(pclass.b)
// console.log(pclass.a) // pclass.a 现在拿不到

pclass.getType('a')
pclass.setType('a', '1212121212')
pclass.getType('a')



