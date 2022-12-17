/*
**************************************************************************************************************************************************
Problem: Dominant writing direction
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

    The dominant direction is the direction of a majority of the characters that have a script associated with them.
    The characterScript and countBy functions defined earlier in the chapter are probably useful here.

    function dominantDirection(text) {
    // Your code here.
    }

    console.log(dominantDirection("Hello!"));
    // → ltr
    console.log(dominantDirection("Hey, مساء الخير"));
    // → rtl
**************************************************************************************************************************************************
*/
import { SCRIPTS } from './scripts.js'

function dominantDirection(text) {
    let direction = [];
    let agg_dir = {};
    for(let i = 0; i <text.length; i++){
        SCRIPTS.forEach(n => {
            n['ranges'].forEach(x =>{
                if(text.charCodeAt(i) > x[0] && text.charCodeAt(i) <= x[1]){
                    direction.push(n['direction']);
                    
                }
            });
        });
    }
    for (const dir of direction) {
        agg_dir[dir] = agg_dir[dir]  ? agg_dir[dir] + 1 : 1;
      }
    
    return Object.entries(agg_dir).sort((a,b) => b[1]-a[1])[0][0];
    }

    console.log(dominantDirection("Hello!"));
    // → ltr
    console.log(dominantDirection("Hey, مساء الخير"));
    // → rtl



