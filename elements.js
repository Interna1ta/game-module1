'use strict'

function Elements(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 4;
	self.y = 9;
	self.image1 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/10/Maple_Tree.png/revision/latest/scale-to-width-down/125?cb=20130101105735">';
	self.image2 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/9f/Wall_Sheathing.png/revision/latest/scale-to-width-down/150?cb=20140819184550">';
	self.image3 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/9f/Wall_Sheathing.png/revision/latest/scale-to-width-down/150?cb=20140819184550">';
	self.image4 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/9e/Pigeon.png/revision/latest?cb=20130523163811">';
	self.image5 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/3/32/Macaw.png/revision/latest/scale-to-width-down/100?cb=20130618211755">';
	self.image6 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/b/b9/Burmese.png/revision/latest/scale-to-width-down/150?cb=20150601235343">';
	self.image7 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/5/57/Cruise_Liner.png/revision/latest/scale-to-width-down/200?cb=20130224165337">';
}


// -- UPDATE

Elements.prototype.draw = function(){
	var self = this;

	var index = self.y * 10 + self.x;
	
	self.grid[index].innerHTML = self.image1;
	self.grid[index-69].innerHTML = self.image1;
	self.grid[index-79].innerHTML = self.image1;
	self.grid[index-89].innerHTML = self.image1;
	self.grid[index-25].innerHTML = self.image1;
	self.grid[index-90].innerHTML = self.image4;
	self.grid[index-15].innerHTML = self.image5;

}
