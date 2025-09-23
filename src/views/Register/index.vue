<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <form class="form">
      <p class="form-title">欢迎注册</p>
      <div class="input-container">
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="input-container">
        <input type="email" placeholder="请输入邮箱" v-model="useremail">
      </div>
      <div class="input-container">
        <input type="password" placeholder="输入密码" v-model="password">
      </div>
      <div class="input-container">
        <input type="password" placeholder="确认密码" v-model="ackpassword">
      </div>
      <button type="submit" class="submit">
        注册
      </button>

      <p class="signup-link">
        已有账号？
        <a @click="$router.push('/login')" >登录</a>
      </p>
    </form>
  </div>

</template>

<script >
export default {
  name: 'RegisterIndex',
  data () {
    return {
      username: '',
      useremail: '',
      password: '',
      ackpassword: ''
    }
  }
}
</script>

<style lang="less" scoped>

.form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 260px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  width: 95%;
  margin: 0 auto;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.5rem;
  //text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
</style>
