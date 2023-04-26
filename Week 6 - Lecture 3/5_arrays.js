/** Understanding Arrays 
 * Arrays are a special type of object that can hold multiple values
 * Arrays are indexed starting at 0
 * Arrays are ordered
*/


let persons = ["perspn1", "person2"];

/** Array Traversal */
for(let i=0; i < persons.length; i+=1) {
    console.log(persons[i]);
}


/** N-Dimensional Arrays  */
let matrix2d = [[1,2,3],
              [4,5,6, ["ali"]],
              [8,9,10]
             ];

console.log(matrix2d[1][3][0]);


let students = [
    ["Ali", 5, 10, 13, "ali@gmail.com", "9983923982893"],
    ["Osama", 6, 8, "osama@gmail.com", "298392839823"],    
    ["Taha", 7, 8, "osama@gmail.com", "298392839823"],
    ["Umer", 8, 8, "osama@gmail.com", "298392839823"],
];




// students.push( ["John", 8, 8, "john@gmail.com", "298392839823"])
// students.pop();
// students.pop();
// students.pop();

// students.unshift( ["Hamza", 7, 8, "hamza@gmail.com", "298392839823"]);
// students.shift();

students.splice(1, 2, ["Hamza", 7, 8, "hamza@gmail.com", "298392839823"]);
let slicedArray = students.slice(0, 2);

console.log(slicedArray);

for(let i=0; i< students.length ; i++) {
    console.log(students[i]);
    
}

for(let i=0; i< students.length ; i++) {
    students[i+1] = students[i]
    
}

students[0]= []




for(let i=0; i< students.length ; i++) {
    for(let j=0; j<students[i].length; j++) {
         console.log(students[i][j]);
    }
}


let marks = [10,8,9,5,5,6,7,8];
for(let i=0; i<marks.length; i++) {
    console.log(persons[i]);
}

let matrix = [
    [
        1,
        2, 
        [5,6]
    ], 
    [3,4]
];
console.log(matrix[0]);
console.log(matrix[0][2][0]);

let students = [["Ali", 5, 10, "ali@gmail.com", "8382893829392"],
                ["Zohaib", 8, 10, "zohaib@gmail.com", "8382893829392"]]
students[0].splice(2,1);
students.push(["Taha", 8, 10, "taha@gmail.com", "8382893882332"])
students.unshift(["Mubashir", 8, 10, "mubashir@gmail.com", "8382893882332"])
students.shift();
for(let i=0; i<students.length; i++){
    students[i+1] = students[i]
}

students.splice(0, 1,["Osama", 8, 10, "osama@gmail.com", "8382893882332"])

console.log(students);


/** 1D Arrays
 * Arrays can hold multiple values
 */
/** ND Arrays (2D, 3D, 4D etc) */

/** Array Methods
 * .length - returns the length of the array
 * .push() - adds to the end of the array
 * .pop() - removes from the end of the array
 * .unshift() - adds to the beginning of the array
 * .shift() - removes from the beginning of the array
 * /


/** Initializing Arrays */


/** Maps 
 * https://www.w3schools.com/js/js_object_maps.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

/** Sets
 * https://www.w3schools.com/js/js_object_sets.asp
 */


/** WeakMap 
 * 
*/
