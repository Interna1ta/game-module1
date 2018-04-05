'use strict'

function Voters(grid) {
	var self = this;
	
	self.grid = grid;
  self.x = 0;
	self.y = 6;
	self.image1 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/8/8f/Groupie.png/revision/latest/scale-to-width-down/133?cb=20130120215149">';
	self.image2 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/9/90/Waterboy.png/revision/latest/scale-to-width-down/128?cb=20130106134031">';
	self.image3 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/6/6c/Yoga_Instructor.png/revision/latest/scale-to-width-down/133?cb=20130130110131"">';
	self.image4 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/f/fe/Ayden_Segawa.png/revision/latest/scale-to-width-down/133?cb=20121231180325">';
	self.image5 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/b/b8/Emily_Cox.png/revision/latest/scale-to-width-down/133?cb=20121231194018">';
	self.image6 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/1a/Angela_Segawa_HD.png/revision/latest/scale-to-width-down/135?cb=20160811060204">';
	self.image7 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/f/f9/Joshua_Balvin_%28Male%29.png/revision/latest/scale-to-width-down/135?cb=20160811055945">';
	self.image8 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/0/0b/Student.png/revision/latest/scale-to-width-down/133?cb=20130202215706">';
	self.image9 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/3/32/Student_Female.png/revision/latest?cb=20130202215917">';
	self.image10 = '<img class="turn-image" src="https://vignette.wikia.nocookie.net/scribblenauts/images/0/03/Communist.png/revision/latest/scale-to-width-down/133?cb=20130203194149">';
	self.image11 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/1/13/Boss_Female.png/revision/latest?cb=20130112223116">';
	self.image12 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/a/a8/Sensei_Male.png/revision/latest/scale-to-width-down/133?cb=20130120191044">';
	self.image13 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/73/Schoolboy.png/revision/latest/scale-to-width-down/100?cb=20130104203544">';
	self.image14 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/70/Sheriff_Female.png/revision/latest?cb=20130105162749">';
	self.image15 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/8/84/Actress.png/revision/latest?cb=20130106184930">';
	self.image16 = '<img src="https://vignette.wikia.nocookie.net/scribblenauts/images/3/3e/Bookie_Male.png/revision/latest/scale-to-width-down/128?cb=20130105142028">';
}


// -- UPDATE

Voters.prototype.draw = function(){
	var self = this;

	console.log(self.x, self.y);
	var index = self.y * 10 + self.x;

	self.grid[index].innerHTML = self.image1;
	self.grid[index+1].innerHTML = self.image2;
	self.grid[index+2].innerHTML = self.image3;
	self.grid[index+3].innerHTML = self.image4;
	self.grid[index+4].innerHTML = self.image5;
	self.grid[index+10].innerHTML = self.image6;
	self.grid[index+11].innerHTML = self.image7;
	self.grid[index+12].innerHTML = self.image8;
	self.grid[index+13].innerHTML = self.image9;
	self.grid[index+14].innerHTML = self.image10;

	self.grid[index-31].innerHTML = self.image11;
	self.grid[index-32].innerHTML = self.image12;
	self.grid[index-33].innerHTML = self.image13;
	self.grid[index-34].innerHTML = self.image14;
	self.grid[index-41].innerHTML = self.image15;
	self.grid[index-42].innerHTML = self.image16;
}
