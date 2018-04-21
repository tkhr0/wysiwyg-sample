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
      window.getSelection().getRangeAt(0).insertNode(
        document.createElement('my-button')
      )
      this.$emit('addCustomTag')
    },

    countryList: function () {
      this._insertGadget('country-list')
    },

    _insertGadget: function (name) {
      window.getSelection().getRangeAt(0).insertNode(
        document.createElement(name)
      )
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
