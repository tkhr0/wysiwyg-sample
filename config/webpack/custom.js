module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': require('path').resolve(__dirname, '../../app/javascript')
    }
  }
}

console.log(module.exports)
