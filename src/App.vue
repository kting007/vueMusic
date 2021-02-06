<template>
  <div id="app">
      <div class="nav">
          <header-nav></header-nav>
      </div>
      <music-list></music-list>
<!--      <div class="content">-->
<!--        <router-view/>-->
<!--     </div>-->
  </div>
</template>

<script>
import headerNav from './views/header/header'
import musicList from  './views/header/list'
export default {
  name: 'App',
  components: {
      headerNav,
      musicList
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
        height: calc(100% - 140px);
      }
}
</style>
