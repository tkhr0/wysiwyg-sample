<template>
  <div class="editor-pallete">
    <div class="editor">
      <button>hoge</button>
      <button @click="save">save</button>
      <button @click="myButton">MyButton</button>
      <button @click="countryList">CountryList</button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    save: function () {
      this.$emit('save')
    },

    myButton: function () {
      this._insertGadget('my-button', [
        {
          name: 'text',
          value: 'マイボタン'
        }
      ])
    },

    countryList: function () {
      this._insertGadget('country-list')
    },

    _insertGadget: function (name, attrs=[]) {
      const element = document.createElement(name)

      // アトリビュートを設定
      for (const attr of attrs) {
        element.setAttribute(attr['name'], attr['value'])
      }

      window.getSelection().getRangeAt(0).insertNode(element)
      this.$emit('addCustomTag')
    }
  }
}
</script>

<style lang="scss" scoped>

.editor-pallete {
  position: fixed;
  background-color: #42b983;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
