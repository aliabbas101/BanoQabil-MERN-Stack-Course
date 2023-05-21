/** DOM TREE */
/** https://www.w3schools.com/js/js_htmldom.asp */


/** Getting a specific element by unique id */
let div1 = document.getElementById("div1");

div1.style.backgroundColor = "green";


/** Getting all divs by class name */
let customDivs = document.getElementsByClassName("customDiv");

for(let i=0; i<customDivs.length; i++){
    customDivs[i].style.backgroundColor = "green";
}

/** How to access HTML Elements */
/**
 * document.getElementById()
 * document.getElementsByClassName
 * document.getElementsByName
 * document.getElementsByTagName
 */



/** Adding and deleting HTML Elements */
/** https://www.w3schools.com/js/js_htmldom_document.asp */



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

/** Event Handlers
 * element.onclick
 * element.addEventListener("click")
 * =
 */
