function Letter(letter) {
    this.letter = letter;
    this.guess = false;
    this.toString = function () {
        if (this.guess === false) {
            return "_";
        } else {
            return this.letter;         
        }
    }
    this.letterCheck = function (check) {
        check = "a";
        if (this.letter === check) {
            this.guess = true;
        } else {
            this.guess = false;
        }
    }
}


module.exports = Letter;