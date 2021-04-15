<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/rest.scss";
@import "~@/assets/styles/helper.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5em;
  font-family: $font-hei;
  font-size: 16px;
  background: #f5f5f5;
}
@media screen and (min-width: 500px) {
  #app{
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
