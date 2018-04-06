'use strict'

function Police(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 5;
	self.y = 9;
	self.image1 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/1e/Policeman_Male.png/revision/latest/scale-to-width-down/128?cb=20130105161728">';
	self.image2 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/18/Policewoman_SnU.png/revision/latest?cb=20130105162149">';
}


// -- UPDATE

Police.prototype.draw = function(){
	var self = this;

	var index = self.y * 10 + self.x;
	
	self.grid[index].innerHTML = self.image1;
	self.grid[index+1].innerHTML = self.image2;
}
