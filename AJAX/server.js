// 1.引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
//require 是对请求报文的封装
//response 是对响应报文的封装
//如果请求行的url路径是/server就会执行后面的回调
app.get('/server', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //  设置响应体
    response.send('hello,ajax')
})

app.post('/server', (request, response) => {
        //  设置响应头    设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*')
            //  设置响应体
        response.send('hello,ajax post')
    })
    //可以接受任意类型的请求
app.all('/json-server', (request, response) => {
        //  设置响应头    设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*')

        //响应一个数据
        const data = {
                name: 'wm',
                age: 18
            }
            //对对象进行格式转换
        let str = JSON.stringify(data)
            //  设置响应体,只能传字符串格式参数数据
        response.send(str)
    })
    //针对IE缓存
app.get('/ie', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //  设置响应体
    response.send('hello,IE')
})

app.get('/delay', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //  设置响应体
    setTimeout(() => {
        response.send('请求延时响应')
    }, 3000);
})

app.all('/jquery-server', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
        //  设置响应体
    const data = {
        name: '王明',
        age: 18
    }
    response.send(JSON.stringify(data))
})

// axios方式
app.all('/axios-server', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
        //  设置响应体
    const data = {
        name: '王明',
        age: 18
    }
    response.send(JSON.stringify(data))
})

//fetch方式
app.all('/fetch-server', (request, response) => {
    //  设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
        //  设置响应体
    const data = {
        name: '王明',
        age: 18
    }
    response.send(JSON.stringify(data))
})

//jsonp方式
app.all('/jsonp-server', (request, response) => {
        //  设置响应头    设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.setHeader('Access-Control-Allow-Headers', '*')
            //  设置响应体
        const data = {
            name: '王明',
            age: 18
        }
        let str = JSON.stringify(data)
        response.end(`handle(${str})`)
    })
    // 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，在监听中")
})