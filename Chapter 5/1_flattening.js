/*
**************************************************************************************************************************************************
Problem: Flattening
    Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array 
    that has all the elements of the original arrays.

    let arrays = [[1, 2, 3], [4, 5], [6]];
    // Your code here.
    // → [1, 2, 3, 4, 5, 6]

**************************************************************************************************************************************************
*/
function flatten(arry){
    return arry.reduce((a,b)=> a.concat(b));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

// → [1, 2, 3, 4, 5, 6]



