<template>
  <div class="wrapper">
    <div class="title">{{obj.title}}</div>
    <div class="content">
      {{obj.content}}
    </div>
    <div class="back" @click="back()">返回</div>
  </div>
</template>

<script>
  export default {
    name: "Info",
    props: ['obj'],
    data () {
      return {

      }
    },
    methods: {
      back () {
        this.$emit('backEvent')
      }
    }
  }
</script>

<style scoped lang="scss">
$main-color: #42b983;
.wrapper{
  padding: 10px;
}
.title{
  padding-bottom: 5px;
  border-bottom: 1px solid #dcdcdc;
}
.content{
  padding: 10px 10px 40px 10px;
  line-height: 22px;
}
.back{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
</style>
