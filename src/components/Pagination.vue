<template>
    <ul class="pagination">
      <li class="page-item" v-show="currentPage != 0"><a class="page-link" href="#" @click.prevent="getPrevPage">Previous</a></li>

      <li class="page-item"
          v-for="item in maxPagesArray()
          .splice((currentPage - 1 < 0) ? 0 : (currentPage - 1),
          (currentPage - 1 < 0) ? (currentPage + 2) : (currentPage + 2))"
          :class="{ active: currentPage == item}">
        <a class="page-link" href="#" @click.prevent="setCurrPage(item)">{{ item+1 }}</a>
      </li>

      <li class="page-item" v-show="currentPage != maxPages()"><a class="page-link" href="#" @click.prevent="getNextPage">Next</a></li>
  </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      props: ['perPage', 'currentPage', 'search'],
      computed: {
        ...mapGetters(['getFilteredList'])
      },
      methods: {
        setCurrPage(page) {
           this.$emit('setPage', page)
        },
        getPrevPage() {
          this.$emit('prevPage')
        },
        getNextPage() {
          this.$emit('nextPage')
        },
        maxPages() {
          return (Math.ceil(this.getFilteredList.length / this.perPage)-1)
        },
        maxPagesArray() {
          let array = [];
          for(let i=0; i< this.maxPages()+1; i++)
            array.push(i)

          return array
        }
      }
    }
</script>

<style scoped>

</style>
