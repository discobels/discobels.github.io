/* ==========================
:: JS Name: Discobels Base
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
========================== */

// Determine loop numbers.
(async function() {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let userconfig = await response.json();
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.setAttribute('blocks',userconfig[1].blocks.length);
  canvas.setAttribute('buttons',userconfig[2].buttons.length);
})();

// Particle background settings.
window.onload = async function() {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let userconfig = await response.json();
  var snowGlobe = userconfig[0].snowGlobe;
  var snowColor = userconfig[0].snowColor;
  if (snowGlobe === "YES") {
    Particles.init({
      selector: '.background',
      color: snowColor,
      sizeVariations: 5,
      maxParticles: 120,
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
          maxParticles: 80
          }
        }, {
          breakpoint: 375,
          options: {
          maxParticles: 50
          }
        }
     ]
    });
  }
}

// Hide loading screen after 1.3 seconds.
function fadeOut(i) {
document.getElementById(i).style.opacity = 1;
let x; let y; var z;
  function xyz() {
    y = document.getElementById(i).style.opacity;
    z = y - 0.002;
    document.getElementById(i).style.opacity = z;
  }
  setTimeout(function(){
    for (x = 0; x < 500; x++) {
      setTimeout(xyz, x);
    }},1000);
  setTimeout(function(){
    document.getElementById(i).style.display = "none";
  },1500);
}
fadeOut('top');

// Add header.
(async function() {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let userconfig = await response.json();
  var header = document.getElementsByTagName('header')[0];
  header.innerHTML = '<img class="brand-logo" src="' + userconfig[0].logo + '" alt="' + userconfig[0].logoAlt + '" /><h2>' + userconfig[0].brand + '</h2><h3>' + userconfig[0].tagline + '</h3>';
})();

// Add blocks.
async function addBlocks(n) {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let userconfig = await response.json();
  var blockSec, blockObj;
  blockSec = document.getElementById('blocks');
  blockObj = document.createElement('a');
  blockObj.id = userconfig[1].blocks[n].id;
  blockObj.className = 'col-m6';
  blockObj.href = userconfig[1].blocks[n].link;
  blockObj.innerHTML = '<div class="block flex"><h1 class="block-icon flex flex-center"><img src="' + userconfig[1].blocks[n].png + '" alt="' + userconfig[1].blocks[n].name + '" /></h1><h2 class="block-txt">' + userconfig[1].blocks[n].name + '</h2></div>';
  blockSec.appendChild(blockObj);
}
(async function() {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let userconfig = await response.json();
  var blockLength = userconfig[1].blocks.length;
  for (i = 0; i < blockLength; i++) {
    addBlocks(i);
  }
})();
