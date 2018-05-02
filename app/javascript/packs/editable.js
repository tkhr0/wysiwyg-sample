import Vue from 'vue'
import Editor from '@/editor/editor'
import Gadgets from '@/gadgets/gadgets'

document.addEventListener('DOMContentLoaded', () => {
  const el = '#editable-content'

  new Vue({
    el: '#editable-content',
    components: {
      Editor
    }
  })
})
