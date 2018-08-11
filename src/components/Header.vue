<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Study Vue.js</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <div class="nav navbar-nav navbar-right user-block">
          <button @click="logout()" class="btn btn-link">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$cookies.set('user_session', '')
        this.$router.push('login')
      }
    }
  }
</script>

<style scoped>

  .user-block {
    display: flex;
    height: 50px;
  }

</style>
