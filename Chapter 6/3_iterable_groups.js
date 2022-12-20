/*
**************************************************************************************************************************************************
Problem: Iterable groups
    Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if
    you aren’t clear on the exact form of the interface anymore.

    If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on 
    the array. That would work, but it defeats the purpose of this exercise.

    It is okay if your iterator behaves strangely when the group is modified during iteration.

    for (let value of Group.from(["a", "b", "c"])) {
        console.log(value);
    }
    // → a
    // → b
    // → c
**************************************************************************************************************************************************
*/

class Group {
// Your code here.
    constructor(){
        this.grp =[]
        this.first = 0;
    }
    
    static from(value){
        let grps = new Group;
        while (value.length !== 0){
            grps.grp.push(value[0]);
            value.shift();
        }
        return grps;
    }

    add(value){
        if(this.grp.includes(value)){
            console.log('Value already exists in group');
        } else {
            this.grp.push(value);
            console.log(`Value ${value} added to group`);
        }
    }

    delete(value){
        let index = this.grp.indexOf(value);
        while( index > -1){
            this.grp.splice(index, 1);
            index = this.grp.indexOf(value);
        }
    }

    has(value){
        if(this.grp.indexOf(value) != -1){
            return true;
        } else {
            return false;
        }
    }

    [Symbol.iterator] () {
        let arry = this.grp;
        let first = this.first;
       return {
        next(){
            if (first < arry.length){
                let value = arry[first]
                first++;
                return {value, done: false};
            } else {return {done: true};}
       }
    }
    }
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c


