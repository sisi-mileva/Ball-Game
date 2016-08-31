/**
 * 
 */
function SpeedBall(x, y, r) {
	SmallBall.call(this, x, y, r, 'green');
}

SpeedBall.prototype = Object.create(SmallBall.prototype);
SpeedBall.prototype.constructor = SpeedBall;

SpeedBall.prototype.giveSpeed = function(player) {
	var newX = Math.floor(Math.random()*(570 - 30 + 1)) + 30;
	var newY = Math.floor(Math.random()*(470 - 30 + 1)) + 30;
	
	if (this.getIsHit()) {
		this.setStartX(newX);
		this.setStartY(newY);
		this.setIsHit(false);
		player.setSpeed(player.getSpeed() * 2);
		setTimeout(function() {
			player.setSpeed(player.getSpeed() / 2);
		},20000);
	}
}