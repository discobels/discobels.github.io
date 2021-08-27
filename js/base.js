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

// Particle background settings.
window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#D7C5F9',
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
};