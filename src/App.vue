<template>
<div class="app-container">
<div class="header">
<b-navbar toggleable="md" type="dark" class="header-inner">
<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
<router-link to="/">
<b-navbar-brand>
<img class="thumb" src="/img/thumb.png" />
<div class="header-title">
Wyvern Protocol
</div>
</b-navbar-brand>
</router-link>
<b-collapse is-nav id="nav_collapse">
<b-navbar-nav class="ml-auto">
<router-link class="header-link" to="/developers">Developers</router-link>
<router-link class="header-link" to="/about">About</router-link>
<router-link class="header-link" to="/comparision">Comparision</router-link>
<a target="_blank" class="header-link" href="https://medium.com/project-wyvern">Blog</a>
<a target="_blank" class="header-link" href="https://wiki.projectwyvern.com">Wiki</a>
<a target="_blank" class="header-link" href="https://exchange.projectwyvern.com">Exchange</a>
</b-navbar-nav>
</b-collapse>
</b-navbar>
</div>
<div class="content">
<router-view>
</router-view>
</div>
<div class="footer">
<div class="footer-inner">
<div class="footer-top">
<div class="footer-left">
<img class="footer-thumb" src="/img/thumb-large.png" />
<div class="footer-left-bottom">
Wyvern Protocol
</div>
</div>
<div class="footer-right">
<div class="footer-right-left">
<div class="footer-header">Community</div>
<a target="_blank" class="footer-link" href="https://medium.com/project-wyvern">Blog</a>
<a target="_blank" class="footer-link" href="https://discord.gg/dZZdybs">Discord</a>
<a target="_blank" class="footer-link" href="https://twitter.com/wyvernprotocol">Twitter</a>
<a target="_blank" class="footer-link" href="https://www.reddit.com/r/projectwyvern/">Reddit</a>
</div>
<div class="footer-right-right">
<div class="footer-header">Resources</div>
<a target="_blank" class="footer-link" href="https://github.com/ProjectWyvern/wyvern-protocol/blob/master/build/whitepaper.pdf">Whitepaper</a>
<a target="_blank" class="footer-link" href="https://wiki.projectwyvern.com">Wiki</a>
<a target="_blank" class="footer-link" href="https://github.com/projectwyvern">GitHub</a>
<a target="_blank" class="footer-link" href="https://exchange.projectwyvern.com">Exchange</a>
<a target="_blank" class="footer-link" href="https://dao.projectwyvern.com">DAO</a>
<a target="_blank" class="footer-link" href="https://token.projectwyvern.com">Token</a>
</div>
</div>
</div>
<div class="footer-bottom">
<div class="footer-bottom-inner">© 2017-2018 Wyvern Protocol Developers</div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: '',
    titleTemplate: 'Project Wyvern • %s'
  }
}
</script>

<style>
html, body {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #fff; 
}

::-webkit-scrollbar-thumb {
  background: #444; 
}

::-webkit-scrollbar-thumb:hover {
  background: #aaa; 
}

a {
  text-decoration: none;
}

a:hover {
  color: #777;
  text-decoration: none;
}

a:visited {
  color: #fff;
}

.app-container {
  height: 100%;
  width: 100%;
}

.header {
  height: 100px;
  width: 100%;
  color: #fff;
  background: #444;
}

.header a {
  color: #fff;
}

.header a:hover {
  color: #aaa;
}

.header-inner {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -1em;
  top: -0.5em;
}

.header-link {
  margin-left: 1em;
}

.header-title {
  height: 100px;
  line-height: 100px;
  display: inline-block;
  font-size: 1.5em;
  font-variant: small-caps;
  font-weight: bold;
}

.thumb {
  margin-left: 20px;
  position: relative;
  top: -8px;
  margin-right: 20px;
  display: inline-block;
}

.content {
  width: 100%;
  min-height: calc(100% - 400px);
  background: #fff;
}

.footer {
  height: 300px;
  width: 100%;
  color: #fff;
  background: #444;
}

.footer a {
  color: #fff;
}

.footer a:hover {
  color: #aaa;
}

.footer-inner {
  max-width: 800px;
  margin: 0 auto;
  display: block;
}

.footer-top {
  display: block;
  height: 250px;
}

.footer-thumb {
  position: relative;
  top: 10px;
  left: 50px;
}

.footer-left {
  width: 220px;
  height: 250px;
  padding-left: 1em;
  padding-top: 1em;
  display: inline-block;
}

.footer-left-bottom {
  position: relative;
  top: 2em;
  text-align: center;
  line-height: 2em;
}

.footer-left-bottom-top {
  font-size: 2em;
  margin-bottom: 0.3em;
  font-variant: small-caps;
}

.footer-right {
  margin-top: 1em;
  float: right;
}

.footer-right-left {
  width: 250px;
  height: 250px;
  display: inline-block;
}

.footer-right-right {
  float: right;
  width: 250px;
  height: 200px;
  display: inline-block;
}

.footer-right-top {
  margin-top: 1em;
}

.footer-right-top, .footer-right-second {
  margin-top: 1em;
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
}

.footer-right-middle {
  margin-top: 4em;
  margin-bottom: 4em;
}

.social-icon {
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.footer-header {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.footer-link {
  display: block;
}

.footer-right-bottom {
  font-size: 0.9em;
  text-align: center;
}

.footer-bottom {
  width: 100%;
  color: #fff;
  background: #444;
  height: 50px;
  padding-top: 0.5em;
}

.footer-bottom-inner {
  width: 800px;
  position: absolute;
  padding-left: 250px;
}
</style>
