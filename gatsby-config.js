const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Gromsby Demo',
  },
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}

