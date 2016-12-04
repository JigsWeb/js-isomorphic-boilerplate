const clientConfiguration = require('universal-webpack').clientConfiguration,
      settings            = require('./universal-webpack-settings'),
      configuration       = require('./webpack.config');

module.exports = clientConfiguration(configuration, settings);
