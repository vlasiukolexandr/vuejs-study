<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-12">
        <h1>Library</h1>
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 search">
            <input class="form-control mr-sm-2" type="search" v-model="search" placeholder="Search" aria-label="Search">
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <button @click="handleClearSearch" class="btn btn-success">Search</button>
          </div>
        </div>
        <p class="alert alert-danger" v-if="list.length === 0">Book not found</p>
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
            <td>{{ item.date | formatDate }}</td>
            <td class="actions">
              <button class="btn btn-success" @click="handleEdit(item.id)">edit</button>
              <button class="btn btn-danger" @click="handleDelete(item.id)" data-toggle="modal"
                      data-target="#exampleModalCenter">delete
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <button class="btn btn-link margin" v-show="loadMoreVisible" @click="handleLoadMore">more</button>
      </div>
    </div>
    <app-modal
      :record="selectedRecord"
      @confirm='deleteUser'
      @cancel="cancelDelete"></app-modal>
  </div>
</template>

<script>
  import Modal from './Modal.vue'

  export default {
    components: {
      appModal: Modal
    },
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
        count: 3,
        selectedRecord: {}
      }
    },
    methods: {
      handleEdit(id) {
        this.$router.push(`/edit/${id}`)
      },
      handleDelete(id) {
        this.selectedRecord = this.list.filter(i => i.id === id)[0]
      },
      handleClearSearch() {
        this.search = ''
      },
      handleLoadMore() {
        this.count += 3
      },
      cancelDelete() {
        this.selectedRecord = {};
      },
      deleteUser() {
        this.$store.dispatch('delete', this.selectedRecord.id)
        this.selectedRecord = {};
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    margin-bottom: 50px;
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
