 let colours = ["orange","red","purple","brown","#2C6F9F","#429DDE","#75D237","#D29037"];
nBtn = document.querySelector(".btn_next");
pBtn = document.querySelector(".btn_prev");
let count =0;
nBtn.addEventListener("click", function(){
  count++;
  document.body.style.backgroundColor = getnextcolor();
  document.getElementById('color_name').innerText = getnextcolor();
} );
pBtn.addEventListener("click", function(){
  count--;
  document.body.style.backgroundColor = getpreviouscolor();
  document.getElementById('color_name').innerText = getpreviouscolor();
} );

function getnextcolor(){
  let color = "";
  if(count >= 8){
    count = getresetCOUNTnEXT(count);
  }
  else{
    count = count;
  }
  let i = count;
  color = colours[i];
  return color;
}
function getpreviouscolor(){
  let color = "";
  if(count <0){
    count = getresetCOUNTpREV(count);
  }
  else{
    count = count;
  }
  let i = count;
  color = colours[i];
  return color;
}
function getresetCOUNTnEXT(number){
  return number = 0;
}
function getresetCOUNTpREV(number){
  return number = colours.length - 1;
}
var icon1 = document.querySelector('.icon1');
var icon2 = document.querySelector('.icon2');
var link = document.getElementById('link');
var box = document.querySelector('.box');
click_count = 0;
icon1.addEventListener('click',function(){
  link.style.display = "block";
  icon1.style.display = "none";
  icon2.style.display = "block";
})
icon2.addEventListener('click',function(){
  link.style.display = "none";
  icon2.style.display = "none";
  icon1.style.display = "block";
})
var about_page = document.getElementById('about_page');
var about = document.querySelector('.about');
about_page.addEventListener('click',function(){
  return about.style.display = "block";
})
var home = document.getElementById('home');
home.addEventListener("click",function(){
   about.style.display = "none";
})
