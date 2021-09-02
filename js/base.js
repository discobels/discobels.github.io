/* ==========================
:: JS Name: Discobels Base
:: Author: NaeemBolchhi
:: License: GPL-3.0 License
:: Landing Page: https://naeembolchhi.github.io/
:: Telegram Profile: https://t.me/NaeemBolchhi
:: Description: Made for the links page of Distorting Decibels.
:: Version: v1.0
:: Created: 27/08/2021
========================== */

// Fetch JSON.
(async function() {
  let url = window.location.origin + '/usr/userconfig.json';
  let response = await fetch(url);
  let config = await response.json();
  window.snowGlobe = config[0].snowGlobe;
  window.snowColor = config[0].snowColor;
  window.splashScreen = config[0].splashScreen;
})();

// Particle background settings.
window.onload = function() {
  if (window.snowGlobe === "YES") {
    var snowColor = window.snowColor;
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
