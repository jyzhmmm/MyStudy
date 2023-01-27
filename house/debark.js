window.addEventListener('load', function() {
    // 登录界面js
    const number = document.querySelector('#number');
    const pass = document.querySelector('#passw');
    const img_show = document.querySelector('.show');
    const img_hidden = document.querySelector('.hidden');
    number.addEventListener('mouseenter', function() {
        number.value = '';
    })
    number.addEventListener('mouseleave', function() {
            if (number.value == '') {
                number.value = '输入账号';
            }
        })
        //密码显示隐藏
    img_hidden.addEventListener('click', function() {
        img_show.style.display = 'block';
        img_hidden.style.display = 'none';
        pass.type = 'text';
    })
    img_show.addEventListener('click', function() {
            img_show.style.display = 'none';
            img_hidden.style.display = 'block';
            pass.type = 'password';
        })
        //获取注册在浏览器数据登录
    let name = localStorage.getItem('uname');
    let code = localStorage.getItem('password');
    const goto = document.querySelector('#goto');
    const form = document.querySelector('form')
    goto.addEventListener('click', function() {
        if (number.value === name && pass.value === code) {
            form.action = 'home.html'
        } else {
            alert('密码错误')
        }
    })
})