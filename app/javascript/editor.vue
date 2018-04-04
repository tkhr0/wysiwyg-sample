<template>
  <div class="editor">
    <div class="content">
      <slot></slot>
    </div>

    <div>
      <editor-palette
        v-on:save="save"
        v-on:addCustomTag="addCustomTag"
        ></editor-palette>
    </div>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm.js'
import EditorPalette from './editor_palette'
import axios from 'axios'
import Gadgets from 'editor_gadgets'
import revertGadgets from 'revert_gadgets'

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name=csrf-token]').getAttribute('content')


export default {
  components: {
    EditorPalette
  },

  props: [
    'savePath',
    'hiddenMethod'
  ],

  data: function () {
    return {
      gadgetVm: null,
      gadgetVmConfig: {
        el: '.content',
        mixins: [Gadgets]
      }
    }
  },

  mounted: function () {
    this.$el.querySelector('.content').contentEditable = true

    this.gadgetVm = new Vue(this.gadgetVmConfig)
  },

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

    addCustomTag: function () {
      this._reloadGadget()
    },

    _reloadGadget: function () {
      this.gadgetVm.$destroy()
      this.gadgetVm = new Vue(this.gadgetVmConfig)
    },

    // Vue でマウント状態のガジェットを
    // カスタムタグの状態に戻す
    _revertGadgets: function (text) {
      return revertGadgets(text)
    }
  }
}
</script>
