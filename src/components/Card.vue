<template>
  <div class="card-wrapper">
    <div class="card-header"><slot name="header"></slot></div>
    <div class="card-body"><slot></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.card-wrapper {
  border: 1px solid #ccc;
  width: 300px;
}

.card-header {
  border-bottom: 1px solid #ccc;
}
</style>