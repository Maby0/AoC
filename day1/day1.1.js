const { arr } = require('./data.js')


function counter(array) {
    let i = 1
    let c = 0
    array.forEach((n) => {
        if (n < array[i]) c++;
        i++;
    })
    return c
}

module.exports = { counter }