/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-26 19:15:47
 * @LastEditTime: 2022-05-26 19:55:30
 * @Description:封装数据模块
 */
import Loki from 'lokijs';
// 增删改查
// 1. 新建数据库   notes数据库
// 2. 建立数据库 | 连接数据库，db代表着数据库对象（句柄）
//        通过db就可以操作数据库了
// 3. 建一个表 | 打开表
// 4. CRUD操作 
export const db = new Loki('notes', {
    // 自动加载
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    // 每隔3s保存
    autosaveInterval: 3000,
    // 持久化的方式：localstorage
    persistenceMethod: 'localStorage'
})
// Lokijs 太友好了
// 初始化，检测有没有准备好表
function databaseInitialize() {
    // 数据库初始化
    const notes = db.getCollection('notes');  // 集合  表  collection
    if (notes === null) {
        db.addCollection('notes');  // 创建一个集合（表）
    }
}

// select  供其他模块调用   参数是表名
export function localCollection(collection) {   // thenable
    return new Promise(resolve => {  // 查询需要时间  
        // 内存切换到硬盘 读写速度差千倍万倍  I/O操作
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection)
                || db.addCollection(collection);
            resolve(_collection);
        })
    })
}