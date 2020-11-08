$(function () {
  draw();

});

function draw() {
  
}

SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG().addTo('#canvas');
  draw.rect(100,100).animate().fill('#f03').move(100,100);
})



