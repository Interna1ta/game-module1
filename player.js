'use strict'

function Player(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 5;
	self.y = 4;
	self.previousX = null;
	self.previousY = null;
	self.image = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/74/Guard.png/revision/latest/scale-to-width-down/133?cb=20130119210144">';
	self.score = 0;
	self.scoreElement = '';
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

	if (self.x < 9) {
		// self.image.classList.add('turn-image');
		self.savePrevious();
		self.x++;
	}
}

Player.prototype.moveLeft = function() {
	var self = this;
	
	if (self.x > 0) {
		// self.image.classList.remove('turn-image');
		self.savePrevious();
		self.x--;
	}
}

// -- UPDATE

Player.prototype.draw = function(){
	var self = this;

	// console.log(self.x, self.y);
	// console.log(self.previousX, self.previousY);

	var index = self.x * 10 + self.y;
	var previousIdx = self.previousX * 10 + self.previousY;
	console.log(index, previousIdx);
	//debugger;
	if (index !== 65 && index !== 66) {
		self.grid[index].innerHTML = self.image;
		self.grid[previousIdx].innerHTML = 'a';
	} else {
		self.hit(index);
		self.x = self.previousX;
		self.y = self.previousY;
	}
	
}

Player.prototype.update = function(event) {
	var self = this;

	// debugger;
	//console.log(event.keyCode)
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
	}
}

// -- ACTIONS

Player.prototype.hit = function (index) {
	var self = this;

	console.log('hit');
	self.score++;
	console.log(self.score);
	//self.scoreElement.innerHTML = self.score;

	window.setInterval(function(){



/*
		if($(this).hasClass('active') === true) {
			$('.pep').css('display', 'none');
			$(this).removeClass('active');
		} else {
			$('.pep').css('display', 'block');
			$(this).addClass('active');
			$('aside ul li:nth-child(1)').css
		}

		addDamage = gameScreenElement.querySelector('.element .value');
		addDamage;
*/
	}, 1000);
	
}
