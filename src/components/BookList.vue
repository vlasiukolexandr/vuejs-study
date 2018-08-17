<template>
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
        <button class="btn btn-success" @click="handleEditBtn(item.id)">edit</button>
        <button class="btn btn-danger" @click="handleDeleteBtn(item.id)" data-toggle="modal"
                data-target="#exampleModalCenter">delete
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: ['list'],
    methods: {
      handleEditBtn(id) {
        this.$emit('handleEdit', id)
      },
      handleDeleteBtn(id){
        this.$emit('handleDelete', id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .actions {
    display: flex;

    .btn {
      margin: 2px;
    }
  }
</style>
