//配置打包项的公共路径
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hello-vue/dist/'
    : '/'
}