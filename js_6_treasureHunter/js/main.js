(function() {
  'use strict';

  var boxes = document.getElementsByClassName('box');

  var contents = [
    'coin.png',
    'empty.png',
    'cobra.png',
  ];

  function init() {
    var i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        this.src = 'image/' + contents[Math.floor(Math.random() * contents.length)];
        this.className = 'box';
      });
    }
   }

  init();
})();