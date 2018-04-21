<template>
  <div>
    <a href="/">{{ text }}</a>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      default: 'TOPへ'
    }
  }
}

</script>

<style scoped>
a {
  color: blue;
}
</style>
