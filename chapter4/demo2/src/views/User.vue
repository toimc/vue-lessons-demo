<template>
  <div>
    <div class="user">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="name">{{name}}</div>
      <p>欢迎来到个人中心</p>
    </div>
    <div class="ctrls">
      <router-link :to="{name: 'add'}" class="add">添加</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data () {
      return {
        name: ''
      }
    },
    mounted () {
      this.name = localStorage.getItem("name") ? localStorage.getItem("name") : 'Vue小伙伴'
    }
  }
</script>

<style scoped lang="scss">
$main-color: #42b983;
.user{
  text-align: center;
  font-size: 18px;
  .name{
    padding: 10px;
  }
}
.ctrls{
  text-align: center;
  padding-top: 40px;
}

.add{
  display: block;
  width: 90%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  margin: 0 auto;
  color: #fff;
}
</style>
