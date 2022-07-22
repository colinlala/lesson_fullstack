module.exports = async (ctx , next) => {
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Headers','Content-Type')
    ctx.set('Access-Control-Allow-Methods','GET,POST')
    await(next())
}