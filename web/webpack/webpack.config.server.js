const serverConfiguration = require('universal-webpack').serverConfiguration,
      settings            = require('./universal-webpack-settings'),
      configuration       = require('./webpack.config');

module.exports = serverConfiguration(configuration, settings);

