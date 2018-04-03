'use strict'

function Player() {
		var self = this;
		
		

    self.x = 0;
    self.y = 0;
    self.image = null;

}


// -- MOVEMENTS

Player.prototype.moveUp = function() {
	var self = this;
	self.y--;
}

Player.prototype.moveDown = function() {
	var self = this;
	self.y++;
}

Player.prototype.moveRight = function() {
	var self = this;
	self.x++;
}

Player.prototype.moveLeft = function() {
	var self = this;
	self.x--;
}


// -- UPDATE

Player.prototype.update = function(event) {
	var self = this;
	
	document.onkeydown = function(event) {
		switch (event.keyCode) {
			case 38:
				moveUp();
				break;
			case 40:
				moveDown();
				break;
			case 39:
				moveRight();
				break;
			case 37:
				moveLeft();
				break;
		}
	}
	
}
