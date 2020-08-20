<template>
  <div>
    <ul>
      <li v-for="(item,index) in list"
          :class="{active:index==current && current !== ''}"
          :key="index"
          @click="choose(item,index)"
      >{{item}}</li>
    </ul>
    <button type="button" @click="add()">add</button>
    <ul>
      <li v-for="(item,index) in target"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "demo1",
    data () {
      return {
        list: [1,2,3,4,5,6,7,9,10],
        current: '',
        target: [],
        tmpObj: ''
      }
    },
    methods: {
      choose (item, index) {
        this.current = index
        this.tmpObj = item
      },
      add () {
        if (this.tmpObj == ''){
          return;
        }
        this.target.push(this.tmpObj)
        this.tmpObj = ''
        this.current = ''
      }
    }
  }
</script>

<style scoped lang="scss">
li{
  list-style: none;
  &.active{
    background: green;
  }
}
</style>
