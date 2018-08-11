<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-10">
        <h1>Library page</h1>
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search" aria-label="Search">
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <button @click="handleClearSearch" class="btn btn-success">clear search</button>
          </div>
        </div>
        <div class="buttons">
          <button class="btn btn-primary" @click="handleCreate">Create</button>
        </div>
        <p class="alert alert-danger" v-if="list.length === 0">Not found</p>
        <table class="table">
          <thead>
          <tr>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">ISBN</th>
            <th scope="col" class="text-center">Author</th>
            <th scope="col" class="text-center">Title</th>
            <th scope="col" class="text-center">Description</th>
            <th scope="col" class="text-center">Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in list" v-bind:key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.isbn }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.date }}</td>
            <td class="actions">
              <button class="btn btn-success" @click="handleEdit(item.id)">edit</button>
              <button class="btn btn-danger" @click="handleDelete(item.id)">delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      <button class="btn btn-link margin" v-show="loadMoreVisible" @click="handleLoadMore">more</button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    computed: {
      list() {
        return this.$store.getters.getList.filter((i, index) => (~i.title.toLowerCase().indexOf(this.search.toLowerCase())) && (index < this.count))
      },
      loadMoreVisible() {
        return this.count < this.$store.getters.getList.length
      }
    },
    data() {
      return {
        search: '',
        count: 3
      }
    },
    methods: {
      handleEdit(id) {
        this.$router.push(`/edit/${id}`)
      },
      handleDelete(id) {
        this.$store.dispatch('delete', id)
      },
      handleCreate() {
        this.$router.push(`/create`)
      },
      handleClearSearch() {
        this.search = ''
      },
      handleLoadMore() {
        this.count += 5
      }
    }
  }
</script>

<style scoped lang="scss">
  .col-lg-6 {
    text-align: left;
  }

  .alert-danger, .list-group-item, .buttons {
    margin-top: 20px;
    text-align: left;
  }

  .margin {
    margin-top: 20px;
  }

  .container {
    margin-bottom: 40px;
  }

  .actions {
    display: flex;

    .btn {
      margin: 2px;
    }
  }
</style>
