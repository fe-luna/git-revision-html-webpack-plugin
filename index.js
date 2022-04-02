const childProcess = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NAME = 'GitRevisionPluginHtmlWebpack'

class GitRevisionPluginHtmlWebpack {
  apply(compiler) {
    compiler.hooks.compilation.tap(NAME, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(NAME, (data, cb) => {
        const hash = childProcess.execSync('git rev-parse --short HEAD', { encoding: 'utf8' })
        data.assetTags.meta.push(
          {
            tagName: 'meta',
            voidTag: true,
            meta: { plugin: 'git-revision-html-webpack-plugin' },
            attributes: { name: 'git-revision', content: hash.trim() }
          }
        )

        cb(null, data)
      })
    })
  }
}

module.exports = GitRevisionPluginHtmlWebpack
