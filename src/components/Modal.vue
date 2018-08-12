<template>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Book Deleting</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Do you want delete <strong>{{record.title}} ({{ record.author}})</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onCancel()">Close</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" @click="onConfirm()">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["record"],
    methods: {
      onConfirm() {
        this.$emit("confirm");
      },
      onCancel() {
        this.$emit("cancel");
      }
    }
  }
</script>

<style scoped>

</style>
