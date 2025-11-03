let x = 0;
let w = 0;

function answerfunction() {

	let compScore = x;
	let manScore = w;

	function getComputerChoice(){
	let x = Math.floor(Math.random()*3);
	const choices = ["ROCK","PAPER","SCISSORS"];
	return choices[x];
	}

	let compChoice = getComputerChoice();

	var a = document.getElementById("answer").value;
	var manChoice = a.toUpperCase();
	var c = document.getElementById("Cscore");
	var m = document.getElementById("Mscore");

	function playRound(manChoice,compChoice){

		var r = document.getElementById("result");
		if (manChoice == "ROCK"){
			if (compChoice == "PAPER"){
				r.innerHTML = "You lost! Paper beats rock.";
				compScore++;
			}else if (compChoice == "SCISSORS"){
				r.innerHTML = "You won! Rock beats scissors";
				manScore++;
			}else if (compChoice == "ROCK"){
				r.innerHTML = "It's a draw";
			}
		}else if (manChoice == "PAPER"){
			if (compChoice == "PAPER"){
				r.innerHTML = "It's a draw";
			}else if (compChoice == "SCISSORS"){
				r.innerHTML = "You lost! Scissors beats paper.";
				compScore++;
			}else if (compChoice == "Rock"){
				r.innerHTML = "You won! Paper beats rock.";
				manScore++;
			}
		}else if (manChoice == "SCISSORS"){
			if (compChoice == "PAPER"){
				r.innerHTML = "You won! Scissors beats paper.";
				manScore++;
			}else if (compChoice == "SCISSORS"){
				r.innerHTML = "It's a draw";
			}else if (compChoice == "ROCK"){
				r.innerHTML = "You lost! Rock beats scissors.";
				compScore++;
			}
		}
		x = compScore;
		w = manScore;
		c.innerHTML = compScore;
		m.innerHTML = manScore;
	}

	playRound(manChoice,compChoice);
}
