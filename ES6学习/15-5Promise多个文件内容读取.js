const fs = require('fs')

const p = new Promise((resolve, reject) => {
    fs.readFile('诗句.md', (err, data) => {
        resolve(data)
    })
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("月夜忆舍弟.md", (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("八月十五夜月.md", (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join(','))
})