const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.entry.styles = path.resolve(__dirname, '../src/index.css')
  const cssRule = defaultConfig.module.rules.find(r => r.test.toString() === /\.css$/.toString())
  const postCssUse = cssRule.use.find(u => u.loader && u.loader.indexOf('postcss-loader') > -1)
  delete postCssUse.options

  const cssModuleRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.module\.css$/.toString()
  )
  const postCssModuleUse = cssModuleRule.use.find(
    u => u.loader && u.loader.indexOf('postcss-loader') > -1
  )
  delete postCssModuleUse.options

  defaultConfig.resolve.alias = {
    components: path.join(path.resolve(__dirname, '../'), 'src', 'components'),
    containers: path.join(path.resolve(__dirname, '../'), 'src', 'containers'),
    hoc: path.join(path.resolve(__dirname, '../'), 'src', 'hoc'),
    style: path.join(path.resolve(__dirname, '../'), 'src', 'style'),
    libs: path.join(path.resolve(__dirname, '../'), 'src', 'libs'),
    assets: path.join(path.resolve(__dirname, '../'), 'src', 'assets'),
    vendor: path.join(path.resolve(__dirname, '../'), 'src', 'vendor'),
  }

  // TODO: Check if we need to delete that
  defaultConfig.externals = {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  }

  return defaultConfig
}
