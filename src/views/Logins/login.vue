<template>
    <div class='login'>
        <div class='login_title'>
        <span>管理员登录</span>
        </div>
        <div class='login_fields'>
        <div class='login_fields__user'>
            <div class='icon'>
            <img alt="" src='/images/user_icon_copy.png'>
            </div>
            <input name="login" placeholder='用户名' maxlength="16" type='text' autocomplete="off" value="kbcxy"/>
            <div class='validation'>
                <img alt="" src='/images/tick.png'>
            </div>
        </div>
        <div class='login_fields__password'>
            <div class='icon'>
            <img alt="" src='/images/lock_icon_copy.png'>
            </div>
            <input name="pwd" placeholder='密码' maxlength="16" type='text' autocomplete="off">
            <div class='validation'>
            <img alt="" src='/images/tick.png'>
            </div>
        </div>
        <div class='login_fields__password'>
            <div class='icon'>
            <img alt="" src='/images/key.png'>
            </div>
            <input name="code" placeholder='验证码' maxlength="4" type='text'  autocomplete="off">
            <div class='validation' style="opacity: 1; right: -5px;top: -3px;">
            <canvas class="J_codeimg" id="myCanvas" onclick="Code();">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
            </div>
        </div>
        <div class='login_fields__submit'>
            <input type='button' value='登 录' @click="handleLogin">
        </div>
        </div>
        <div class='success'>
        </div>
        <div class='disclaimer'>
            <p>欢迎登陆后台管理系统</p>
        </div>
    </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {},
  mounted () {
  },
  methods: {
    handleLogin () {
      this.$message({
        message: '登录成功',
        type: 'success'
      })
      this.$router.push({ path: '/index' })
    }
  }
}
</script>
<style lang="scss">
.login{ padding: 0;
    margin: 0;
    height: 100%;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: left top;
    // background-color: #242645;
    color: #fff;
    font-family: 'Source Sans Pro';
    background-size: 100%;
    background-image: url(/images/Starry.jpg);

}
</style>
