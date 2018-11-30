const { environment } = require('@rails/webpacker')

// Bootstrap 3 has a dependency over jQuery:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

environment.loaders.append('ejs', {
  test: /\.ejs$/,
  loader: 'ejs-compiled-loader'
})

module.exports = environment
