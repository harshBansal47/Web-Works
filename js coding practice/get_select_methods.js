****************************************************************
********************  element selector  ************************
****************************************************************
let list = document.querySelectorAll('p');
let list2 = document.querySelectorAll('h2');
console.log(list);
console.log(list2);
console.log(list[0]);
console.log(list2[2]);
document.write(list[0]);
//*****************group selector**************
let list3 = document.querySelectorAll('p,h1');
let list4 = document.querySelectorAll('div,h2');
console.log(list3);
console.log(list4);
//*********** universal selector **************************
let list5 = document.querySelectorAll('*');
console.log(list5);
//********************* class selector *********************
let list6 = document.querySelectorAll('.man_made,.graci');
console.log(list6);
//***************** element specific class name ************
let list7 = document.querySelectorAll('p.graci');
console.log(list7[0]);
//***********more specific element specific class name *****
let list8 = document.querySelectorAll('p.graci.gps');
console.log(list8[0]);
//************* select element in a div *****************
let list9 = document.querySelectorAll('#c4');
console.log(list9);




******************      methods     ****************
let element = document.getElementById("c4").innerText;
console.log(element);
let element = document.getElementById("name").innerHTML;
console.log(element);
let element = document.getElementById("name").getAttribute("id");
console.log(element);
let element = document.getElementById("name").getAttributeNode("id");
console.log(element);
let element = document.getElementById("name").attributes;
console.log(element);
document.getElementById("button").addEventListener("click",abc);
document.getElementById("button").addEventListener("dblclick",xyz);
function abc(){
  document.getElementById("name").style.background = "red";
}
 function xyz(){
  document.getElementById("name").style.background = "white";
 }
 if(document.getElementById("name").style.background = "white"){
   document.getElementById("button").addEventListener("click",abc);
 }
 else if(document.getElementById("name").style.background = "red"){
   document.getElementById("button").addEventListener("click",xyz);
 }
 else{
    else if(document.getElementById("name").style.background = "white";
 }
