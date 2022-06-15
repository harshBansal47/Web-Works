// Dom is the complete representation of HTML page in the form of tree structure
// The tree structure is the tree of nodes with a root node
// Each HTML element is treated as node
// Even text inside a html element is treated as Text Node
// Document is the parent of all nodes 
// Body is child of document node

// There are several type of Nodes used for traversing
// 1. ParentNode
// 2. ChildNode
// 3. nextSibling
// 4. firstChild
// 5. previousSibling
// 6. lastChild


// We can select any element of dom with dom selectors
// Dom selectors : 
// 1. document.getElementById;
// 2. document.getElementsByClassName;
// 3. document.querySelector();
// 4. document.querySelectorAll();
// 5. document.getElementsByTagName();

// Events on html page is handled by a Function 
// Element.addEventListener('nameOfEvent',functionToRun());
// Name of Events : 
//    1. 'click'
//    2. 'submit'
//    3. 'scroll'
//    4. 'focus'
//    5. 'load'
//    6. 'resize'
//    7. 'blur'
//    8. 'keyup'
//    9. 'keydown'

// There are several methods we can use with dom elements
// createElement
// createTextNode
// innerText
// innerHTML
// textContent
// appendChild
// removeEventListener
// removeChild
// setAttrbute
// getAttribute



let new_heading = document.createElement("h1");
let new_heading_text = document.createTextNode("New heading String");
new_heading.appendChild(new_heading_text);

let new_heading1 = document.createElement("h1");
new_heading1.innerHTML = "<h1> New heading String1 </h1>";

let new_heading2 = document.createElement("h1");
new_heading2.textContent = "New heading String2";

let new_heading3 = document.createElement("h1");
new_heading3.innerText = "New heading String3";

console.log(new_heading);
console.log(new_heading1);
console.log(new_heading2);
console.log(new_heading3);

// let para = document.getElementById("para");
// new_heading.id = "included_heading";
// new_heading.class = "included_class";
// console.log(para.childNodes);