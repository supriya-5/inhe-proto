// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    fname : "vishnu",
    lname : "priya",
    course : "MERN",
    age : 22
}

let child = {
    fname : "gayu",
}

child.__proto__ = parent;

console.log(child);
console.log(child.course);



// Write code to explain prototype chaining

console.log(child.__proto__);//parentprototype
console.log(child.__proto__.__proto__);//obj
console.log(child.__proto__.__proto__.__proto__);//null

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const arr = [1,2,3,4,5];

const arr1 = arr.reduce((acc,cur) => acc = acc + cur,0);
console.log(arr1);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const js = {
    fname : "durga",
    lname :"devi",
}

function inherited(){
    console.log(Object.keys(js));
}
inherited();








