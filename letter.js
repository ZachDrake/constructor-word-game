function Letter(letter, guess) {
    this.letter = letter;
    this.guess = guess;
    this.toString = function() {
        if (this.guess === false) {
            return "_";
        }else {
            return this.letter;
        }
    }
    this.letterCheck = function(check) {
        if(this.letter === check) {
            this.guess = true;
        }
    }
}
var a = new Letter("a", false);
console.log(a.toString());

module.exports = Letter;