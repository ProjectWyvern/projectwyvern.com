module.exports = (options, req) => ({
  entry: './src/index.js',
  html: {
    title: 'Project Wyvern',
    description: 'Autonomouly governed decentralized digital item exchange',
    template: 'src/index.ejs'
  }
})
