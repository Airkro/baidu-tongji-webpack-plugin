# baidu-tongji-webpack-plugin

Add `baidu tongji` to your project.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[npm-url]: https://www.npmjs.com/package/baidu-tongji-webpack-plugin
[npm-badge]: https://img.shields.io/npm/v/baidu-tongji-webpack-plugin.svg?style=flat-square&logo=npm
[github-url]: https://github.com/airkro/baidu-tongji-webpack-plugin
[github-badge]: https://img.shields.io/npm/l/baidu-tongji-webpack-plugin.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/baidu-tongji-webpack-plugin.svg?style=flat-square&colorB=green&logo=node.js

## Installation

```bash
npm install baidu-tongji-webpack-plugin --save-dev
```

## Usage

```js
// example: webpack.config.js
const BaiduTongJiWebpackPlugin = require('baidu-tongji-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new BaiduTongJiWebpackPlugin('xxxxxxxxxxxxxxxxxxxxxxx')
  ]
};
```
