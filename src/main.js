// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)

Vue.config.productionTip = false

import Card from "./components/Card.vue"

Vue.component("Card", Card)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
