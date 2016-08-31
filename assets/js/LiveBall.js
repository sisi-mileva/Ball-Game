/**
 * 
 */
function LiveBall(x, y, r) {
	SmallBall.call(this, x, y, r, 'red');
	var __isBomb = false;
	
	this.getIsBomb = function() {
		return __isBomb;
	}
	
	this.setIsBomb = function(bomb) {
		__isBomb = bomb;
	}
}

LiveBall.prototype = Object.create(SmallBall.prototype);
LiveBall.prototype.constructor = LiveBall;

var result;
LiveBall.prototype.giveTakeLive = function(player) {
	var newX = Math.floor(Math.random()*(570 - 30 + 1)) + 30;
	var newY = Math.floor(Math.random()*(470 - 30 + 1)) + 30;
	
	
	
	if (this.getIsHit()) {
		this.setStartX(newX);
		this.setStartY(newY);
		this.setIsHit(false);
		clearTimeout(result);
		
		if (!this.getIsBomb()) {
			player.setLives(player.getLives() + 1);
		} else {
			player.setLives(player.getLives() - 1);
		}
		
		this.setIsBomb(false);
		var _this = this;
		result = setTimeout(function() {
			_this.setIsBomb(true);
		}, 20000);
	}
}