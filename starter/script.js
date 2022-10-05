'use strict';
 /* console.log (document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!!!';
console.log (document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent =11;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 26;*/

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore	=	0;


document.querySelector('.check').addEventListener('click' , function(){
	 const guess = Number (document.querySelector('.guess').value);
	 console.log(guess, typeof guess)
	// When there is no input

	 if(!guess){
		document.querySelector('.message').textContent =
		'No number!!!'
		// When player wins
	 }else if(guess === secretNumber){
		document.querySelector('.message').textContent = 'Correct number!!!';
		document.querySelector('body').style.backgroundColor	=	'green';
		document.querySelector('.number').style.width	=	'30rem';
		document.querySelector('.number').textContent = secretNumber;

		if(score	>	highScore){
			highScore	=	score;
			document.querySelector('.highscore').textContent	=	highScore;
		}
		// When guess is too high
	 }else if( guess > secretNumber){
		if(score > 1){
			document.querySelector('.message').textContent = 'TOO HIGH!'
		score--;
		document.querySelector('.score').textContent =score;
		}else{
			document.querySelector('.message').textContent = 'you are lose'
		}
		// When guess is too low
	}else if( guess < secretNumber){
		if(score > 1){
			document.querySelector('.message').textContent = 'TOO low!'
		score--;
		document.querySelector('.score').textContent =score;
		}else{
			document.querySelector('.message').textContent = 'you are lose'
		}

	 }
})
document.querySelector('.again').addEventListener('click', function(){
	score =	'20';
	secretNumber = Math.trunc(Math.random() * 20) +1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('body').style.backgroundColor	=	'#222';
	document.querySelector('.score').textContent =score;
	document.querySelector('.guess').value = ' ';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width	=	'15rem';
})
