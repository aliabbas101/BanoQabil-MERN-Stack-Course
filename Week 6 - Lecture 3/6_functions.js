// /**
//  * Functions 
//  * Input
//  * Process / Complex Mathematical Calculation / Logic
//  * Output
//  */






/** 
 * add(paramater 1, parameter 2)
 */
// function add(a, b) {
//     let sum = a + b;
//     return sum;
// }

// function sub(a, b) {
//     let sub = a - b;
//     return sub;
// }

// function multiply(a, b) {
//     let mul = a *b;
//     return mul;
// }

// function calculator(a,b, operation) {
//     if (operation == "add") {
//         return a + b;
//     }
//     else if(operation == "sub") {
//         return a - b;
//     }
//     else if(operation == "mul") {
//         return a * b;
//     }
//     else if(operation == "div") {
//         return a / b;
//     }
// }

// let result = calculator(10, 100, "sub");
// console.log(result);


// function counter(num, max) {
//     if(num == max) {
//         return;
//     }
//     console.log(num);
//     counter(num + 1, max)
// }

// counter(0, 10);





// /** Passing arguments to function */
// let resultOfMultiply = multiply(10,10);
// console.log(resultOfMultiply);
// /** Functions in Javascript */

// function person4() {
//     console.log("person4 function called");
// }

// function person3() {
//     console.log("person3 function called");
//     person4();
// }

// function person2() {
//     console.log("person2 function called");
//     person3();

// }

// function person1() {
//     console.log("person1 function called");
//     person2();
// }


// person1();
// console.log("Hello world");



/** Defining and calling a function */
/**
 * Input -> Function Paramters
 * Processing / Complex Mathematical Operation / Logic
 * Ouput ->  
 */


/**
 * Global Scope
 */
// let a =10;
// let b =100;
// let c = 1000;

// function calculateSum(a, b, c) {
//     /** Function scope */
//     let sum = a + b;
//     console.log(c);
//     console.log(sum);
// }

// /** Function Arguments */
// let result = calculateSum(200, 100, 23212112); // Function call / Function invocation / Invoked
// console.log(result);


// var x = 100;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 1;
//     console.log("value of x is: ", x);
// }

// function b() {
//     var x = 1000;
//     console.log("value of x is: ", x);
// }


// function person4() {
//     console.log("person4 called");
// }

// function person3() {
//     console.log("person3 called");
//     person4();
// }

// function person2() {
//     console.log("person2 called");
//     person3();
// }

// function person1() {
//     console.log("person1 called");
//     person2();
//     return;
// }


// person1();
// console.log("hello world");

// function calculator(a,b, operation) {
//     if(operation  == "add") {
//         return a + b;
//     }
//     else if(operation  == "sub") {
//         return a-b;
//     }
//     else if(operation == "divide") {
//         return a /b;
//     }
// }

// let result = calculator(100, 1000, "add");
// console.log(result);


/** Recursion */
function counter(num, max) {
    console.log(num);
    if(num == max) {
        return;
    }
    counter(num + 1, max);
}

counter(0, 1000);



/** Arguments and return values */


/** Function scope and closure */

/** Shorthand syntax
 * arrow functions
 * 
 */

/** Function expressions */