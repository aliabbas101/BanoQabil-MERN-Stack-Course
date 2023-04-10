/** Operators and expressions */

/** Arithmetic Operators */


/** Logical Operators
 * && logical and
 * || logical or
 * !  logical not
 */


let isStudent = true;
let isPassed = false;


/** If its a student and he passed */
// if(isStudent && !isPassed) {
//     console.log("else if condition block executed");
// }
// else {
//     console.log("Oops");
// }




/** If its either a student or was passed */
// if(isStudent && !isPassed){
//     console.log("Abc");
// }
// else {
//     console.log("oops");
// }

// let num = 999;
// // (true   ||      false) &&     false
// let condition = num <=100 && num !== 999;
/// console.log(condition);
// if(num >= 0 || condition) {
//     console.log("Number is with in range");
// }



// console.log(a);

/** Assignment Operations 
 * =  assignment
 * Compound assignment with arithmetic operators
 * += addition assignment
 * -= subtraction assignment
 * *= multiplication assignment
 * /= division assignment
 * 
 *
*/

// let a = 101;
//true  &&  false   &&   true


// a === 1000 a is equal to thousand  
// a != 1000 


// let cond1 = a >= 0; // true

// let cond2 = a <= 100; // false
 
// let cond3 = a != 1000; // true

// console.log(cond1, cond2, cond3);
// if((cond1 && cond2) || cond3) {
//     console.log("executed");
// }
// else {
//     console.log("out of range");
// }



// if(1 == 1) {
//     console.log()
// }

/** Comparison Operators 
 * 
 * ==  values equal to
 * === equal value and equal type
 * !=  not equal
 * !== not equal value or not equal type
 * >   greater than
 * <   less than
 * >=  greater than or equal to
 * <=  less than or equal to
 * Order of operations / precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * 
*/

/** Conditional Statements
 * if
 * if else
 * else if
 * switch
 * ternary operators
 */

let num = 102;
let result = "";

// if(num >=0 && num <=100) {
//     result = "with in range [0-100]"
// }
// else if(num >=101 && num <= 200) {
//     result = "number is with in range [101-200]";
// }
// else {
//     result = "out of range";
// }

result = (num >=0 && num <=100) ? "with in range [0-100]" : (num >=101 && num <= 200) ? "number is with in range [101-200]" : "out of range";
console.log(result);


// ternary operators
// (condition) ? "This is block will only work when condition is true" : "This block will work when condition false"









// condition ? "" : ""

// let result = (num >=0 && num <=100) ? 
//                     "with in range [0-100]" 
//                     : (num >=101 && num <= 200) ? 
//                     "number is with in range [101-200]" : 
//                     "out of range";
// console.log(result);




/** Class Task: Build a calculator app using ternary operators
 * Implement the following operations: add, subtract, multiply, divide
 *  let a = 1;
    let b = 2;
    let operation = "sub";

    if(operation == "add") {
        console.log(a + b);
    }
    else if(operation == "sub") {
        console.log(a-b);
    }
    else if(operation == "multiply") {
        console.log(a*b);
    }
    else if(operation == "divide") {
        console.log(a/b);
    }
    else {
        console.log("Operation not supported");
    }
 * 
 */