module.exports = {
    babel: {
      plugins: [['@babel/plugin-syntax-import-attributes', { deprecatedAssertSyntax: true }]],
    },
    webpack: {
      configure: webpackConfig => {
        // Ignore warnings about source maps
        webpackConfig.ignoreWarnings = [/Failed to parse source map/];
  
        return webpackConfig;
      },
    },
  };