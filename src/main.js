import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material/dist/vue-material.js'

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'orange',
  warn: 'red',
  background: 'white'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
