/**
 * 
 */
function UserBall(x, y, r, color) {
	Ball.call(this, x, y, r, color);
	var __moveUp = false;
	var __moveDown = false;
	var __moveLeft = false;
	var __moveRight = false;
	var __score = 0;
	var __lives = 3;
	var __speed = 5;
	
	this.getMoveUp = function() {
		return __moveUp;
	}
	
	this.setMoveUp = function(moveUp) {
		__moveUp = moveUp;
	}
	
	this.getMoveDown = function() {
		return __moveDown;
	}
	
	this.setMoveDown = function(moveDown) {
		__moveDown = moveDown;
	}
	
	this.getMoveLeft = function() {
		return __moveLeft;
	}
	
	this.setMoveLeft = function(moveLeft) {
		__moveLeft = moveLeft;
	}
	
	this.getMoveRight = function() {
		return __moveRight;
	}
	
	this.setMoveRight = function(moveRight) {
		__moveRight = moveRight;
	}
	
	this.getSpeed = function() {
		return __speed;
	}
	
	this.setSpeed = function(newSpeed) {
		__speed = newSpeed;
	}
	
	this.getScore = function() {
		return __score;
	}
	
	this.setScore = function(newScore) {
		__score = newScore;
	}
	
	this.getLives = function() {
		return __lives;
	}
	
	this.setLives = function(newLives) {
		__lives = newLives;
	}
}
UserBall.prototype = Object.create(Ball.prototype);
UserBall.prototype.constructor = UserBall;

UserBall.prototype.moveUp = function() {
	
	var y = this.getStartY();
	var speed = this.getSpeed();
	
	this.setStartY(y - speed);
	
}

UserBall.prototype.moveDown = function() {
	
	var y = this.getStartY();
	var speed = this.getSpeed();
	
	this.setStartY(y + speed);
	 
}

UserBall.prototype.moveLeft = function() {
	
	var x = this.getStartX();
	var speed = this.getSpeed();
	
	this.setStartX(x - speed);

}

UserBall.prototype.moveRight = function() {
	
	var x = this.getStartX();
	var speed = this.getSpeed();
	
	this.setStartX(x + speed);
	 
}