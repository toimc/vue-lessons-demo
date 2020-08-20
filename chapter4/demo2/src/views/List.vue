<template>
  <div>
    <ul v-if="!isShow" class="wrapper" ref="main">
      <li v-for="(item, index) in lists"
          :class="['item',{'active': index === current}]"
          @click="choose(index)"
          :key="index">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{item.time}}</div>
        <div class="detail" v-show="index === current" @click="showInfo(item)">查看详情>></div>
      </li>
      <li v-show="lists.length == 0" :style="{'text-align': 'center'}">这里空空如也~~</li>
    </ul>
    <Info :obj="chooseOne"
          @backEvent="()=>{this.isShow = false}"
          v-else></Info>
  </div>
</template>

<script>
  import store from '@/store.js'
  import Info from '@/components/Info'
  export default {
    name: "List",
    store,
    components: {
      Info
    },
    data () {
      return {
        isShow: false,
        current: '',
        chooseOne: ''
      }
    },
    mounted () {
      this.$refs.main.style.maxHeight = window.innerHeight - 60 +'px'
    },
    computed: {
      lists () {
        return store.state.lists
      }
    },
    methods: {
      choose (index) {
        this.current = index
      },
      showInfo (item) {
        this.chooseOne = item
        this.isShow = true
        this.current = ''
      }
    }
  }
</script>

<style scoped lang="scss">
$main-color: #42b983;
.wrapper{
  padding: 10px;
  overflow-y: scroll;
}
.item{
  position: relative;
  padding: 5px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  line-height: 18px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  &.active{
    border: 1px solid $main-color;
    background: $main-color;
    color: #fff;
  }
  .title{
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    border-bottom: 1px solid #dcdcdc;
  }
  .content{
    font-size: 16px;
    line-height: 22px;
    padding: 10px 0 30px 0;
  }
  .time{
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .detail{
    position: absolute;
    right: 10px;
    bottom: 10px;
    text-align: right;
    /*color: #42b983;*/
    text-decoration: underline;
  }
}


</style>
