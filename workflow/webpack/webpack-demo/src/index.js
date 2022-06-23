require('./main.css')
const { toLowerCase,toUpperCase } = require('./b.js')
const a = 'Hello lala,101'
console.log(toLowerCase(a))
console.log(toUpperCase(a))
let oDiv = document.createElement('div')
oDiv.textContent='1111111111111'
document.body.appendChild(
    oDiv
)
module.exports = a;    // commonjs