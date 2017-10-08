//array of words
const words = ["paradise", "tropical", "vacation", "palmtrees", "stressless", "chilling"];

//random words
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName("undesrcore");
let docRightGuess = document.getElementsByClassName("rightGuess");


console.log(choosenWord);

let generateUnderscore = () => {
	for(let i = 0; i < choosenWord.length; i++) {
		underScore.push("_");
	}
	return underScore;
}


console.log(generateUnderscore());

//w3school keycode??
document.addEventListener("keypress", (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	//right guess
	if (choosenWord.indexOf(keyword) > -1) {
		rightWord.push(keyword);
		console.log(underScore);

		}else {
			wrongWord.push(keyword);
			underScore[choosenWord.indexOf(keyword)] = keyword;
				if(underScore.join("") = keyword);
				alert("Thats right");
				console.log(underScore);

		}
	
});

// works on console, but has an error

//wanted to make box of letter disappear 
//after it has been selected

//box with letter comes back when new game 