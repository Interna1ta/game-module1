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
				<!--<img class="icons" src="https://vignette.wikia.nocookie.net/scribblenauts/images/5/57/Cruise_Liner.png/revision/latest/scale-to-width-down/200?cb=20130224165337">-->
				<div class="instructions">
					<!--<img class="icons" src=https://vignette.wikia.nocookie.net/scribblenauts/images/8/8f/Groupie.png/revision/latest/scale-to-width-down/133?cb=20130120215149">-->
					<ul class="list-instructions">
						<li><p>Get all the ballot boxes</p></li>
						<li><p>30 seconds to achieve</p></li>
						<li><p>if you don't get all you suck</p></li>
					</ul>
					<!--<img class="icons" src="https://vignette.wikia.nocookie.net/scribblenauts/images/7/74/Guard.png/revision/latest/scale-to-width-down/133?cb=20130119210144">-->
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

	function buildGameOverScreen() {
		gameOverScreenElement = createHtml(`<div class="game-over-screen">
			<span class="viewPortSize"></span>
			<h1 class='title'>GAME OVER</h1>
			<p class='subtitle'>Great job, <br>you didn't avoid the votation</p>
			<div><button>restart game</button></div>
			<span class="viewPortSize"></span>
		</div>`);
		// --
		mainContentElement.appendChild(gameOverScreenElement);
		restartGameButtonElement = gameOverScreenElement.querySelector('button');
		restartGameButtonElement.addEventListener('click', handleRestartClick);
		document.querySelector('body').classList.remove('background-white');
	}

	function destroyGameOverScreen() {
		gameOverScreenElement.remove();
		restartGameButtonElement.removeEventListener('click', handleRestartClick);
	}
    

  // -- start the app

  buildTitleScreen();
}

window.addEventListener('load', main);