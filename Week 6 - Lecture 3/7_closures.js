// Higher Order Function
// Conditions
// Function passed as an argument
// OR
// Function return

function outer() {
    let myName = "Ali";

    function inner() {
        
        function innerMost() {
            console.log(myName);
        }

        return innerMost; // Execution Context of InnerMost + Lexical Environment of Its parent(inner)
    }

    return inner; // Execution Context Inner + Lexical of it's Parent(Test)
}



// Scope Chaining
let result1 = outer(); // inner()
let innerMost = result1();
innerMost();




/** Understanding Closures */
/** Scope Chaining & Lexical Environment */

// let outerName= "umer";

// function test(){
    
//     let name= "ali";
//     let name2 = "huzaifa";

//     console.log(innerName);
//     function inner(){
//         let innerName = "hamza";
//         function mostInner() {
//             console.log(name);
//         }
        
//         return mostInner;
//     }
//     return inner;
// }

// let result = test(); //inner() //Inner Function's Execution Context
// let mostInner = result(); // mostInner()
// mostInner();

/** Lexical means Hierarchical | Parent-Child Relationship */


/** Lexical Environment = Local Memory + Lexical Environment of the Parent  */



/** Function bundled along with it’s lexical scope is called closure */
/** Private Variables using closures */

/** Higher Order Functions */
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x(); // y()
// z();

/**
 * A closure is a function that has access to its outer function scope even after the function has returned. 
 *  
 * 
 * A closure can remember and access variables and arguments reference of 
 * its outer function even after the function has returned
 */


/**
 * Advantages of Closure:
 * Currying
 * Data hiding and encapsulation
*/

function Counter() {

    let count = 0;

    this.showCounter = () => {
        return count;
    }

   this.incrementCounter = () => {
        count++;
    }

    this.decrementCounter = () => {
        count--;
    }
}

let stopWatch = new Counter();
stopWatch.showCounter();
stopWatch.incrementCounter();
stopWatch.showCounter();
stopWatch.decrementCounter();
stopWatch.showCounter();
stopWatch.showCounter();
console.log(stopWatch.showCounter());



// function counter() {
//     this.count = 0;

//     this.showCounter = function() {
//         console.log(this.count);
//     }

//    this.incrementCounter = function() {
//         this.count++;
//     }

//     this.decrementCounter = function() {
//         this.count--;
//     }
// }

// let counter1 = new counter();
// counter1.showCounter();
// counter1.incrementCounter();
// counter1.showCounter();
// counter1.decrementCounter();
// counter1.showCounter();
// counter1.count = 100;
// counter1.showCounter();

// /** Currying */
function sum(a, b, c) {
    return a + b + c;
}



/** Transformed into currying function */
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

// let result = sum(1)(2)(3);

let sum0 = sum(1);
let sum1 = sum0(2); 
let sum2 = sum1(3);
console.log(sum2);

// console.log(result);




// /** Data Hiding */





// /** IIFES */

(function main() {
    console.log("file started executing here");
})();

// /** Use cases of IIFEs */



// /** Higher Order Functions */

// // A higher-order function is simply a function that either takes one (or more) function as its argument OR returns a function.
// function outer() {

//     console.log("outer called");

//     function inner(){
//         console.log("Inner called");
//     }

//     inner();
// }


function a() {}
function b() {}

function c() {}
function d() {}

(function main() {
    a();
    b();
})();
