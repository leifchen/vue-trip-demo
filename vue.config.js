const path = require('path')
const indexData = require('./mock/index.json')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
        .set('components', resolve('src/components'))
        .set('styles', resolve('src/assets/styles'))
  },
  devServer: {
    before(app) {
      app.get('/api/index', (req, res) => {
        res.json(indexData)
      })
    }
  }
}