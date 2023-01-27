window.addEventListener('load', function() {
    function animate(obj, target, collback) { // 回调函数，函数作为实参被形参接收
        clearInterval(obj.timer); // 先清除以前的定时器
        obj.timer = setInterval(function() { //   设置定时器setInterval
                let step = (target - window.pageYOffset) / 10 //  缓动动画设置间隔步长减少
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if (window.pageYOffset == target) {
                    clearInterval(obj.timer); //   停止定时器
                    if (collback) { //   如果函数存在则执行函数
                        collback();
                    }
                }
                window.scroll(0, window.pageYOffset + step)

            }, 20) // 间隔毫秒数执行一次
    }
})