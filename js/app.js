SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG().addTo('#canvas');
  draw.circle(100);
  draw.line(0, 100, 100, 0).move(20, 20);
  line.stroke({ color: '#f06', width: 10, linecap: 'round' })
})