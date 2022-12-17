/*
**************************************************************************************************************************************************
Problem: Everything
    Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every 
    element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

    Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one 
    using the some method.

    console.log(every([1, 3, 5], n => n < 10));
    // → true
    console.log(every([2, 4, 16], n => n < 10));
    // → false
    console.log(every([], n => n < 10));
    // → true   
**************************************************************************************************************************************************
*/
console.log("using a loop:")
function every(array, test) {
    let fray = true;
    array.forEach(n => {
        if(test(n) === false){
            fray = false;
            
        }
    });
    return fray;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true   

  console.log("using every function:")
  function everyevery(array, test) {
    return array.every(test);
    //return fray;
  }
  
  console.log(everyevery([1, 3, 5], n => n < 10));
  // → true
  console.log(everyevery([2, 4, 16], n => n < 10));
  // → false
  console.log(everyevery([], n => n < 10));
  // → true   

  console.log("using some function:")
  function everysome(array, test) {
    return array.some(test);
    //return fray;
  }
  
  console.log(everysome([1, 3, 5], n => n < 10));
  // → true
  console.log(everysome([2, 4, 16], n => n < 10));
  // → false
  console.log(everysome([], n => n < 10));
  // → true   

