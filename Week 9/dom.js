/** DOM TREE */
/** https://www.w3schools.com/js/js_htmldom.asp */


/** Getting a specific element by unique id */
// let div1 = document.getElementById("div1");

// div1.style.backgroundColor = "green";



/** Getting all divs by class name */
// let customDivs = document.getElementsByClassName("customDiv");

// let div = document.getElementsByName("myDiv1");

// console.log(document.getElementsByTagName("div"));

// let h1 = document.querySelector("div>h1");
// console.log(customDivs);


// for(let i=0; i<customDivs.length; i++){
//     customDivs[i].style.transform = "rotate(70deg)";
//     customDivs[i].style.border = "3px solid red";
//     customDivs[i].style.marginBottom = "100px";
// }


// let count = 0;
// setInterval(()=>{
//     customDivs[0].style.marginLeft = `${count}px`;
//     count+= 10;
// }, 500);

/** How to access HTML Elements */
/**
 * document.getElementById()
 * document.getElementsByClassName
 * document.getElementsByName
 * document.getElementsByTagName
 * document.querySelector
 */







// console.log(document.getElementsByName("div1"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.querySelectorAll("div>h2,h1"))
/** Adding and deleting HTML Elements */
/** https://www.w3schools.com/js/js_htmldom_document.asp */

// let button = document.createElement("button");
// button.id = "myButton";
// button.style.backgroundColor = "red";
// button.style.color= "white";
// button.innerHTML = "Click Me";

// let h1 = document.querySelector(".customDiv>h1");

// customDiv.replaceChild(button, h1);




// let button = document.createElement("button");
// button.innerHTML = "Click Me";
// button.style = "background-color: black; color:white;";
// button.id = "myButton";


// let h1 = document.getElementsByName("myCustomHeading");

// let div = document.getElementById("headingDiv");
// let smallHeading = document.getElementById("smallHeading");


// let input = document.createElement("input");
// input.type = "text";
// input.value = "Ali";
// input.placeholder = "Enter Name";

// div.appendChild(input)



// document.write("Hello world");
/** Changing HTML Elements
 * 
 * eleemnt.innerHTML
 * element.attribute
 * element.setAttribute
 * element.style
 */



/** Form Validation
 * Getting and setting form data
 */


let select =  document.getElementById("cars");

let option = document.createElement("option");
option.value="volvo";
option.text = "Volvo";


select.appendChild(option);



function clickMe() {
    console.log(select.value);
}


/** Event Handlers
 * element.onclick
 * element.addEventListener("click")
 * =
 */




