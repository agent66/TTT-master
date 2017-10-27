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
	filled = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	symbol = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
	winner = [[0,1,2,3,4,5,6], [7,8,9,10,11,12,13], [14,15,16,17,18,19,20], [21,22,23,24,25,26,27], [28,29,30,31,32,33,34], [35,36,37,38,39,40,41], [42,43,44,45,46,47,48], [0,7,14,21,28,35,42], [1,8,15,22,29,36,43],[2,9,16,23,30,37,44],[3,10,17,24,31,38,45],[4,11,18,25,32,39,46],[5,12,19,26,33,40,47],[6,13,20,27,34,41,48],[0,8,16,24,32,40,48],[6,12,18,24,30,36,42]];

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
			case "canvas26": num = 26;
							break;
			case "canvas27": num = 27;
							break;
			case "canvas28": num = 28;
							break;
			case "canvas29": num = 29;
							break;
			case "canvas30": num = 30;
							break;
			case "canvas31": num = 31;
							break;
			case "canvas32": num = 32;
							break;
			case "canvas33": num = 33;
							break;
			case "canvas34": num = 34;
							break;
			case "canvas35": num = 35;
							break;
			case "canvas36": num = 36;
							break;
			case "canvas37": num = 37;
							break;
			case "canvas38": num = 38;
							break;
			case "canvas39": num = 39;
							break;
			case "canvas40": num = 40;
							break;
			case "canvas41": num = 41;
							break;
			case "canvas42": num = 42;
							break;
			case "canvas43": num = 43;
							break;
			case "canvas44": num = 44;
							break;
			case "canvas45": num = 45;
							break;
			case "canvas46": num = 46;
							break;
			case "canvas47": num = 47;
							break;
			case "canvas48": num = 48;
							break;
			case "canvas49": num = 49;
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
					if((symbol[winner[j][0]] == s) && (symbol[winner[j][1]] == s) && (symbol[winner[j][2]] == s) && (symbol[winner[j][3]] == s) && (symbol[winner[j][4]] == s) && (symbol[winner[j][5]] == s) && (symbol[winner[j][6]] == s)) {
						document.getElementById("result").innerText = "Player '" + s + "' won!";
						gameOver = true;
					}
				}

				//draw condition
				// turn > 0 gameOver == false

				if(turn > 49 && gameOver != true) {
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
