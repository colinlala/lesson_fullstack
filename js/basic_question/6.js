// typeof 靠谱的地方  除了null，基本类型检测都还靠谱
console.log(typeof 12312312313123213123123n)  // bigint
console.log(typeof BigInt(1n))  // bigint

// js 有7种简单数据类型，其余都是对象，唯一Symbol

console.log(typeof console.log)   // function