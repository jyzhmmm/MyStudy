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
    const goTop = document.querySelector('.go-top');
    const section = document.querySelector('section');
    const product_ul = document.querySelector('.product_ul');
    const product_li = product_ul.querySelectorAll('li');
    // 页面滚动事件scroll
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= section.offsetTop) {
            goTop.style.display = 'block';
        } else {
            goTop.style.display = 'none';
        }
    })
    goTop.addEventListener('click', function() {
        animate(window, 0)
    })

    for (let i = 0; i < product_li.length; i++) {
        const div_price = document.createElement('div');
        const p_div = document.createElement('p');
        product_li[i].appendChild(div_price);
        div_price.className = 'price';
        //创建p元素
        div_price.appendChild(p_div);
        p_div.innerHTML = '折叠晒衣架';
        // 创建span元素
        const span_div = document.createElement('span')
        div_price.appendChild(span_div);
        span_div.innerHTML = '￥ 29.90';
        // 创建两个button元素
        const btn_div = document.createElement('button');
        div_price.appendChild(btn_div);
        btn_div.innerHTML = '查看详情';
        btn_div.className = 'btn-search';
        const btn1_div = document.createElement('button');
        div_price.appendChild(btn1_div);
        btn1_div.innerHTML = '天猫旗舰店';
        btn1_div.className = 'btn-store'
    }

})