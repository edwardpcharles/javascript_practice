/*
**************************************************************************************************************************************************
Problem: A list
    A nice thing about lists is that they can share parts of their structure. 
    For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}, they are both independent lists, 
    but they share the structure that makes up their last three elements. 

    Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
    Also write a listToArray function that produces an array from a list. 
    Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 
    and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
    or undefined when there is no such element.

    If you haven’t already, also write a recursive version of nth.

    console.log(arrayToList([10, 20]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20

**************************************************************************************************************************************************
*/
function arrayToList(arry){
    let list = {};
    for(i=arry.length-1; i>=0; i--){
       //original Solution:
        /*if (Object.keys(list).length === 0){
            list.value = arry[i];
            list.rest = {};
        } else {
            list.rest = JSON.stringify(list);
            list.rest = JSON.parse(list.rest);
            list.value = arry[i];
        }*/
        //new solution with prepend function
        list = prepend(arry[i], list);
    }
    return list;
} 

function listToArray(lst){
    let arry = [];
    while (lst.rest != null){
        arry.push(lst.value)
        lst = lst.rest;
    }
    return arry;
}

function prepend(value,lst){
    let list = {};
    list.value = value;
    list.rest = lst;
    return list;
}

function nth(lst,find){
    let return_var = 0;
    if (find===0){
        return_var = Object.values(lst)[0];
        return return_var
    } else if (find>0 && lst.rest !=null){
        find--;
        return nth(lst.rest,find);
    } 
}


console.log(arrayToList([10, 20,30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
