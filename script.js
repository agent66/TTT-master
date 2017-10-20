// 5 parts

//anonymous function

window.onload = function() {

	//1. Initial states

	var num;
	var box;
	var ctx;
	var turn = 1;
	var filled;
	var symbol;
	var winner;
	var gameOver = false;
	filled = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	symbol = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
	winner = [[0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14], [15,16,17,18,19], [20,21,22,23,24], [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];

	//2. NewGame - event + function
	//Create a new game click event

	var n = document.getElementById("new");
	n.addEventListener("click", newGame);

	//newGame function

	function newGame() {
		document.location.reload();
	}

	//3. Canvas click + retrieving the box's number
	//canvas click event

	document.getElementById("TTT").addEventListener("click", function(e) {
		boxClick(e.target.id);
	});


	function boxClick(numId) {
		box = document.getElementById(numId);
		ctx = box.getContext("2d");


		switch(numId) {
			case "canvas1": num = 1;
							break;
			case "canvas2": num = 2;
							break;
			case "canvas3": num = 3;
							break;
			case "canvas4": num = 4;
							break;
			case "canvas5": num = 5;
							break;
			case "canvas6": num = 6;
							break;
			case "canvas7": num = 7;
							break;
			case "canvas8": num = 8;
							break;
			case "canvas9": num = 9;
							break;
			case "canvas10": num = 10;
							break;
			case "canvas11": num = 11;
							break;
			case "canvas12": num = 12;
							break;
			case "canvas13": num = 13;
							break;
			case "canvas14": num = 14;
							break;
			case "canvas15": num = 15;
							break;
			case "canvas16": num = 16;
							break;
			case "canvas17": num = 17;
							break;
			case "canvas18": num = 18;
							break;
			case "canvas19": num = 19;
							break;
			case "canvas20": num = 20;
							break;
			case "canvas21": num = 21;
							break;
			case "canvas22": num = 22;
							break;
			case "canvas23": num = 23;
							break;
			case "canvas24": num = 24;
							break;
			case "canvas25": num = 25;
							break;


		}

		//Drawing the shapes on the canvases

		if(filled[num-1] == false) {
			if(gameOver == false) {
				if(turn%2 != 0) {
					ctx.beginPath();
					ctx.moveTo(15,15);
					ctx.lineTo(85,85);
					ctx.moveTo(85,15);
					ctx.lineTo(15,85);
					ctx.strokeStyle = "dodgerblue";
					ctx.stroke();
					ctx.closePath();
					symbol[num-1] = 'X';
				}
				else {
					ctx.beginPath();
					ctx.arc(50, 50, 35, 0, 2 * Math.PI, false);
					ctx.strokeStyle = "red";
					ctx.stroke();
					ctx.closePath();
					symbol[num-1] = 'O';
				}
				turn++;
				filled[num-1] = true;

				//5. Winner check

				var s = symbol[num-1];
				for(var j=0; j < winner.length; j++) {
					if((symbol[winner[j][0]] == s) && (symbol[winner[j][1]] == s) && (symbol[winner[j][2]] == s) && (symbol[winner[j][3]] == s) && (symbol[winner[j][4]] == s)) {
						document.getElementById("result").innerText = "Player '" + s + "' won!";
						gameOver = true;
					}
				}

				//draw condition
				// turn > 0 gameOver == false

				if(turn > 25 && gameOver != true) {
					document.getElementById("result").innerText = "GAME OVER! IT WAS A DRAW!";
				}
			}
			else {
				alert("Game is over. Please click on the New Game button to start again.");
			}
		}
		else {
			alert("This box was already filled. Please click on another one.")
		}
	}
}
