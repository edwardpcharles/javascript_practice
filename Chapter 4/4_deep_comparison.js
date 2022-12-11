/*
**************************************************************************************************************************************************
Problem: 
    The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

    Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
    where the values of the properties are equal when compared with a recursive call to deepEqual.

    To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. 
    If it produces "object" for both values, you should do a deep comparison. 
    But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

    The Object.keys function will be useful when you need to go over the properties of objects to compare them.

    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
    // → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    // → true

**************************************************************************************************************************************************
*/
function deepEqual(item1, item2){
    if (item2 === null || item1 === null){
        if (item1 === item2){
            return true;
        } else{
            return false;
        }
    } else if (typeof item1 === 'object' && typeof item2 === 'object'){
        while(Object.keys(item1).length > 0) {
            let compare_key1 = Object.keys(item1)[0];
            let compare_key2 = Object.keys(item2)[0];
            if(compare_key1 === compare_key2){
                return deepEqual(item1[compare_key1],item2[compare_key2])
            } else {
                return false;
            }
            delete item1[compare_key1];
            delete item2[compare_key2];
        }
        return true;
    } else if (item1 === item2){
        return true;
    } else {
        return false;
    }
} 

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, null));