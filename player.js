'use strict'

function Player(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 0;
	self.y = 2;
	self.previousX = null;
	self.previousY = null;
	self.image = '<img class="player" src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/74/Guard.png/revision/latest/scale-to-width-down/133?cb=20130119210144">';
	self.score = 0;
	self.scoreElement = '';
	self.flipElement = '';
	self.hint = null;
}


// -- MOVEMENTS

Player.prototype.savePrevious = function() {
	var self = this;

	self.previousX = self.x;
	self.previousY = self.y;
}

Player.prototype.moveUp = function() {
	var self = this;

	if (self.y > 0) {
		self.savePrevious();
		self.y--;
	}
}

Player.prototype.moveDown = function() {
	var self = this;

	if (self.y < 9) {
		self.savePrevious();
		self.y++;
	}
}

Player.prototype.moveRight = function() {
	var self = this;
	
	self.flipElement = document.querySelector('.player')
	self.flipElement.classList.add('turn-image');
	// debugger;
	if (self.x < 9) {
		
		self.savePrevious();
		self.x++;
	}
}

Player.prototype.moveLeft = function() {
	var self = this;
	self.flipElement.classList.remove('turn-image')
	if (self.x > 0) {
		
		self.savePrevious();
		self.x--;
	}
}


// -- UPDATE

Player.prototype.draw = function(){
	var self = this;

	// console.log(self.x, self.y);
	// console.log(self.previousX, self.previousY);

	var index = self.y * 10 + self.x;
	var previousIdx = self.previousY * 10 + self.previousX;
	console.log(index, previousIdx);

	var arrayObstacles = [4, 5, 15, 25, 26, 27, 28, 29, 60, 61, 62, 63, 64, 69, 70, 71, 72, 73, 74, 79, 94, 95, 96];
	var result;
	arrayObstacles.find(function(obstacle){
		return index == obstacle ? result = true : result = false;
	});

	console.log(result);

	if (result == false) {
		self.grid[index].innerHTML = self.image;
		self.grid[previousIdx].innerHTML = '';
		self.hint = '';
		if (index == 92) {self.hint = 'OMG! You stole a ballot box'};
	} else {
		self.hit(index);
		self.x = self.previousX;
		self.y = self.previousY;
	}
}

Player.prototype.update = function(event) {
	var self = this;

	// console.log(event.keyCode)
	switch (event.keyCode) {
		case 38:
			self.moveUp();
			break;
		case 40:
			self.moveDown();
			break;
		case 39:
			self.moveRight();
			break;
		case 37:
			self.moveLeft();
			break;
	}
}


// -- ACTIONS

Player.prototype.hit = function (index) {
	var self = this;

	switch (index) {
		case 4:
			self.hint = 'Piio! Piiiiioo!!';
			break;
		case 26:
		case 27:
		case 28:
		case 29:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
			self.score++;
			self.hint = 'Mother fucker!! That hurts!';
			break;
		case 79:
			self.hint = 'Streets would be always ours!';
			break;
		case 95:
			self.hint = 'I don\'t care about your mission';
			break;
		case 96:
			self.hint = 'We don\'t want problems with anyone';
			break;
	}
}
