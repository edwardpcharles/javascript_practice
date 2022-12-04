/*
**************************************************************************************************************************************************
Problem: ChessBoard
    Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
    At each position of the grid there is either a space or a "#" character. 
    The characters should form a chessboard.

    Passing this string to console.log should show something like this:

     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # #

    When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

**************************************************************************************************************************************************
*/

let size = 10;
let chessboard = '';
let lastchar = '';

//building the chessboard
for(i=0;i<size; i++){
    /*
        Building each individual line 
    */
    for(x=0; x<size;x++){
        if(lastchar.length === 0){
            chessboard = chessboard + ' ';
            lastchar = ' ';
        } else if(lastchar === ' '){
            chessboard = chessboard + '#';
            lastchar = '#';
        } else {
            chessboard = chessboard + ' ';
            lastchar = ' ';
        }
    }
    /*
        Checking to see what the last character on the line was
        to make sure the new line starts with the opposite character
    */
    if (lastchar === ' ' && size % 2 === 0){
        lastchar = '#';
    } else if (lastchar === '#' && size % 2 === 0){
        lastchar = ' ';
    }
    chessboard = chessboard +  '\n';
}
//Removing the extra new line
chessboard = chessboard.substring(0,chessboard.length -1)

console.log(chessboard);

