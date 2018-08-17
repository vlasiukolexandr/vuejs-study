<template>
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 search">
      <input class="form-control mr-sm-2" type="search" :value="search" @input="setSearchString($event)" placeholder="Search" aria-label="Search">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['search'],
    methods: {
      setSearchString(event) {
        this.$emit('setSearch', event.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    margin-bottom: 50px;
  }
</style>
