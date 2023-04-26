/** Destructuring Assigment 
 *  Basically helps to unpack values from arrays, or properties from objects, into distinct variables
 */
/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment */


let students = ["1","2", "3"];

let [s1, s2, s3] = students;

console.log(s1, s2, s3);


let person = {
    name: "ali",
    age: 24
}

let {age, name}= person;

console.log(age, name);

