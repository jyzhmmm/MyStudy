const fs = require('fs')

function sj() {
    return new Promise((resolve, reject) => {
        fs.readFile('./诗句.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function sw() {
    return new Promise((resolve, reject) => {
        fs.readFile('./八月十五夜月.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function yy() {
    return new Promise((resolve, reject) => {
        fs.readFile('./月夜忆舍弟.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function main() {
    let one = await sj()
    let two = await sw()
    let three = await yy()
    console.log(one + two + three)
}
main()