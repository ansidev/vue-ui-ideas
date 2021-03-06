const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  title: 'Vue UI Component Idea from ansidev',
  sections: [
    {
      name: 'Title',
      components: 'src/components/title/*.vue'
    },
  ],
  styleguideDir: 'docs',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}
