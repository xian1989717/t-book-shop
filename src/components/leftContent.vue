<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="img-wrap">

      </div>
      <div>
        <span>{{item.name}}</span>
        <span>{{item.price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
        ]
      }
    },
    mounted () {
      this.list = Array.from({ length: 10 }, (v, k) => v = { id: k, name: '沙丘', price: 50.00 })
    }
  }
</script>
<style scoped>
  .img-wrap {
    width: 95%;
    height: 150px;
    border: 1px solid #ccc;
    margin: 5px auto;
  }
</style>