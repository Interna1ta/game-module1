'use strict'

function Elements(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 6;
	self.y = 0;
	self.image1 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/10/Maple_Tree.png/revision/latest/scale-to-width-down/125?cb=20130101105735">';
	self.image2 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/9f/Wall_Sheathing.png/revision/latest/scale-to-width-down/150?cb=20140819184550">';
	self.image3 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/9f/Wall_Sheathing.png/revision/latest/scale-to-width-down/150?cb=20140819184550">';

}


// -- UPDATE

Elements.prototype.draw = function(){
	var self = this;

	console.log(self.x, self.y);

	var index = self.x * 10 + self.y;
	console.log(index);
	
	self.grid[index].innerHTML = self.image2;
	self.grid[index+1].innerHTML = self.image2;
	self.grid[index+2].innerHTML = self.image2;
	self.grid[index+3].innerHTML = self.image2;
	self.grid[index+13].innerHTML = self.image1;
}
