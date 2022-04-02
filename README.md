# git-revision-html-webpack-plugin

[![npm](https://img.shields.io/npm/v/git-revision-html-webpack-plugin.svg)](https://www.npmjs.com/package/git-revision-html-webpack-plugin)

Webpack plugin can generate the latest git commit hash within html meta tag, which is helpful when checking whether the deployment meets the expectations. It requires [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

## Installation

``` sh
npm install git-revision-html-webpack-plugin --save-dev
```

## Usage

``` js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlPlugin(),
    new GitRevisionPlugin()
  ]
}
```

Output:

``` html
<html>
    <head>
        <meta name="git-revision" content="eabf661">
    </head>
</html>
```
