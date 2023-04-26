/** Understanding Closures */
/** Scope Chaining & Lexical Environment */


function test(){
    console.log(myName);
}

var myName = "ali";
test();

/** Lexical means Hierarchical | Parent-Child Relationship */


/** Lexical Environment = Local Memory + Lexical Environment of the Parent  */






/** Function bundled along with it’s lexical scope is called closure */
/** Private Variables using closures */

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();

console.log(z);



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




/** IIFES */

(()=>{
    console.log("hello world");
});

/** Use cases of IIFEs */



/** Higher Order Functions */