<!DOCTYPE html>
<!--[if IE 8]> <html class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html>
<!--<![endif]-->
<@pg.head css="login" />

<body>
<div class="logout"  >

    <div>
        <form action="#"  method="post">
            <div class="form-group">
                <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
                <label class="control-label visible-ie8 visible-ie9">用户名</label>
                <div class="input-icon">
                    <i class="fa fa-user"></i> <input
                        class="form-control placeholder-no-fix" type="text"
                        autocomplete="off" placeholder="用户名" name="username" />
                </div>
            </div>

            <div class="form-group">
                <label class="control-label visible-ie8 visible-ie9">密码</label>
                <div class="input-icon">
                    <i class="fa fa-lock"></i> <input
                        class="form-control placeholder-no-fix" type="password"
                        autocomplete="off" placeholder="密码" name="password" />
                </div>
            </div>

            <button type="submit" class="btn green pull-right">登录</button>
        </form>
    </div>
</div>
<h1>Hello Spring Security</h1>
<p>This is an unsecured page, but you can access the secured pages after authenticating.</p>
<ul>
    <li>Go to the <a href="/user/index" >secured pages</a></li>
</ul>
</body>
</html>