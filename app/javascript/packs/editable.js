import Vue from 'vue'
import Editor from '@/editor/editor'
import Gadgets from '@/gadgets/gadgets'

document.addEventListener('DOMContentLoaded', () => {
  const el = '#editable-content'

  Vue.config.ignoredElements
    = Object.keys(Gadgets.components).map(key => key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())

  new Vue({
    el: '#editable-content',
    components: {
      Editor
    }
  })
})
