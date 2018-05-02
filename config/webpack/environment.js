const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')

environment.config.merge(require('./custom'))
environment.loaders.append('vue', vue)

module.exports = environment
