<template>
  <div class="tab-wrapper">
    <div class="tab-header"></div>
    <div class="tab-body">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
import TabItem from "./TabItem"
export default {
  components: {
    TabItem,
  }
}
</script>

<style>
.tab-wrapper {
  border: 1px  solid #ccc;
  padding: 10px 20px;
  width: 400px;
}

.tab-header {
  border-bottom: 1px solid #ccc;
  height: 50px;
}
</style>