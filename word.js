var Letter = require("./letter.js");

function Word(word) {
    this.temp = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        this.temp.push(letter);
    }
    
    this.display = function() {
        var answer = "";
        for(var i = 0; i < this.temp.length; i++){
            answer += this.temp[i] + " ";
        }
        console.log(answer);
        console.log("--------------");
    };

    this.userGuess = function(input) {
        for(var i = 0; i < this.temp.length; i++){
            this.temp[i].letterCheck(input);
        }
    };
}

module.exports = Word;

