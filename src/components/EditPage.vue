<template>
  <div class='container'>
    <h1>{{ this.$route.params.id ? 'Edit record' : 'Create a record' }}</h1>
    <div class='row justify-content-lg-center'>
      <div class='col-xs-offset-3 col-xs-6'>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="isbn" class="pull-left">ISBN </label>
            <input id="isbn" v-model="item.isbn" type="text" class="form-control" placeholder="Enter ISBN">
          </div>
          <div class="form-group">
            <label for="title" class="pull-left">Title</label>
            <input id="title" v-model="item.title" type="text" class="form-control" required placeholder="Enter Title">
          </div>
          <div class="form-group">
            <label for="author" class="pull-left">Author</label>
            <select id="author" v-model="item.author" class="form-control">
              <option v-for="author in authors" v-bind:key="author" v-bind:value="author">{{ author }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="description" class="pull-left">Description</label>
            <textarea id="description" v-model="item.description" type="text" class="form-control"
                      placeholder="Enter Description "></textarea>
          </div>
          <button type="submit" class="btn btn-success pull-right">{{ this.$route.params.id ? 'Edit' : 'Add' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditPage',
    props: {
      msg: String
    },
    data() {
      return {
        item: {},
        authors: []
      }
    },
    beforeRouteLeave(to, from, next) {
      this.item = []
      next()
    },
    methods: {
      handleSubmit() {
        if (this.$route.params.id) {
          this.$store.dispatch('edit', this.item)
        } else {
          this.$store.dispatch('add', this.item)
        }
        this.$router.push('/')
      }
    },
    created() {
      if (this.$route.params.id)
        this.item = this.$store.getters.getList.find(i => i.id == this.$route.params.id)

      this.authors = this.$store.getters.getAuthors
    }
  }
</script>

<style scoped>

</style>
