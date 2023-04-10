let a = 1;
let b = 2;
let operation = "sjdsjdk";
let result;

if(operation == "add") {
    result = a + b;
}
else if(operation == "sub") {
    result = a -b;
}
else if(operation == "div") {
    result = a / b;
}
else if(operation == "mul") {
    result = a * b;
}
else {
    console.log("Operation not supported");
}


if(result != undefined){
    console.log("Your result is: ", result);
}



// Global Scoped Variable

// var myName = "ali";

// var a =10;


// console.log(a);

// if(myName == "ali") {

//     var a = 1000; // Block -scope  / Local variable
//     console.log(a);

//     // Block- scoped variable
//     let b = 100;

// }

// console.log(a);





// const a = 10;

// a = 100;


// console.log(x);
// console.log(y);

// let x = 0;
// let y = 0;



// var x = 1;
// var y = 2;

// console.log("Variables before swapping", x,y);

// var temp = 0;

// temp = x;
// x = y;
// y = temp;

// console.log("Variables after swapping", x,y);
