function Letter(letter) {
    this.letter = letter;
    this.guess = false;
    this.toString = function () {
       if(this.letter === " "){
           this.guess = true;
       } else if (this.guess === false){
           return "_";
       } else {
           return this.letter;
       }
    }
    this.letterCheck = function (check) {
        if (check === this.letter) {
            this.guess = true;
        }
    }
}


module.exports = Letter;