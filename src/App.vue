<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
  }
}
</script>
<style lang="stylus">
@import './stylus/reset.styl'
@import './stylus/common.styl'
#app
  width 100%
  height 100%
</style>
