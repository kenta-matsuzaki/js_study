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
        var j;
        for (j = 0; j < boxes.length; j++) {
          boxes[j].src = 'image/' + contents[Math.floor(Math.random() * contents.length)];
          boxes[j].className = 'box disabled';
        }
        this.className = 'box';
      });
    }
   }

  init();
})();