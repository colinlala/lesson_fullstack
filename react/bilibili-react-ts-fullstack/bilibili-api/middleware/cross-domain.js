module.exports = async (ctx , next) => {
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Headers','Content-Type')
    // OPTIONS 获取资源允许访问的方式
    ctx.set('Access-Control-Allow-Methods','GET,POST,OPTIONS')
    await(next())
}