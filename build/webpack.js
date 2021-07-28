const path = require('path')
const webpack = require('webpack')
const configPath = path.join(process.cwd(), 'webpack.config.js') 
const webpackConfig = require(configPath)

const webpackBuild = () => {
  console.log(webpackConfig)
  const compiler = webpack(webpackConfig)
  compiler.run((err, stats) => {
    console.log(stats)
  })
}

module.exports =  webpackBuild
