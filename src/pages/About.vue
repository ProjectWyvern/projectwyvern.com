<template>
<div class="about">
The Wyvern Exchange is a decentralized digital item exchange, built by a team of contributors from around the world and governed autonomously by the Wyvern DAO. Exchange users can buy, sell, auction, and trade secret information, scarce collectibles, smart contracts themselves and more without trusting each other or the Exchange itself.
<br /><br />
The Exchange currently runs on the distributed ledger <a target="_blank" href="https://ethereum.org">Ethereum</a>. Support for other platforms may be added in the future.
<br /><br />
To learn more about the rationale behind the project, please read <a target="_blank" href="https://github.com/ProjectWyvern/wyvern-protocol/blob/master/build/whitepaper.pdf">the whitepaper</a>.
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style scoped>
.about {
  max-width: 800px;
  padding: 2em;
  margin: 0 auto;
  font-size: 1.2em;
  background: #000;
  color: #fff;
}

a:hover {
  text-decoration: underline;
}

a {
  font-weight: bold;
}

.tab {
  margin-left: 1em;
}
</style>
