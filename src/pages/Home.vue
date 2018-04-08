<template>
<div id="home" class="home">
<b-container>
<b-row class="top-logo">
  <b-col>
    <img class="logo" src="/img/logo.svg" height="500" width="500">
  </b-col>
  <b-col class="header-all">
    <div class="header-text">Digital Asset Exchange Protocol</div>
    <div>Wyvern is a trustless peer-to-peer digital asset exchange protocol. Using Wyvern, users around the world can buy, sell, and trade their digital assets instantly without exposing themselves to any counterparty risk.</div>
    <br />
    <div>Wyvern is representation-agnostic: you can buy or sell any asset representable on the Ethereum blockchain - and permissionless: you can integrate Wyvern into your application freely without anyone's permission.</div>
    <div class="header-buttons">
      <b-button target="_blank" class="header-button">Learn More</b-button>
      <b-button target="_blank" href="https://docs.projectwyvern.com" class="header-button">Build on Wyvern</b-button>
    </div>
  </b-col>
</b-row>
</b-container>
<div class="why-wyvern">
<b-container>
  <b-row class="why-wyvern-header">
    <b-col>
      Why Wyvern?
    </b-col>
  </b-row>
  <b-row>
    <b-col class="why-wyvern-col">
      <div class="imgc"><img src="/img/peer-to-peer.png" class="img" /></div>
      <div class="why-wyvern-col-title">Peer-to-Peer Exchange</div>
      <div class="why-wyvern-col-text">
      Trade any kind of digital asset — rare virtual kittens, ENS names, virtual land rights, even smart contracts — with anyone in the world. All you need to use the Wyvern Protocol is an internet connection.
      </div>
    </b-col>
    <b-col class="why-wyvern-col">
      <div class="imgc"><img src="/img/executives.png" class="img" /></div>
      <div class="why-wyvern-col-title">No Rent-Seeking Intermediaries</div>
      <div class="why-wyvern-col-text">
      Trades through the Wyvern Protocol are settled over the Ethereum ledger, no Paypal fee required. You never need to trust us or anyone else with your funds or assets. The complete protocol implementation is open-source and publicly auditable.
      </div>
    </b-col>
    <b-col class="why-wyvern-col">
      <div class="imgc"><img src="/img/coding.png" class="img" /></div>
      <div class="why-wyvern-col-title">Automated Commerce</div>
      <div class="why-wyvern-col-text">
      Pick whichever method of sale you prefer: fixed price, Dutch auction, or something more exotic. Interface with the Exchange through a website, a mobile application, or a custom script. Utilize existing asset liquidity pools or start your own.
      </div>
    </b-col>
  </b-row>
</b-container>
</div>
<div class="wyvern-exchange">
<b-container>
  <b-row>
    <b-col>
      <div class="wyvern-exchange-header">Wyvern Exchange — Powered by Wyvern</div>
      <div class="wyvern-exchange-subheader">
      These are real orders, embedded directly into this website. If you have Metamask, you can match them!
      </div>
    </b-col>
  </b-row>
  <b-row>
  </b-row>
  <b-row>
    <b-col class="wyvern-exchange-footer">
      <b-button target="_blank" href="https://exchange.projectwyvern.com" class="wyvern-exchange-footer-button">Visit the Wyvern Exchange</b-button>
    </b-col>
  </b-row>
</b-container>
</div>
<div class="representation-agnostic">
<b-container>
  <b-row>
    <b-col class="representation-agnostic-header">
      Trade Any Asset
    </b-col>
  </b-row>
  <b-row>
    <b-col>
    <div class="representation-agnostic-subheader">Representation-Agnostic</div>
    <div>
    Wyvern does not require a particular standard such as ERC721. If you can hold an asset in an Ethereum account and send it with an Ethereum transaction, you can buy, sell, or auction it using the full functionality of the Wyvern Protocol. You can still use popular standards or write your own interface - Wyvern will support your asset in either case.
    </div>
    <br />
    <div class="representation-agnostic-buttons">
      <b-button target="_blank" href="https://docs.projectwyvern.com" class="representation-agnostic-button-center">View Documentation</b-button>
    </div>
    </b-col>
    <b-col>
    <div class="representation-agnostic-subheader">Example Assets</div>
    <b-button class="representation-agnostic-button" target="_blank">ERC721 CryptoCollectibles</b-button>
    <b-button class="representation-agnostic-button" target="_blank">ENS Names</b-button>
    <b-button class="representation-agnostic-button" target="_blank">Smart Contracts</b-button>
    <b-button class="representation-agnostic-button" target="_blank">Tokenized Securities</b-button>
    </b-col>
  </b-row>
</b-container> 
</div>
<div class="configurable">
<b-container>
  <b-row>
    <b-col class="configurable-header">
      Configurable & Extensible
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <div class="configurable-subheader">
      Buy & sell-side Dutch auctions
      </div>
    </b-col>
    <b-col>
      <div class="configurable-subheader">
      Atomic multi-asset orders
      </div>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <div class="configurable-subheader">
      Transact with any ERC20 token
      </div>
    </b-col>
    <b-col>
      <div class="configurable-subheader">
      Automated trading
      </div>
    </b-col>
  </b-row>
</b-container>
</div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  methods: {
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  color: #444;
}

.top-logo {
  margin-bottom: 2em;
}

.logo {
  float: right;
}

.img {
  height: 300px;
  width: 300px;
}

.imgc {
  width: 300px;
  margin: 0 auto;
  margin-top: -5em;
  margin-bottom: -3em;
}

.textc {
}

.textc-title {
  padding-bottom: 1em;
  font-weight: bold;
}

.header-all {
  font-size: 1.2em;
}

.header-text {
  font-size: 1.5em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 3em;
  padding-bottom: 1em;
}

.header-buttons {
  padding-top: 2em;
  margin: 0 auto;
  width: 300px;
}

.header-button {
  background: #444;
}

.why-wyvern {
  background: #444;
  width: 100%;
  color: #fff;
}

.why-wyvern-header {
  font-size: 2em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.why-wyvern-col {
  background: #fff;
  color: #444;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  border-radius: 1em;
}

.why-wyvern-col-title {
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
}

.why-wyvern-col-text {
  margin-top: 1em;
  margin-bottom: 1em;
}

.wyvern-exchange-header {
  font-size: 2em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.wyvern-exchange-subheader {
  font-size: 1em;
  text-align: center;
  padding-bottom: 1em;
}

.wyvern-exchange-footer {
  text-align: center;
  margin-bottom: 2em;
}

.wyvern-exchange-footer-button {
  margin: 0 auto;
  background: #444;
}

.representation-agnostic {
  background: #444;
  width: 100%;
  color: #fff;
  padding-bottom: 2em;
}

.representation-agnostic-header {
  font-size: 2em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.representation-agnostic-subheader {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1em;
}

.representation-agnostic-buttons {
  text-align: center;
}

.representation-agnostic-button-center {
  background: #fff;
  color: #444;
}

.representation-agnostic-button {
  margin: 0 auto;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  width: 300px;
  display: block;
  background: #fff;
  color: #444;
}

.configurable-header {
  font-size: 2em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.configurable-subheader {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1em;
}
</style>
