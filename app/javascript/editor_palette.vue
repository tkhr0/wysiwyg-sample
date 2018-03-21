<template>
  <div class="editor-pallete">
    <div class="editor">
      <button>hoge</button>
      <button>save</button>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      hoge: 'hoge'
    }
  },
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
