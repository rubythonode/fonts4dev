<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Source Code Pro', 'Droid Sans Mono', 'Fira Mono', 'Inconsolata', 'Ubuntu Mono']
  }
})
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "scss/main";
</style>
