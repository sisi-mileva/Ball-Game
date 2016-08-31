/**
 * 
 */
function Game() {
	var player = new UserBall(100, 100, 20, 'black');
	var yellow = new PointBall(400, 200, 10);
	var green = new SpeedBall(100, 300, 10);
	var red = new LiveBall(460, 420, 10);
	
	this.getPlayer = function() {
		return player;
	}
	
	this.getYellow = function() {
		return yellow;
	}
	
	this.getGreen = function() {
		return green;
	}
	
	this.getRed = function() {
		return red;
	}
}

Game.prototype.start = function () {
	var player = this.getPlayer();
	player.draw();
	
	var yellow = this.getYellow();
	yellow.draw();
	
	var green = this.getGreen();
	green.draw();
	
	var red = this.getRed();
	red.draw();
}

Game.prototype.loop = function() {
	var player = this.getPlayer();
	var yellow = this.getYellow();
	var green = this.getGreen();
	var red = this.getRed();
	CTX.clearRect(0,0,600,500);
	player.draw();
	yellow.draw();
	green.draw();
	red.draw();
	
	if (player.getMoveUp()) {
		player.moveUp();
	}
	
	if (player.getStartY() < 25) {
		player.setMoveUp(false);
		player.setLives(player.getLives() - 1);
	}
	
	if (player.getMoveDown()) {
		player.moveDown();
	}
	
	if (player.getStartY() > 475) {
		player.setMoveDown(false);
		player.setLives(player.getLives() - 1);
	}
	
	if (player.getMoveLeft()) {
		player.moveLeft();
	}
	
	if (player.getStartX() < 25) {
		player.setMoveLeft(false);
		player.setLives(player.getLives() - 1);
	}
	
	if (player.getMoveRight()) {
		player.moveRight();
	}
	
	if (player.getStartX() > 575) {
		player.setMoveRight(false);
		player.setLives(player.getLives() - 1);
	}
	
	this.hit(player, yellow);
	var score = document.getElementById('score1');
	score.innerHTML = player.getScore();
	
	this.hit(player, green);
	
	this.hit(player, red);
	var score = document.getElementById('lives1');
	score.innerHTML = player.getLives();
	
	var _this = this;
	requestAnimationFrame(function(){
		_this.loop();
	});
}


Game.prototype.init = function() {
	var player = this.getPlayer();
	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 38 && player.getStartY() > 25) {
			player.setMoveUp(true);
		}
		
		if (e.keyCode == 40 && player.getStartY() < 475) {
			player.setMoveDown(true);
		}
		
		if (e.keyCode == 37 && player.getStartX() > 25) {
			player.setMoveLeft(true);
		}
		
		if (e.keyCode == 39 && player.getStartX() < 575) {
			player.setMoveRight(true);
		}
	}, false)
	
	document.addEventListener('keyup', function(e) {
		if (e.keyCode == 38) {
			player.setMoveUp(false);
		}
		
		if (e.keyCode == 40) {
			player.setMoveDown(false);
		}
		
		if (e.keyCode == 37) {
			player.setMoveLeft(false);
		}
		
		if (e.keyCode == 39) {
			player.setMoveRight(false);
		}
	}, false)
}

Game.prototype.hit = function(player, smallBall) {
	var x1 = player.getStartX();
	var y1 = player.getStartY();
	
	var x2 = smallBall.getStartX();
	var y2 = smallBall.getStartY();
	
	var x = Math.pow(Math.abs(x1 - x2), 2);
	var y = Math.pow(Math.abs(y1 - y2), 2);
	
	var z = Math.sqrt(x + y);
	
	if (z <= smallBall.getRadius() + 5) {
		smallBall.setIsHit(true);
		if (smallBall instanceof PointBall) {
			smallBall.givePoints(player);
		} else if (smallBall instanceof SpeedBall) {
			smallBall.giveSpeed(player);
		} else if (smallBall instanceof LiveBall) {
			smallBall.giveTakeLive(player);
		}
		
	}
}