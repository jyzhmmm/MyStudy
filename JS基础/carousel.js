window.addEventListener('load', function() { //  页面加载完执行js
    const getleft = document.querySelector('.getleft');
    const getright = document.querySelector('.getright');
    const focusw = document.querySelector('.w');
    const box = document.querySelector('.box');
    const getWidth = focusw.offsetWidth; // 得到图片宽度
    focusw.addEventListener('mouseenter', function() {
        getleft.style.display = 'block';
        getright.style.display = 'block';
        clearInterval(timer);
        timer = null // 清楚定时器变量
    })
    focusw.addEventListener('mouseleave', function() {
            getleft.style.display = 'none';
            getright.style.display = 'none';
            timer = setInterval(function() {
                getright.click(); // 手动调用点击事件，就是自动执行点击
            }, 2000)
        })
        // 动态生成小圆圈
    const ul = box.querySelector('ul');
    const ol = box.querySelector('.box-ol');
    for (let i = 0; i < ul.children.length; i++) {
        const li = document.createElement('li');
        // 自定义属性，记录小圆圈索引号
        li.setAttribute('index', i);
        ol.appendChild(li)
            // 生成一个小圆圈就绑定事件
        li.addEventListener('click', function() {
            for (let i = 0; i < ol.children.length; i++) { // 排除其他的，再给自己
                ol.children[i].className = ''
            }
            this.className = 'current'
                // 点击小圆圈得到索引号
            const index = this.getAttribute('index');
            // 我们点击了某个小li 把小li的索引号给num
            num = index;
            // 我们点击了某个小li 把小li的索引号给circle
            circle = index;
            // 点击小圆圈移动图片，移动的是ul
            animate(ul, -index * getWidth); //  图片宽度*索引号=动画移动距离
        })
    }
    ol.children[0].className = 'current'
        // 无缝链接，克隆第一张图片放到ul最后
    const clone = ul.children[0].cloneNode(true);
    ul.appendChild(clone);
    // 点击按钮，图片移动
    let num = 0;
    let circle = 0;
    // 节流阀，让事件不能连续执行，执行完一个事件在执行下一个,利用了函数自调用(函数回调)
    let flag = true;
    getright.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++
            animate(ul, -num * getWidth, function() {
                flag = true;
            });
            // 点击按钮，小圆圈也会跟着变化
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    getleft.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * getWidth + 'px';

                }
                num--
                animate(ul, -num * getWidth, function() {
                    flag = true;
                });
                // 点击按钮，小圆圈也会跟着变化
                circle--;
                if (circle < 0) {
                    circle = ol.children.length - 1;
                }
                for (let i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                ol.children[circle].className = 'current';
            }
        })
        //  自动播放轮播图
    let timer = setInterval(function() {
        getright.click(); // 手动调用点击事件，就是自动执行点击
    }, 2000)
})