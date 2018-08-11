<template>
  <div id="app">
    <app-header v-if="showHeader"></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-left',
        showHeader: false
      }
    },
    components: {
      appHeader: Header
    },
    methods: {
      checkHeader() {
        this.showHeader = this.$cookies.get('user_session') ? true : false
      }
    },
    beforeRouteUpdate(to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
    created() {
      this.checkHeader()
    },
    updated() {
      this.checkHeader()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
