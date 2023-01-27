window.addEventListener('load', function() {
    const login_show = document.querySelector('#login-show');
    const login_hidden = document.querySelector('#login-hidden');
    const img_show = document.querySelector('.show');
    const img_hidden = document.querySelector('.hidden');
    // 注册界面js
    const login_number = document.querySelector('#login-number');
    login_number.addEventListener('mouseenter', function() {
        login_number.value = '';
    })
    login_number.addEventListener('mouseleave', function() {
            if (login_number.value == '') {
                login_number.value = '输入账号';
            }
        })
        //密码显示隐藏
    login_hidden.addEventListener('click', function() {
        login_show.style.display = 'block';
        login_hidden.style.display = 'none';
        passw.type = 'text';
    })
    login_show.addEventListener('click', function() {
        login_show.style.display = 'none';
        login_hidden.style.display = 'block';
        passw.type = 'password';
    })
    img_hidden.addEventListener('click', function() {
        img_show.style.display = 'block';
        img_hidden.style.display = 'none';
        rpt.type = 'text';
    })
    img_show.addEventListener('click', function() {
            img_show.style.display = 'none';
            img_hidden.style.display = 'block';
            rpt.type = 'password';
        })
        // 注册数据存储
    const btn = document.querySelector('button')
    const pwd = document.querySelector('#passw')
    const rpt = document.querySelector('#repeat')
    btn.addEventListener('click', function() {
        let i = 0;
        if (pwd.value === rpt.value) {
            localStorage.setItem("uname", login_number.value);
            localStorage.setItem("password", pwd.value);
        }
    })
})