var Letter = require("./letter.js");

function Word(word) {
    this.temp = [];
    for (var i = 0; i < word.length; i++){
        var letter = new Letter(word[i]);
        this.temp.push(letter);
    }
    console.log(this.temp);
}

var test = new Word("test");

