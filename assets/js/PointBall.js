/**
 * 
 */
function PointBall(x, y, r) {
	SmallBall.call(this, x, y, r, 'yellow');
}

PointBall.prototype = Object.create(SmallBall.prototype);
PointBall.prototype.constructor = PointBall;

PointBall.prototype.givePoints = function(player) {
	var newX = Math.floor(Math.random()*(570 - 30 + 1)) + 30;
	var newY = Math.floor(Math.random()*(470 - 30 + 1)) + 30;
	
	if (this.getIsHit()) {
		this.setStartX(newX);
		this.setStartY(newY);
		this.setIsHit(false);
		player.setScore(player.getScore() + 10);
	}
}