<template>
  <div class='container login'>
    <h1>Please, sign in</h1>
    <div class='row justify-content-lg-center'>
      <div class='col-sm-offset-3 col-sm-6 col-sm-offset-3 '>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" class="form-control" v-bind:class="{error}" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-bind:class="{error}" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary pull-right">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {users} from './../data/users.js'

  export default {
    props: {
      msg: String
    },
    data() {
      return {
        error: false
      }
    },
    methods: {
      handleSubmit({target}) {

        let user = users.filter(item =>
          item.login == target[0].value && item.pass === target[1].value)

        if (user[0]) {
          this.error = false
          this.$cookies.set('user_session', user[0].login, 60*60*24)
          this.$router.push('/')
        } else {
          this.error = true
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 60px;
  }

  .col-lg-6 {
    text-align: left;
  }

  .error {
    border: 2px solid red;
  }
</style>
