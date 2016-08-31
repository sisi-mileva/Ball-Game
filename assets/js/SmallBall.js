/**
 * 
 */
function SmallBall(x, y, r, color) {
	Ball.call(this, x, y, r, color);
	var __isHit = false;
	
	this.getIsHit = function() {
		return __isHit;
	}
	
	this.setIsHit = function(hit) {
		__isHit = hit;
	}
}
SmallBall.prototype = Object.create(Ball.prototype);
SmallBall.prototype.constructor = SmallBall;