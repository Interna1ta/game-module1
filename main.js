'use strict'

function createHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}


function main() {

	// -- TITLE SCREEN

	var titleScreenElement;
	var startButtonElement;
	
	function handleClick() {
		destroyTitleScreen();
		buildGameScreen();
	}

	var mainContentElement = document.getElementById('main-content');

	function buildTitleScreen() {
		titleScreenElement = createHtml(`<div id="main-content">
			<div class="title-screen">
				<span class="viewPortSize"></span>
				<h1 class="title">WHERE ARE<br>THE BALLOT BOXES?</h1>
				<div class"instructions">
					<ul class="list-instructions">
						<li><p>Get all the ballot boxes</p></li>
						<li><p>60 seconds to achieve</p></li>
						<li><p>if you don't guess you suck</p></li>
					</ul>
				</div>
				<div><button class="startGame">A POR ELLOS!!!</button></div>
				<span class="viewPortSize"></span>
			</div>
		</div>`);
		//--
		mainContentElement.appendChild(titleScreenElement);
		startButtonElement = titleScreenElement.querySelector('button');
		startButtonElement.addEventListener('click', handleClick);
	}

	function destroyTitleScreen() {
		titleScreenElement.remove();
		startButtonElement.removeEventListener('click', handleClick);
	}


	// -- GAME SCREEN

	var game;
	var mainGameScreen;

	function gameEnded() {
		console.log('im dead')
		destroyGameScreen();
		buildGameOverScreen();
	}

	function buildGameScreen() {
		game = new Game(mainContentElement);
		game.onEnded(function(){
				gameEnded();
		});
		game.build();
		game.play();
	}

	function timeOut() {
		destroyGameScreen();
		//debugger;
		buildGameOverScreen();
	}

	function destroyGameScreen(){
		mainGameScreen = document.getElementById('main-game');
		mainGameScreen.remove();
	}


	// -- GAME OVER SCREEN

	var gameOverScreenElement;
	var restartGameButtonElement;

	function handleRestartClick() {
		destroyGameOverScreen();
		buildGameScreen();
	}

	function buildGameOverScreen(){
		gameOverScreenElement = createHtml(`<div class="game-over-screen">
			<h1>Score: 55</h1>
			<button>restart game</button>
		</div>`);
		// --
		mainContentElement.appendChild(gameOverScreenElement);
		restartGameButtonElement = gameOverScreenElement.querySelector('button');
		restartGameButtonElement.addEventListener('click', handleRestartClick);
	}

	function destroyGameOverScreen(){
		gameOverScreenElement.remove();
		restartGameButtonElement.removeEventListener('click', handleRestartClick);
	}
    

  // -- start the app

  buildTitleScreen();
}

window.addEventListener('load', main);