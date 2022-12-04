/*
Looping a triangle  
    Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######
    It may be useful to know that you can find the length of a string by writing .length after it.

        1 - let abc = "abc";
        2 - console.log(abc.length);
        3 - // → 3
*/

let tri_counter = 0;
let string = ''
while (tri_counter <=6){
    string = string + '#'
    console.log(string);
    tri_counter++;
}