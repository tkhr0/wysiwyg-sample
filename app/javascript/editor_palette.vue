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

function _getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function _getRandomString() {
  const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const stringLength = 6

  let string = ''
  for (let i=0; i < stringLength; i++) {
    const idx = _getRandomInt(0, seed.length)
    string += seed[idx]
  }

  return string
}

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

      // set ref
      // props を復元するときに使う
      element.setAttribute('ref', _getRandomString())

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
