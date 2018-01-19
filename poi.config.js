module.exports = (options, req) => ({
  entry: './src/index.js',
  html: {
    title: 'Project Wyvern',
    description: 'Decentralized digital asset exchange protocol. Exchange any asset representable on the Ethereum blockchain, from virtual kittens to smart contracts. Autonomously governed by the Wyvern DAO.',
    template: 'src/index.ejs'
  }
})
