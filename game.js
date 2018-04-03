'use strict'

function Game(parentElement) {
	var self = this;

	self.parentElement = parentElement;
	self.gameScreenElement = null;

	self.timeElement = null;
	self.scoreElement = null;
	self.hintElement = null;

	self.player = null;

	
	//self.voters = new Voters();
	self.treasure = {x: 0, y: 0, show: 'no'};
	self.guesses = null;
	self.board = [];
	self.grid = [[],[],[],[],[],[],[],[],[],[]];
	self.numberIndex = null;
	self.previousIndex = [0,0];

	self.time = 50;
	self.hint = null;
	self.score = 0;
}


// -- TITLE SCREEN

Game.prototype.onEnded = function(cb) {
	var self = this;
	
	self.callback = cb;
}

Game.prototype.build = function () {
	var self = this;
	// self.grid = [[],[],[],[],[],[],[],[],[],[]];

	self.gameScreenElement = createHtml(`<div id="main-game">
		<div class="game-screen">
			<div class="header">
				<p class="time">
				<span class="label">time:</span>
				<span class="value">`+ (self.time + 1) +`</span>
				</p>
				<p class="hint">
				<span class="label">hint:</span>
				<span class="value">`+ (self.hint + 1) +`</span>
				</p>
				<p class="score">
				<span class="label">score:</span>
				<span class="value">`+ (self.score + 1) +`</span>
				</p>
			</div>
			<div class="main">
				<div class="board"></div>
			</div>
			<div class="footer">
					
			</div>
		</div>
	</div>`);
	// --
	self.boardElement = self.gameScreenElement.querySelector('.board');
	self.timeElement = self.gameScreenElement.querySelector('.time .value');

	self.buildBoard();
	
	//self.hintElement = self.gameScreenElement.querySelector('.hint .value');
	//self.scoreElement = self.gameScreenElement.querySelector('.score .value');
	
	self.parentElement.appendChild(self.gameScreenElement);
	// debugger;
	document.body.addEventListener('keydown', function(){
		self.player.update(event);
		self.grid = self.gameScreenElement.querySelectorAll('.element');

		self.player.draw(self.grid);

	});

	self.player = new Player(self.grid);

	
}

Game.prototype.play = function () {
	var self = this;
	
	console.log('the game start');
	
	window.setInterval(function(){
		self.timeElement.innerText = self.time--;
		
		if (self.time == 0) {
			self.callback();
		}
	}, 1000)
}

Game.prototype.buildBoard = function () {
  var self = this;

  //create the 2d board
  for (var i = 0; i < 10; i++) {
    self.board[i] = '<div class="row">';
    for (var j = 0; j < 10; j++) {
      self.board[i] += '<div class="element" value="' + i + j + '">a</div>';
    }
    self.board[i] += '</div>';
  }


	//create the 2d board
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			self.grid[i][j] += '<div class="element" value="' + i + j + '">a</div>';
		}
	}
/*
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			self.board[i][j].push = (['<div class="row"><div class="element" value="' + i + j + '">a</div></div>']);
		}
	}
*/
	self.boardElement.innerHTML = self.board.join('');
	// console.log(self.board);
}

Game.prototype.hit = function () {
  var self = this;

}
