'use strict'

function Voters(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 6;
	self.y = 5;
	self.image1 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/8/8f/Groupie.png/revision/latest/scale-to-width-down/133?cb=20130120215149">';
	self.image2 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/90/Waterboy.png/revision/latest/scale-to-width-down/128?cb=20130106134031">';
	self.image3 = '<img src="src="https://vignette.wikia.nocookie.net/scribblenauts/images/6/6c/Yoga_Instructor.png/revision/latest/scale-to-width-down/133?cb=20130130110131"">';

}


// -- UPDATE

Voters.prototype.draw = function(){
	var self = this;

	console.log(self.x, self.y);

	var index = self.x * 10 + self.y;
	console.log(index);

	self.grid[index].innerHTML = self.image1;
	self.grid[index+1].innerHTML = self.image2;
	self.grid[index+2].innerHTML = self.image2;

}
