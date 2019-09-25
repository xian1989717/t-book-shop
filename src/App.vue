<template>
  <div id="app">
    <my-header></my-header>
    <div class="body">
      <left-content class="left"></left-content>
      <my-body class="myBody"></my-body>
    </div>
  </div>
</template>

<script> 
  import leftContent from './components/leftContent'
  import myBody from './components/body'
  import myHeader from './components/header'
  export default {
    name: 'app',
    components: {
      leftContent,
      myBody,
      myHeader
    }
  }
</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .body {
    display: flex;
  }
  .left {
    flex-grow: 2;
    border: 1px solid #ccc;
    height: 100%;
    min-width: 150px;
  }
  .myBody {
    flex-grow: 8;
    border: 1px solid #ccc;
    height: 100%;
  }
</style>
