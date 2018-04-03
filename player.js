'use strict'

function Player(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 5;
	self.y = 4;
	self.previousX = self.x;
	self.previousY = self.y;
	self.image = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/74/Guard.png/revision/latest/scale-to-width-down/133?cb=20130119210144">';
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

Player.prototype.draw = function(){
	var self = this;

	console.log(self.x, self.y);
	//console.log(grid);
	//console.log(self.previousX, self.previousY);

	//self.grid[self.previousX][self.previousY].innerHTML = 'a';
	self.grid[self.x][self.y].innerHTML = self.image;
	//self.previousX = self.x;
	//self.previousY = self.y;
}

Player.prototype.update = function(event) {
	var self = this;
	
	//console.log(event.keyCode)
	// document.onkeydown = function(event) {
		switch (event.keyCode) {
			case 37:
				self.moveUp();
				break;
			case 39:
				self.moveDown();
				break;
			case 40:
				self.moveRight();
				break;
			case 38:
				self.moveLeft();
				break;
		// }
	}
}
