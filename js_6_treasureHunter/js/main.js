(function() {
  'use strict';

  var boxes = document.getElementsByClassName('box');

  function init() {
    var i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        this.src = 'image/coin.png';
        this.className = 'box';
      });
    }
   }

  init();
})();