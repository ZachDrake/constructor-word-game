# constructor-word-game
The Office word guess command-line game using constructor functions.

This game is made up of three files:
Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
Index.js: The file containing the logic for the course of the game, which depends on Word.js.

demo gif: https://github.com/ZachDrake/constructor-word-game/blob/master/constructor_word_game.gif

Problems I will have to address:
-The word does not display until after the user's first guess. 