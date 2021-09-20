/* ==========================
:: JS Name: Discobels Base
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
========================== */

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
    }
  },1000);
  setTimeout(function(){
    document.getElementById(i).style.display = "none";
  },1500);
}
fadeOut('top');

// Add header.
(async function() {
  var header = document.getElementsByTagName('header')[0];
  header.innerHTML = '<img class="brand-logo" src="' + userconfig[0].logo + '" alt="' + userconfig[0].logoAlt + '" /><h2>' + userconfig[0].brand + '</h2><h3>' + userconfig[0].tagline + '</h3>';
})();

// Add blocks.
async function addBlocks(n) {
  var blockSec, blockObj;
  blockSec = document.getElementById('blocks');
  blockObj = document.createElement('a');
  blockObj.id = userconfig[1].blocks[n].id;
  blockObj.className = 'col-m6';
  blockObj.href = userconfig[1].blocks[n].link;
  if (userconfig[1].blocks[1].newTab === "YES") {blockObj.target = '_blank';}
  blockObj.innerHTML = '<div class="block flex"><h1 class="block-icon flex flex-center"><img src="' + userconfig[1].blocks[n].png + '" alt="' + userconfig[1].blocks[n].name + '" /></h1><h2 class="block-txt">' + userconfig[1].blocks[n].name + '</h2></div>';
  var wait = i*50+1;
  setTimeout(function(){
    blockSec.appendChild(blockObj);
  }, wait);
}
(async function() {
  var blockLength = userconfig[1].blocks.length;
  for (i = 0; i < blockLength; i++) {
    addBlocks(i);
  }
})();
