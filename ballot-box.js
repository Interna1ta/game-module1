'use strict'

function BallotBox(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 2;
	self.y = 9;
	self.image = '<img class="ballot-box" src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/95/Cube.png/revision/latest/scale-to-width-down/100?cb=20130830215532">';
}


// -- UPDATE

BallotBox.prototype.draw = function(){
	var self = this;

	var index = self.y * 10 + self.x;
	self.grid[index].innerHTML = self.image;
	self.grid[index-86].innerHTML = self.image;
}

