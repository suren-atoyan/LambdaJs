module.exports = {
  entry: './init.js',

  watch: true,

  devtool: 'inline-source-map',

  output: {
    filename: 'lambda.build.js'
  }
}