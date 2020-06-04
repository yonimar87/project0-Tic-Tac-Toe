# Tic Tac Toe - Yoni's Version
---

This was quite an interesting project. It was pretty great to see how many different ways people can code this game and obviously the different CSS and JavaScript functionalities.

To access the game please visit the following link:
https://yonimar87.github.io/project0-Tic-Tac-Toe/

To complete the game the following languages were used:

* HTML
* CSS
* JavaScript
* jQuery

The way I approached the project was to initially build an HTML and CSS attributes to ensure I have a working table to be able to implement the actual game onto. Once this was established I started with JavaScript and jQuery

The plan was to come up with variables and then the functions that will be using them. I have a couple of global functions and variables, while the rest of the functions are all within the working one.

I've used hidden and visibility + opacity to make animations happen on the side of the screen once we click on the start button.

in order to select an image and use it for the table, I used outerHTML from JavaScript to convert the image to a string and then input the string into the cell. This is used by using the 'this' attribute so we know which image is selected and also which box is selected to do so.

In order for a box to not be used twice, I've got an empty array that is filled with the id's of the images - once there is an id in the box, another one cannot be added.

Turns are determined via a counter. Each even turn is player 1, while odd turns are player two.

I've set up a function that once 5 wins have been established, the entire game restarts (after having an alert advising of who won based on which turn acted last )
