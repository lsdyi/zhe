<template>
  <div id="app">
    <inputNumber 
    :count="count"
    @num_change="num_change"
    @input="handleInput"
    />
    <el-input-number/>
    <InputNumber2 v-model="count_begin" />
    <br>
    <br>
    <br>
    <card>
      <h2 slot="header">卡片的头部</h2>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>

    </card>
    <br>
    <card>
      <h2 slot="header">卡片的头部</h2>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>
      <h1>卡片内容1</h1>

    </card>

    <br>
    <Foo />
    <Bar />
    <br>
    <button @click="currentTabComponent = 'Foo'">Foo组件</button>
    <button @click="currentTabComponent = 'bar'">Bar组件</button>
    <!-- <keep-alive> -->
      <component v-bind:is="currentTabComponent"></component>
      
    <!-- </keep-alive> -->
    <br>
    <Component1 is-value="button" />
    <br>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs> -->

    <br>
    <Tab>
      <TabItem></TabItem>
    </Tab>
  </div>
 

</template>

<script>

import inputNumber from "./components/InputNumber"
import ElInputNumber from "./components/ElInputNumber"
import InputNumber2 from "./components/InputNumber2"

// 同步加载组件
// import Foo from "./components/Foo.vue"
// import Bar from "./components/Bar.vue"

// 异步加载组件
const Foo = () => import("./components/Foo")
const Bar = () => import("./components/Bar")
const Tab = () => import("./components/Tab")
import TabItem from "./components/TabItem"
import Component1 from "./components/Component1.vue"
export default {
  name: "App",
  components: {
    inputNumber,
    ElInputNumber,
    InputNumber2,
    Foo,
    Bar,
    Component1,
    Tab,
    TabItem
  },

  data: function() {
    return {
      count: 9,
      count_begin: 10,
      currentTabComponent: "Foo"
    }
  },

  methods: {
    handleInput(e) {
      this.count = e
    },
    num_change(request) {
      console.log("hhh Zinger Young is right")
      console.log(typeof request)
      this.count = request
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
