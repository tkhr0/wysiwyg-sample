<template>
  <div class="editor">
    <div class="content">
      <slot></slot>
    </div>

    <div>
      <editor-palette></editor-palette>
    </div>
  </div>
</template>

<script>
import EditorPalette from './editor_palette'

export default {
  components: {
    EditorPalette
  },

  mounted: function () {
    this.$el.querySelector('.content')
      .contentEditable = true
  }
}
</script>
