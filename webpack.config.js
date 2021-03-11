const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

const dist = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  experiments: {
    // outputModule: true,
    // topLevelAwait: true,
    asyncWebAssembly: true
    // syncWebAssembly: true, // like webpack 4
    // layers: true
    // lazyCompilation: true
  },
  entry: {
    index: './js/index.js'
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  devServer: {
    contentBase: dist
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, 'static')
    ]),

    new WasmPackPlugin({
      crateDirectory: __dirname
    })
  ]
}
