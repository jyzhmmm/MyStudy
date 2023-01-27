const fs = require('fs')
    // fs.readFile('诗句.md', (err, data) => { // data表示读取出来的结果 ,是Buffer缓存，需要进行转换
    //     // 如果失败，则抛出错误
    //     if (err) throw err
    //         // 如果没有错误则输出内容
    //     console.log(data.toString())
    // })

// 使用Promise封装
const p = new Promise(function(resolve, reject) {
    fs.readFile('诗句.md', (err, data) => {
        // 如果失败，则抛出错误
        if (err) reject(err)
            // 如果没有错误则输出内容
        resolve(data)
    })
})
p.then(function(value) {
    console.log(value.toString())
}, function(reason) {
    console.log('读取失败')
})