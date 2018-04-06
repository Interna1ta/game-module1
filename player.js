'use strict'

function Player(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 0;
	self.y = 2;
	self.previousX = null;
	self.previousY = null;
	self.image = '<img class="player" class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/74/Guard.png/revision/latest/scale-to-width-down/133?cb=20130119210144">';
	self.score = 0;
	self.scoreElement = '';
	self.facing = true; // true is 'right' and false is 'left'

	self.punchSound = new Audio('punch.mp3');
	self.womanPainSound1 = new Audio('woman-in-pain.mp3');
	self.womanPainSound2 = new Audio('woman-pain-scream.wav');
	self.manPainSound1 = new Audio('grunt-pain1.wav');
	self.manPainSound2 = new Audio('grunt-pain2.wav');
	self.arraySoundWoman = [self.womanPainSound1, self.womanPainSound2];
	self.arraySoundMan = [self.manPainSound1, self.manPainSound2];
	self.pigeonSound = new Audio('pigeon.wav');
	self.parrotSound = new Audio('paloma.wav');
	self.treeSound = new Audio('bush.wav');
	self.ballotBoxSound = new Audio('oh-my-god.wav');
	
	self.hint = null;
	self.arrayHintVoters = ['Mother fucker!!', 'That hurts!', 'Let us vote!', 'ACAB', 'Streets would be always ours!'];
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
	self.facing = true;
	if (self.x < 9) {
		self.savePrevious();
		self.x++;
	}
}

Player.prototype.moveLeft = function() {
	var self = this;
	self.facing = false;
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

	if (result == false) {
		self.grid[index].innerHTML = self.image;
		self.grid[previousIdx].innerHTML = '';
		self.hint = '';
		if (self.facing && !self.grid[index].classList.contains('turn-image')) {
			self.grid[index].classList.add('turn-image');
			self.grid[index].innerHTML = self.image;
		} else if (!self.facing && self.grid[index].classList.contains('turn-image')) {
			self.grid[index].classList.remove('turn-image');
			self.grid[index].innerHTML = self.image;
		}
		if (index == 92 && !self.grid[index].classList.contains('ballot-box-stole')) {
			self.hint = 'OMG! You stole a ballot box'
			self.ballotBoxSound.play();
			self.grid[index].classList.add('ballot-box-stole');
		};
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
			self.pigeonSound.play();
			break;
		case 15:
		case 25:
		case 69:
		case 94:
			self.treeSound.play();
			break;
		case 26:
		case 64:
		case 70:
		case 73:
			self.beenHit();
			var randomSound = Math.floor(Math.random() * 2);
			self.arraySoundWoman[randomSound].play();
			break;
		case 27:
		case 28:
		case 29:
		case 60:
		case 61:
		case 62:
		case 63:
		case 71:
		case 72:
		case 74:
			self.beenHit();
			var randomSound = Math.floor(Math.random() * 2);
			self.arraySoundMan[randomSound].play();
			break;
		case 79:
			self.parrotSound.play();
			var randomHint = Math.floor(Math.random() * 5);
			self.hint = self.arrayHintVoters[randomHint];
			break;
		case 95:
			self.hint = 'I don\'t care about your mission';
			break;
		case 96:
			self.hint = 'We don\'t want problems with anyone';
			break;
	}
}

Player.prototype.beenHit = function() {
	var self = this;

	self.score++;
	var randomHint = Math.floor(Math.random() * 5);
	self.hint = self.arrayHintVoters[randomHint];
	self.punchSound.play();
}