'use strict';

// eslint-disable-next-line import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { validate } = require('schema-utils');

const schema = {
  type: 'string',
  minlength: 1,
};

const name = 'BaiduTongJiWebpackPlugin';

module.exports = class BaiduTongJiWebpackPlugin {
  constructor(id) {
    validate(schema, id, { name });
    this.id = id;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(name, (compilation) => {
      const hooks = HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups;
      hooks.tapAsync(name, (htmlPluginData, callback) => {
        const { headTags } = htmlPluginData;

        // eslint-disable-next-line no-param-reassign
        htmlPluginData.headTags = [
          {
            tagName: 'script',
            innerHTML: 'var _hmt = _hmt || [];',
            attributes: {
              async: true,
            },
            meta: { plugin: name },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              integrity: null,
              src: `//hm.baidu.com/hm.js?${this.id}`,
            },
            meta: { plugin: name },
          },
          ...headTags,
        ];

        return callback(null, htmlPluginData);
      });
    });
  }
};
