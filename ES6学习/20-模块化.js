// //  分别暴露
// export let name = 'wm'

// export function play() {
//     console.log('play games')
// }


// // 统一暴露
// let name = 'wmm'

// function play() {
//     console.log('play games')
// }

// export { name, play };

//  默认暴露
export default { //  要使用对象的语法属性和方法格式写进来
    name: 'mm',
    play: function() {
        console.log('使用对象的语法写进来')
    }
}