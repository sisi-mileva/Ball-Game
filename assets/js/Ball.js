/**
 * 
 */
const START_ANGLE = 0;
const END_ANGLE = 2 * Math.PI;

function Ball(x, y, r, color) {
	var __startX = x;
	var __startY = y;
	var __radius = r;
	var __startAngle = START_ANGLE;
	var __endAngle = END_ANGLE;
	var __color = color;
	var __ctx = CTX;
	
	this.getStartX = function() {
		return __startX;
	}
	
	this.setStartX = function(newX) {
		__startX = newX;
	}
	
	this.getStartY = function() {
		return __startY;
	}
	
	this.setStartY = function(newY) {
		__startY = newY;
	}
	
	this.getRadius = function() {
		return __radius;
	}
	
	this.getColor = function() {
		return color;
	}
}

Ball.prototype.draw = function() {
	var x = this.getStartX();
	var y = this.getStartY();
	var radius = this.getRadius();
	var startAngle = START_ANGLE;
	var endAngle = END_ANGLE;
	var color = this.getColor();
	var ctx = CTX;
	
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x, y, radius, startAngle, endAngle, false);
	ctx.fill();
	ctx.restore();
}