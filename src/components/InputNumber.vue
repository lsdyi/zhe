// the template of the component 
<template>
  <div>
    <input type="button" value="-" @click="increase(-1)"/>
    <input type="text"  :value="count" @input="changeInput">
    <input type="button" value="+" @click="increase(1)"/>
  </div>
</template>

// the behaviors of the component 
<script>
export default {
  props: ["count"],

  data: function () {
    return {
      // count: 0,
    }
  },

  methods: {
    increase(num) {
      // 不要在子组件中改变props的值
      // this.count = num + parseInt(this.count)
      this.$emit("num_change", this.count+num)
    },

    changeInput(e) {
      console.log(e)
      console.log(e.target.value)
      console.log(typeof e)
      console.log(typeof e.target.value)
      this.$emit("input", e.target.value-0)
    }
  }
};
</script>

// the appearance of the component 
<style>
</style>