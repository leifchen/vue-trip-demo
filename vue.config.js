const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
        .set('components', resolve('src/components'))
        .set('styles', resolve('src/assets/styles'))
  }
}