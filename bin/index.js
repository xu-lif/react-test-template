#!/usr/bin/env node
const program = require('commander')
const webpackBuild = require('../build/webpack.js')
// const command = new Command()

program
.version('1.0.0')
.description('webpack build')
.command('webpack')
.action((value) => {
  webpackBuild()
})

program.parse(process.argv)
