<template>
  <div class="header">
    <div class="inp">
      <input style="width:300px;" type="text">
      <button>搜索</button>
    </div>
    <div class="but">
      <button>登录</button>
      <button>注销</button>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .header {
    display: flex;
    flex-wrap: nowrap;
    height: 50px;
  }
  .inp {
    flex-grow: 7;
  }
  .but {
    flex-grow: 3;
  }
</style>