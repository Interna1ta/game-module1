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

	var arrayObstacles = [65, 66, 67, 22, 23];
	// debugger;
	var result;
	arrayObstacles.find(function(obstacle){
		return index == obstacle ? result = true : result = false;
	});

	console.log(result);

	if (result == false) {
		self.grid[index].innerHTML = self.image;
		self.grid[previousIdx].innerHTML = '';
		self.hint = '';
		if (index == 92 || index == 19) {self.hint = 'OMG! You stole a ballot box'};
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
	//self.hint = 'Mother fucker!! That hurts!';
	switch (index) {
			case 65:
			case 66:
			case 67:
				self.hint = 'Mother fucker!! That hurts!';
				break;
			case 22:
				self.hint = 'I dont care about your mission';
				break;
			case 23:
				self.hint = 'We dont want problems with anyone';
				break;
		}
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
