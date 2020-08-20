<template>
  <div>
    <form v-if="!isReg">
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <div>再次输入密码：</div>
      <input type="password" v-model="repeat">
      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        isReg: false,
        name: '',
        password: '',
        repeat: ''
      }
    },
    methods: {
      login () {
        if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
          this.name = ''
          this.password = ''
          this.$router.push('/home/list')
        }else{
          alert('用户名密码不正确！！')
        }
      },
      reg () {
        this.isReg = true
      },
      cancel () {
        this.isReg = false
      },
      addUser () {
        if (this.password === this.repeat){
          localStorage.setItem("name", this.name)
          localStorage.setItem("password", this.password)
          this.name = ''
          this.password = ''
          this.isReg = false
        }else{
          alert('两次密码输入不一致')
        }
      }
    }
  }
</script>

<style scoped>

</style>
