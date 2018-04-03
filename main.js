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
				<h1>Find the treasure</h1>
				<button>start game</button>
				<div class="instructions">
					<p>guess where is the treasure</p>
					<p>60 seconds to achieve</p>
					<p>if you don't guess you suck</p>
				</div>
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