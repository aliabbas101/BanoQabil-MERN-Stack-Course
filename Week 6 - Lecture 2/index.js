let a = 1;
let b = 2;

let operation = "square";
let result;


/** If operation is equal to add */
if(operation == "add") {
    result = a + b;
}
else if(operation == "divide") {
    result = a / b;
}
else if (operation == "subtract") {
    result = a - b;
}
else if (operation == "multiply") {
    result = a * b;
}
else if (operation == "square") {
    let result = a * a;
    console.log(result);
    result  = b * b;
    console.log(result);
}
/** Else if any other o */
else {
    console.log("operation not supported");
}

console.log("Your result is: ", result);







// Global Scope

// console.log(b);

// b= "ali";

// if(b == "ali") {
//     let b = 0; // local variable | Block-scoped variable
    
//     b= 100;
//     console.log(b);
// }
