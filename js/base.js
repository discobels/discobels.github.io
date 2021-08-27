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
let x; let y; var z;
  function xyz() {
    y = document.getElementById(i).style.opacity;
    z = y - 0.0035;
    document.getElementById(i).style.opacity = z;
  }
  setTimeout(function(){
    for (x = 0; x < 280; x++) {
      setTimeout(xyz, x);
    }},1000);
  setTimeout(function(){
    document.getElementById(i).style.display = "none";
  },1300);
}

// Call all functions.
fadeOut('top');