'use strict'

function BallotBox(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 9;
	self.y = 2;
	self.image = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/95/Cube.png/revision/latest/scale-to-width-down/100?cb=20130830215532">';
}


// -- UPDATE

BallotBox.prototype.draw = function(){
	var self = this;

	var index = self.x * 10 + self.y;
	self.grid[index].innerHTML = self.image;
}

