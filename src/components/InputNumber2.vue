<template>
  <div>
    <input type="button" value="-" @click="increase(-1)">
    <input type="text" :value="value" @input="changeInput">
    <input type="button" value="+" @click="increase(1)">
  </div>

</template>

<script>
export default {
  props: ["value"],
  
  data: function() {
    return {
      
    }
  },

  methods: {
    increase(num) {
      this.$emit("input", this.value+num)
    },
    
    changeInput(e) {
      this.$emit("input", e.target.value-0)
    }
  }
}
</script>

<style>

</style>