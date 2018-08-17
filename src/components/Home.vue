<template>
  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-lg-12">
        <h1>Library</h1>
        <app-search
          @setSearch="setSearch"
        ></app-search>
        <p class="alert alert-danger" v-if="list.length === 0">Book not found</p>
        <book-list
          :list="list"
          @handleEdit="handleEdit"
          @handleDelete="handleDelete"
        ></book-list>
      </div>
    </div>
    <app-pagination
      :perPage="perPage"
      :currentPage="currentPage"
      @prevPage="prevPage"
      @nextPage="nextPage"
      @setPage="setPage"
    ></app-pagination>
    <app-modal
      :record="selectedRecord"
      @confirm='deleteUser'
      @cancel="cancelDelete"></app-modal>
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  import Pagination from './Pagination.vue'
  import BookList from './BookList.vue'
  import Search from './Search.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      appModal: Modal,
      appPagination: Pagination,
      bookList: BookList,
      appSearch: Search
    },
    computed: {
      ...mapGetters(['getFilteredList']),
      list() {
        return this.getFilteredList
          .slice(this.currentPage * this.perPage, this.currentPage*this.perPage + this.perPage)
      }
    },
    data() {
      return {
        perPage: 3,
        selectedRecord: {},
        currentPage: 0
      }
    },
    methods: {
      ...mapActions(['search', 'delete']),
      handleEdit(id) {
        this.$router.push(`/edit/${id}`)
      },
      handleDelete(id) {
        this.selectedRecord = this.list.filter(i => i.id === id)[0]
      },
      cancelDelete() {
        this.selectedRecord = {};
      },
      deleteUser() {
        this.delete(this.selectedRecord.id)
        this.selectedRecord = {};
      },
      prevPage() {
        this.currentPage--
      },
      nextPage() {
        this.currentPage++
      },
      setPage(page) {
        this.currentPage = page
      },
      setSearch(data) {
        this.search(data)
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin-bottom: 40px;
  }

</style>
