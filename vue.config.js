const path = require('path')
const indexData = require('./mock/index.json')
const cityData = require('./mock/city.json')
const detailData = require('./mock/detail.json')

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
      }),
      app.get('/api/city', (req, res) => {
        res.json(cityData)
      }),
      app.get('/api/detail', (req, res) => {
        res.json(detailData)
      })
    }
  }
}