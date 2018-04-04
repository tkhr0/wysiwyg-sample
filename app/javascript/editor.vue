<template>
  <div class="editor">
    <div class="content">
      <slot></slot>
    </div>

    <div>
      <editor-palette
        v-on:save="save"
        ></editor-palette>
    </div>
  </div>
</template>

<script>
import EditorPalette from './editor_palette'
import axios from 'axios'

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name=csrf-token]').getAttribute('content')


export default {
  components: {
    EditorPalette
  },

  props: [
    'savePath',
    'hiddenMethod'
  ],

  mounted: function () {
    this.$el.querySelector('.content')
      .contentEditable = true
  methods: {
    save: function () {
      const revertedContents = this._revertGadgets(document.querySelector('.content').innerHTML)

      axios.request({
        url: this.savePath,
        method: this.hiddenMethod,  // post or patch
        data: {
          draft: revertedContents
        }
      }).then((res) => {
        const data = res.data
        console.log(data)
      }).catch((res) => {
      })
    },

    // Vue でマウント状態のガジェットを
    // カスタムタグの状態に戻す
    _revertGadgets: function (text) {
    }
  }
}
</script>
