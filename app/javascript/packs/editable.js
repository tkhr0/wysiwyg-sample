import Vue from 'vue/dist/vue.esm.js'
import Editor from '../editor'

document.addEventListener('DOMContentLoaded', () => {
  const el = '#editable-content'

  new Vue({
    el: '#editable-content',
    components: {
      Editor
    }
  })
})
