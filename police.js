'use strict'

function Police(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 2;
	self.y = 2;
	self.image1 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/1e/Policeman_Male.png/revision/latest/scale-to-width-down/128?cb=20130105161728">';
	self.image2 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/18/Policewoman_SnU.png/revision/latest?cb=20130105162149">';

}


// -- UPDATE

Police.prototype.draw = function(){
	var self = this;

	console.log(self.x, self.y);

	var index = self.x * 10 + self.y;
	console.log(index);
	
	self.grid[index].innerHTML = self.image1;
	self.grid[index+1].innerHTML = self.image2;
	
}
