'use strict'

function Game(parentElement) {
	var self = this;

	self.parentElement = parentElement;
	self.mainContentElement = null;
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

	self.time = 29;
	self.hint = "don't think twice, hit them hard";
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
				<div class="time">
					<p>
					<span class="label">time:</span>
					<span class="value">`+ (self.time + 1) +`</span>
					</p>
				</div>
				<div class="hint">
					<p>
					<span class="label"></span>
					<span class="value">`+ (self.hint) +`</span>
					</p>
				</div>
				<div class="score">
					<p>
					<span class="label">score:</span>
					<span class="value">`+ (self.score) +`</span>
					</p>
				</div>
			</div>
			<div class="main">
				<div class="board"></div>
			</div>
			<div class="footer">
					
			</div>
		</div>
	</div>`);
	// --
	self.mainContentElement = document.querySelector('body');
	// debugger;
	self.mainContentElement.classList.add('background-white');
	self.boardElement = self.gameScreenElement.querySelector('.board');
	self.timeElement = self.gameScreenElement.querySelector('.time .value');
	self.scoreElement = self.gameScreenElement.querySelector('.score .value');
	self.hintElement = self.gameScreenElement.querySelector('.hint .value');
	
	self.buildBoard();
	
	
	//self.hintElement = self.gameScreenElement.querySelector('.hint .value');
	//self.scoreElement = self.gameScreenElement.querySelector('.score .value');
	
	self.grid = self.gameScreenElement.querySelectorAll('.element');
	self.parentElement.appendChild(self.gameScreenElement);
	// debugger;
	document.body.addEventListener('keydown', function(){
		self.player.update(event);
		self.player.draw();
		self.scoreElement.innerText = self.player.score;
		self.hintElement.innerText = self.player.hint;

	});

	self.player = new Player(self.grid);
	self.voters = new Voters(self.grid);
	self.ballotBox = new BallotBox(self.grid);

}

Game.prototype.play = function () {
	var self = this;
	
	console.log('the game start');

	self.player.draw();
	self.voters.draw();
	self.ballotBox.draw();
	
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
      self.board[i] += '<div class="element" value="' + i + j + '"></div>';
    }
    self.board[i] += '</div>';
  }

	//create the 2d board
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			self.grid[i][j] += '<div class="element" value="' + i + j + '"></div>';
		}
	}

	self.boardElement.innerHTML = self.board.join('');
	// console.log(self.board);
}
/*
Game.prototype.hit = function () {
	var self = this;

	self.player.hit();
	self.scoreElement.innerHTML = self.player.score;
	console.log(self.scoreElement);
}
*/