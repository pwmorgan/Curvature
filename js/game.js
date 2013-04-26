var waves = [];
var canvas = document.getElementById("game");
var context = canvas.getContext('2d');
var rightpoint;
var leftpoint;
var WIDTH = 800;
var HEIGHT = 600;
var wavecount = WIDTH + 1;
var sine = 0;

var init = function(){
	rightpoint = [WIDTH, HEIGHT];
	leftpoint = [0, HEIGHT];

	var waveheight = 200;
	var waveposition = 0;
	var posIncrement = 1;

	for (var wave = 0; wave < 3; wave++)
	{
		for (var i = 0; i < wavecount; i++)
		{
			waveposition = i * posIncrement;
			waves[wave][i] = [waveheight];
		}
	}
}

var update = function(){
	sine += 0.4;
	for (var i = 0; i < wavepoints.length - 2; i++)
	{
		waves[wave][i] = waves[wave][i + 1];
	}
}

var draw = function(){

	context.clearRect(0, 0, 800, 600);

	context.beginPath();
	context.moveTo(rightpoint[0], rightpoint[1]);
	context.lineTo(leftpoint[0], leftpoint[1]);
	for (var wave = 0; wave < waves.length; wave++)
	{
		for (var i = 0; i < waves.length; i++)
		{
			context.lineTo(i, waves[wave][i]);
		}
	}
	context.closePath();

	context.lineWidth = 1;

	var watercolor = context.createLinearGradient(0,0,0,600);
	watercolor.addColorStop(0, '#0DF');

	// Animated gradient!
	/*var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	var g = colors[14 + Math.sin(sine / 8) | 0] + colors[8 + (8 * Math.sin(sine / 4)) | 0];
	var b = colors[14 + 2 * Math.sin(sine / 12) | 0] + colors[8 + (8 * Math.sin(sine / 4)) | 0];
	var topcolor = "#00" + g + b;
	watercolor.addColorStop(0, topcolor);*/

	watercolor.addColorStop(1, '#00F');

	context.strokeStyle = "blue";
	context.fillStyle = watercolor;
	context.fill();
	context.stroke();
}

var randRange = function (min, max) {
	return min + (Math.random() * max - min) | 0;
}

var gameloop = function (){
	update();
	draw();
	window.setTimeout(gameloop, 14);
}

init();
gameloop();