// console.dir(document);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.html);
// console.log(document.links);
// console.log(document.anchors);
// console.log(document.URL);
// console.log(document.baseURI);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.head);
// console.log(document.backgroundColor);
// console.log(document.all);
// console.log(document.all[16]);
// document.getElementById('c4').textContent = 'ram';
// let classElement = document.getElementsByClassName('boxes');
// console.log(classElement);
//
// for(let i =0; i<classElement.length; i++){
//   classElement[i].style.backgroundColor = 'orange';
// }
// let tagmaker = document.getElementsByTagName('p');
// for (let i =0; i<tagmaker.length; i++){
//   tagmaker[i].style.borderBottom = "3px solid black"
// }
// let btn = document.getElementsByClassName('btn');
// for(var i = 0; i<btn.length; i++){
//   btn[i].style.backgroundColor = 'orange';
//   btn[i].style.border = '1px solid orange';
//   btn[i].style.borderRadius =  '50px';
// }
// document.querySelector('input').value = "click1";
// document.querySelector('input[type = "text"]').value = "click";
// document.querySelector('.btn').innerText = 'click_only';
// btn_items = document.querySelector('.man_made');
// console.log(btn_items);
// console.log(btn_items.parentNode);
// console.log(document.querySelector('.boxes').parentNode);
// console.log(document.querySelector('.boxes').parentNode.parentNode);
// console.log(document.querySelector('.boxes').parentNode.parentNode.parentNode.parentNode);
// console.log(btn_items);
// console.log(btn_items.parentElement);
// console.log(document.querySelector('.boxes').parentElement);
// console.log(document.querySelector('.boxes').parentElement.parentElement);
// console.log(document.querySelector('.boxes').parentElement.parentElement.parentElement);
// console.log(btn_items);
// console.log(btn_items.childNodes);
// console.log(document.querySelector('.boxes').children);
// console.log(document.querySelector('.boxes').parentElement.children);
// console.log(btn_items.children);
// console.log(btn_items.lastChild);
// console.log(btn_items.firstChild);
// console.log(btn_items.firstElementChild)
// btnitems = document.querySelector('.boxes');
// console.log(btnitems.nextSibling);
// console.log(btnitems.previousSibling);
// console.log(btnitems.nextElementSibling);
// console.log(btnitems.previousElementSibling);

//%%%%%%%%%%%%%%%%5 creating new elementi n javascript
var newDiv = document.createElement('div');
newDiv.className = 'newClass';
newDiv.id = 'newl';
newDiv.setAttribute("title","reigns");
var newDivContent = document.createTextNode('<h1>the chains of guilt are now broken</h1>');
newDiv.appendChild(newDivContent);
var container = document.querySelector('.man_made');
var btn = document.querySelector('.btn');
container.insertBefore(newDiv,btn);
console.log(newDiv);
