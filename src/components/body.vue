<template>
  <div style="display:flex;flex-wrap: wrap">
    <div style="margin:auto;" v-for="item in bookList" :key="item.id">
      <div class='img-wrap'></div>
      <div>
        <span>{{item.name}}</span>
        <span>{{item.price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import http from '../common/http'
  import test3, { test1, test2 } from '../common/test.js'
  export default {
    data () {
      return {
        bookList: [
        ]
      }
    },
    mounted () {
      test3()
      test1()
      test2()
      http.get('about').then(res => { console.log(res) })
      this.bookList = Array.from(Array(96), (v, k) => v = { id: k, name: '地球三部曲', price: 100.00 });
    }
  }
</script>
<style scoped>
  .img-wrap {
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    margin: 5px;
  }
</style>