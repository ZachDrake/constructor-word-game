var word = require("./word.js");
var inquirer = require("inquirer");

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var theOffice = ["athlead", "sprinkles", "comstock", "belschnickel",
    "scranton", "stamford", "hank"];

var random = Math.floor(Math.random() * theOffice.length);
var randomWord = theOffice[random];

var newWord = new word(randomWord);

var requireNewWord = false;

var incorrectLetters = [];
var correctLetters = [];

var remainingGuesses = 10;

console.log("The Office Themed Word Guess Game!\n\n")


function main() {
    if (requireNewWord) {
        var random = Math.floor(Math.random() * theOffice.length);
        var randomWord = theOffice[random];

        newWord = new word(randomWord);

        requireNewWord = false;
    }

    var completeWord = [];
    newWord.temp.forEach(completeCheck);

    if (completeWord.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess the word by selecting a letter",
                    name: "userGuess"
                }
            ]).then(function (response) {
                if (!alphabet.includes(response.userGuess) ||
                    response.userGuess.length > 1) {
                    console.log("\ntry again!\n");
                    main();
                } else {
                    if (incorrectLetters.includes(response.userGuess) ||
                        correctLetters.includes(response.userGuess) ||
                        response.userGuess === "") {
                        console.log("\nLetter has already been guessed or nothing was entered.\n")
                        main();
                    } else {
                        var checkWordArray = [];
                        newWord.userGuess(response.userGuess);

                        newWord.temp.forEach(wordCheck)
                        if (checkWordArray.join("") === completeWord.join("")) {
                            console.log("\nincorrect");

                            incorrectLetters.push(response.userGuess);
                            remainingGuesses--;
                        } else {
                            console.log("\nCorrect");
                            correctLetters.push(response.userGuess);
                        }
                        newWord.display();
                        console.log("Remaining guesses: " + remainingGuesses + "\n");
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        if (remainingGuesses > 0) {
                            main();
                        } else {
                            console.log("No Remaining Guesses, You lost!\n");
                            restartGame();
                        }
                        function wordCheck(key) {
                            checkWordArray.push(key.guess);
                        }
                    }
                }
            });
    } else {
        console.log("You win!\n");
        restartGame();
    }

    function completeCheck(key) {
        completeWord.push(key.guess);
    }
}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                mesaage: "Want to play again?",
                choices: ["Yes, play again", "No, get me out of here"],
                name: "restart"
            }
        ])
        .then(function (response) {
            if (response.restart === "Yes, play again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                remainingGuesses = 10;
                main();
            } else {
                return;
            }
        })
}

main();