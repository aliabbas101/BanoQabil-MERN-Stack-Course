/** Primitive vs Non-primitive data types in JavaScript */
/***
 * Number
 * Boolean
 * String
 * Null
 * Undefined
 */

/** Almost everything in Javascript is an object */

/** Declaring and Initializing Objects
 * Objects are a collection of key value pairs
 * 
 */


/** Car
 * Properties
 * Color
 * wheels
 * blinds
 * speed
 * seats
 * canPressBreak
 * cc
 * 
 * 
 * Functionalities
 * break
 * accelerator
 * openAirBags
 * turnLeft
 * turnRight
 * Indicator
 * 
 */

var name = "ali";

// var car = {
//    name: "Audi",
//     color : "red",
//     wheels: 4,
//     canPressBreaks: true,
//     speed: 120,
//     seats: 4,
//     cc: "2000cc",
//     /** Anonymous FUnction */
//     accelerate: function() {
//         console.log("Car is now moving at speed of", this.speed);
//     },
//     increaseSpeed: function(speed) {
//         if(speed > 1){
//             this.speed = this.speed + speed;
//         }
//         else {
//             console.log("Speed cannot be negative");
//         }
//     },
//     turn: function(direction) {
//         console.log("Car is now turning, ", direction);
//     }
// };

// /** By Reference Assignment */
// let mehran = car;
// let cultus = car;

// mehran.speed = 10;
// mehran.name = "mehran";
// cultus.name = "cultus";

// console.log(car);

// Encapsulation (Data Hiding)



// car.wheels = 10;
// car.accelerate();
// car.increaseSpeed(10);
// car.turn("right");

// console.log(car);


// console.log(car.name, car.wheels);
// Constructor Function

function Car(name, color, wheels, seats, speed, cc, canPressBreaks) {
    
    /** Public Properties */
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.seats = seats;
    this.speed = speed;
    this.cc = cc;
    this.canPressBreaks = canPressBreaks;
    
    /** Private property */
    let secretProperty = "secret";

    this.accelerate = function () {
                console.log("Car is now moving at speed of", this.speed);
                console.log(secretProperty);
    }


            // increaseSpeed: function(speed) {
            //     if(speed > 1){
            //         this.speed = this.speed + speed;
            //     }
            //     else {
            //         console.log("Speed cannot be negative");
            //     }
            // },
            // turn: function(direction) {
            //     console.log("Car is now turning, ", direction);
            // }
}

let mehran = new Car("mehran", "red", 4, 4, 120, 2000, true);
let cultus = new Car("cultus", "silver", 4, 4, 200, 2000, true);

mehran.color = "green";
console.log(mehran.secretProperty);
mehran.accelerate();
console.log(mehran);
console.log(cultus);




















// let car = {
//     color : "red",
//     numberOfSeats: 4,
//     haveRoof: true,
//     speed: "120 km/h",
//     breakMissing: false,
//     drive : function() {
//         console.log("driving started");
//         console.log("speed is ", this.speed);
//     },
//     break: function() {
//         if(this.breakMissing) {
//             console.log("break nahi lag sakta");
//         }
//         else {
//             console.log("lag gaya")
//         }

//     }
// };



// car.numberOfSeats = 7;

/** BY reference assignmen */
// let mehran = car;

// mehran.color = "silver"; 
// car.color = "green";
// car.drive();
// car.break();
// console.log(car["color"]);


/** Accessing and modifying Object Properties */
/** Object Mutation (By Reference) */


/** Understanding Object Oriented Programming 
 * Objects are a way to model real world things using code
 * Objects are a way to group related variables and functions together
 * 
 * 
*/


/** Object Constructor */
// function Car(seats, color, wheels, haveRoof, speed, breakMissing) {
//     this.color = color;
//     this.seats = seats;
//     this.wheels = wheels;
//     this.haveRoof = haveRoof;
//     this.speed = speed;
//     this.breakMissing = breakMissing;

//     this.increaseSpeed = function () {
//         this.speed = "200";
//     }
// }


// let mehran = new Car(7, "red", "4", true, "120", false);
// mehran.increaseSpeed();
// console.log(mehran.speed);



// let cultus = new Car(4, "silver", "4", true, "120", false);
// console.log(mehran);
// console.log(cultus);

/** this Keyword */


/** In an object method, this refers to the object. */
/** Alone, this refers to the global object. */
/** In a function, this refers to the global object. */
/** In a function, in strict mode, this is undefined. */
/** In an event, this refers to the element that received the event. */
/** Methods like call(), apply(), and bind() can refer this to any object. */





