<template>
<div id="home" class="home">
<div class="anim">
<canvas id="canvas" />
<img src="/img/logo.svg" id="logo" style="display: none; height: 100%; width: 100%;" />
</div>
<div id="center">
<div class="buttons hidden-xs-only" id="buttons">
<a href="https://dao.projectwyvern.com" target="_blank"><v-btn class="btn" id="dao" color="primary">DAO</v-btn></a>
<a href="https://exchange.projectwyvern.com" target="_blank"><v-btn class="btn" id="exchange" color="primary">Exchange</v-btn></a>
<a href="#" v-scroll-to="'#texttop'"><v-btn class="btn" id="more" color="primary">Learn More</v-btn></a>
</div>
</div>
<v-container grid-list-md text-md-left class="cgrid">
<v-layout row wrap>
<v-flex xs12>
<div id="texttop">
Decentralized Digital Item Exchange
</div>
</v-flex>
<v-flex xs12 md6>
<div class="textc">
<div class="textc-title">Buy and Sell Digital Items Peer-to-Peer</div>
Trade any kind of digital item — gift cards, game codes, rare virtual kittens, even smart contracts — with anyone in the world. All you need is an internet connection.
</div>
</v-flex>
<v-flex xs12 md6>
<div class="imgc"><img src="/img/peer-to-peer.png" class="img" /></div>
</v-flex>
<v-flex xs12 md6>
<div class="imgc"><img src="/img/executives.png" class="img" /></div>
</v-flex>
<v-flex xs12 md6>
<div class="textc">
<div class="textc-title">Avoid Rent-Seeking Intermediaries</div>
Trades on the Wyvern Exchange are settled peer-to-peer over the Ethereum network, no Paypal fee required. You never need to trust us with your funds, and the complete protocol implementation is publicly auditable.
</div>
</v-flex xs12 md6>
<v-flex xs12 md6>
<div class="textc">
<div class="textc-title">Automate Your Commerce</div>
Pick whichever method of sale you prefer: fixed price, English auction, Dutch auction, or something more exotic. Interface with the Exchange through a website, a mobile application, or a custom script.
</div>
</v-flex>
<v-flex xs12 md6>
<div class="imgc"><img src="/img/coding.png" class="img" /></div>
</v-flex>
<v-flex xs12 md6>
<div class="imgc"><img src="/img/voting.png" class="img" /></div>
</v-flex>
<v-flex xs12 md6>
<div class="textc">
<div class="textc-title">Autonomously Governed and Arbitrated</div>
The Wyvern Exchange protocol is controlled by a distributed autonomous organization which arbitrates disputes, manages exchange operation, and furthers strategic development. Anyone who wants can become a shareholder and take part in the governance process.
</div>
</v-flex>
<v-flex xs12 md12>
<iframe src="https://landing.mailerlite.com/webforms/landing/t4d5g6" style="margin: 0 auto; border: none; width: 460px; height: 220px; display: block; overflow: hidden;"></iframe>
</v-flex>
</v-layout>
</v-container>
</div>
</template>

<script>
import MobileDetect from 'mobile-detect'

export default {
  metaInfo: {
    title: 'Home'
  },
  methods: {
    scroll: function() {
      document.getElementById('home').scrollTop = 1000;
    }
  },
  mounted: function() {
    if (new MobileDetect(window.navigator.userAgent).mobile()) {
      document.getElementById('buttons').style.display = 'none'
      return;
    }
    var seriously = new Seriously();
    document.getElementById('canvas').height = window.innerHeight - 100;
    document.getElementById('center').style.height = (window.innerHeight - 100) + 'px';
    document.getElementById('canvas').style['margin-top'] = '10px';
    document.getElementById('buttons').style['padding-top'] = ((window.innerHeight - 100) / 2) + 'px';
    document.getElementById('canvas').width = window.innerWidth;
    var logo = seriously.source('#logo');
    var target = seriously.target('#canvas');
    var vignette = seriously.effect('vignette');
    vignette.amount = 1;
    vignette.source = logo;
    var mask = seriously.transform();
    mask.source = vignette;
    target.source = mask;
    var factor = 1;
    var diff = 0; 
    function setPosition(x, y) {
      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;
      var xd = Math.abs(x - (canvas.width / 2)) / canvas.width;
      var yd = Math.abs(y - (canvas.height / 2)) / canvas.height;
      diff = xd + yd;
    }
    function mouseMove(e) { setPosition(e.pageX, e.pageY); } 
    window.addEventListener('mousemove', mouseMove, false);
    var amt = 0.5;  
    var del = 200;
    mouseMove({pageX: 0, pageY: 0})
    seriously.go(function(now) {
      factor = amt + (Math.sin(now / del) / Math.PI / 8);
      vignette.amount = factor * 100 * diff;
      document.getElementById('buttons').style.opacity = 1 - diff;
    });
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  color: #fff;
}

.anim {
  position: absolute;
  height: calc(100% - 100px);
  width: 100%;
}

#center {
  height: 100%;
  width: 100%;
}

#canvas {
  margin-top: -50px;
  z-index: -5;
}

.buttons {
  z-index: -10;
  width: 50em;
  text-align: center;
  height: 100%;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  font-weight: bold;
}

.btn:hover {
  background: #fff;
  color: #000;
}

#dao {
  position: relative;
  left: 1em;
  top: -4em;
}

#exchange {
  position: relative;
  top: 2em;
}

#more {
  position: relative;
  top: -2em;
  left: 5em;
}

.cgrid {
  max-width: 900px;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 5em;
  font-size: 1.5em;
}

.img {
  height: 400px;
  width: 400px;
}

.imgc {
  width: 400px;
  margin: 0 auto;
  margin-top: -5em;
}

.textc {
}

.textc-title {
  padding-bottom: 1em;
  font-weight: bold;
}

#texttop {
  font-size: 2em;
  font-variant: small-caps;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 2em;
}
</style>
