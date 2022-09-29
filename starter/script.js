'use strict';
 /* console.log (document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!!!';
console.log (document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent =11;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 26;*/

const secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click' , function(){
	 const guess = Number (document.querySelector('.guess').value);
	 console.log(guess, typeof guess)

	 if(!guess){
		document.querySelector('.message').textContent =
		'No number!!!'
	 }else if(guess === secretNumber){
		document.querySelector('.message').textContent = 'Correct number!!!';
	 }else if( guess > secretNumber){
		if(score > 1){
			document.querySelector('.message').textContent = 'TOO HIGH!'
		score--;
		document.querySelector('.score').textContent =score;
		}else{
			document.querySelector('.message').textContent = 'you are lose'
		}

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
