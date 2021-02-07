<template>
  <div id="app">
      <div class="nav">
          <header-nav></header-nav>
      </div>
      <div class="content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
  </div>
</template>

<script>
import headerNav from './views/header/header'
export default {
  name: 'App',
  components: {
      headerNav,
  }
}
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
    background: #222;
    color: @common-color;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .content {
        width: 100%;
        height: calc(100% - 88px);
        overflow-y: scroll;
      }
}
</style>
