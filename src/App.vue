<template>
<div class="app-container">
<div class="header">
<div class="header-inner">
<img class="thumb" src="/img/thumb.png" />
<div class="header-title hidden-xs-only">
Project Wyvern
</div>
<div class="header-title-sm hidden-sm-and-up">
Project Wyvern
</div>
<div class="header-links">
<router-link class="header-link" to="/"><v-icon medium>home</v-icon></router-link>
<router-link class="header-link" to="/about"><v-icon medium>help</v-icon></router-link>
<router-link class="header-link" to="/contact"><v-icon medium>mail</v-icon></router-link>
</div>
</div>
</div>
<div class="content">
<router-view>
</router-view>
</div>
<div class="app-footer">
<div class="app-footer-inner">
<div class="app-footer-left hidden-xs-only">
<img class="app-footer-thumb" src="/img/thumb-large.png" />
<div class="app-footer-left-bottom">
<div class="app-footer-left-bottom-top">Project Wyvern</div>
© Project Wyvern Developers
</div>
</div>
<div class="app-footer-right">
<div class="app-footer-right-top">
<router-link class="footer-link" to="/">Home</router-link>
<router-link class="footer-link" to="/about">About</router-link>
<router-link class="footer-link" to="/contact">Contact</router-link>
<a target="_blank" class="footer-link" href="https://exchange.projectwyvern.com">Exchange</a>
<a target="_blank" class="footer-link" href="https://dao.projectwyvern.com">DAO</a>
<a target="_blank" class="footer-link" href="https://token.projectwyvern.com">Token</a>
<a target="_blank" class="footer-link" href="https://github.com/ProjectWyvern/wyvern-protocol/blob/master/build/whitepaper.pdf">Whitepaper</a>
</div>
<div class="app-footer-right-second">
</div>
<div class="app-footer-right-middle">
<a target="_blank" href="https://www.facebook.com/WyvernExchange/"><icon class="social-icon" name="facebook" scale="2" /></a>
<a target="_blank" href="https://twitter.com/wyvernexchange"><icon class="social-icon" name="twitter" scale="2" /></a>
<a target="_blank" href="https://medium.com/project-wyvern"><icon class="social-icon" name="medium" scale="2" /></a>
<a target="_blank" href="https://github.com/projectwyvern"><icon class="social-icon" name="github" scale="2" /></a>
<a target="_blank" href="https://riot.im/app/#/room/#projectwyvern:matrix.org"><icon class="social-icon" name="comments" scale="2" /></a>
</div>
<div class="app-footer-right-bottom">
<a target="_blank" href="http://judecoram.com/">Site designed by Jude Coram</a>
</div>
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
  background: #000;
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
  background: #000; 
}

::-webkit-scrollbar-thumb {
  background: #fff; 
}

::-webkit-scrollbar-thumb:hover {
  background: #aaa; 
}

a {
  color: #fff;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
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
  background: #000;
}

.header-inner {
  max-width: 800px;
  margin: 0 auto;
}

.header-link {
  margin-left: 1em;
}

.header-title {
  height: 100px;
  line-height: 100px;
  display: inline-block;
  font-size: 2em;
  font-variant: small-caps;
  font-weight: bold;
}

.header-title-sm {
  height: 100px;
  line-height: 100px;
  display: inline-block;
  font-size: 1.3em;
  font-variant: small-caps;
  font-weight: bold;
}

.thumb {
  margin-left: 20px;
  position: relative;
  top: 13px;
  margin-right: 20px;
  display: inline-block;
}

.header-links {
  margin-right: 1em;
  display: inline-block;
  float: right;
  line-height: 100px;
}

.content {
  width: 100%;
  min-height: calc(100% - 300px);
  background: #000;
}

.app-footer {
  height: 200px;
  width: 100%;
  color: #fff;
  background: #000;
}

.app-footer-inner {
  max-width: 800px;
  margin: 0 auto;
}

.app-footer-thumb {
  position: relative;
  top: 10px;
  left: 50px;
}

.app-footer-left {
  width: 220px;
  padding-left: 1em;
  display: inline-block;
}

.app-footer-left-bottom {
  position: relative;
  top: 2em;
  text-align: center;
  line-height: 2em;
}

.app-footer-left-bottom-top {
  font-size: 2em;
  margin-bottom: 0.3em;
  font-variant: small-caps;
}

.app-footer-right {
  padding-right: 2em;
  float: right;
}

.app-footer-right-top {
  margin-top: 1em;
}

.app-footer-right-top, .app-footer-right-second {
  margin-top: 1em;
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
}

.app-footer-right-middle {
  margin-top: 4em;
  margin-bottom: 4em;
}

.social-icon {
  margin-left: 0.7em;
  margin-right: 0.7em;
}

.footer-link {
  margin-left: 0.2em;
  margin-right: 0.2em;
}

.app-footer-right-bottom {
  font-size: 0.9em;
  text-align: center;
}
</style>
