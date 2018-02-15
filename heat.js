

var points = [
  { x: 659, y: 163, radius:60, value: 100},
  { x: 620, y: 309, radius: 75, value: 80},
  { x: 732, y: 334, radius: 95, value: 90},
  { x: 800, y: 400, radius: 75, value: 90}
];


var heatmapInstance;
var zoomZero = false;
var createHeatMap = false;
var zoomScale = 1;

window.onload = function() {
  document.querySelector('.container').onclick = function (ev) {

  };

  var data = {max:100, min:0,  data: points};

  createHeat(data);
  $('.heatmap').draggable({zIndex: 0});
};

function createHeat(data){
 
  if (createHeatMap === false){
  heatmapInstance = h337.create({
    container: document.querySelector('.heatmap'),
    
    maxOpacity: .7,
    minOpacity: 0,
    blur: .85,
    gradient: {
      '.50': 'green',
      '.70': 'yellow',
      '.95': 'red',
      '.30': 'blue',
  }
});

    createHeatMap = true;
  }
  heatmapInstance.setData(data);
}

function zoom(zoom) {
  if (zoom === "+") {
    zoomScale = zoomScale + .1; 
    document.getElementById('heatplan').style.transform = 'scale(' + zoomScale.toFixed(1) + ')';
    $(".heatmap-canvas").css("transform", "scale(" + zoomScale.toFixed(1) + ")");
      zoomZero = false;
  } else {
    zoomScale = zoomScale - .1;
    if (zoomScale <= 1) {
      zoomScale = 1;
      document.getElementById('heatplan').style.transform = 'scale(' + zoomScale.toFixed(1) + ')';
      $(".heatmap-canvas").css("transform", "scale(" + zoomScale.toFixed(1) + ")");
    } else {
      document.getElementById('heatplan').style.transform = 'scale(' + zoomScale.toFixed(1) + ')';
      $(".heatmap-canvas").css("transform", "scale(" + zoomScale.toFixed(1) + ")");
    }

  }

}
/*$ ( function(){
  $( '.test' ).draggable({
    addClasses: false,
    zIndex: 1,
  });
  $(".heatmap").droppable()
});*/

$(function(){
  $('.container #myCarusel .heatmap #heatplan').droppable({
  accept: '.test',
  greedy: true,
  drop: function (event, ui){
    $(ui.draggable).detach().appendTo($(this));
  }
});

$(function(){
$('.test').draggable();
})});