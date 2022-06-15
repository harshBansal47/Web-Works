function hideContent(){
  let para = document.getElementsByClassName('para');
  for(let i = 0; i<3;i++){
    para[i].style.opacity = "0";
  }
}
hideContent();
// function showContent(){
//   let para = document.getElementsByClassName('para');
//   for(let i = 0; i<3;i++){
//     para[i].style.opacity = "1";
//   }
// }
document.getElementById('one').addEventListener("click",proxy);
function proxy(){
  document.getElementById('p1').style.opacity = "1";
  document.getElementById('p2').style.opacity = "0";
  document.getElementById('p3').style.opacity = "0";
  document.getElementById('one').style.height = "500px";
  document.getElementById('one').style.width = "500px";
  document.getElementById('two').style.height = "150px";
  document.getElementById('two').style.width = "150px";
  document.getElementById('three').style.height = "150px";
  document.getElementById('three').style.width = "150px";
  document.getElementById('three').style.opacity = "0.5";
  document.getElementById('two').style.opacity = "0.5";
  document.getElementById('one').style.opacity = "1";
  document.getElementById('one').style.transition = "0.5s";
}
document.getElementById('two').addEventListener("click",proxy2);
function proxy2(){
  document.getElementById('p1').style.opacity = "0";
  document.getElementById('p2').style.opacity = "1";
  document.getElementById('p3').style.opacity = "0";
  document.getElementById('two').style.height = "500px";
  document.getElementById('two').style.width = "500px";
  document.getElementById('one').style.height = "150px";
  document.getElementById('one').style.width = "150px";
  document.getElementById('three').style.height = "150px";
  document.getElementById('three').style.width = "150px";
  document.getElementById('three').style.opacity = "0.5";
  document.getElementById('two').style.opacity = "1";
  document.getElementById('one').style.opacity = "0.5";
  document.getElementById('two').style.transition = "0.5s";
}
document.getElementById('three').addEventListener("click",proxy3);
function proxy3(){
  document.getElementById('p1').style.opacity = "0";
  document.getElementById('p2').style.opacity = "0";
  document.getElementById('p3').style.opacity = "1";
  document.getElementById('three').style.height = "500px";
  document.getElementById('three').style.width = "500px";
  document.getElementById('two').style.height = "150px";
  document.getElementById('two').style.width = "150px";
  document.getElementById('one').style.height = "150px";
  document.getElementById('one').style.width = "150px";
  document.getElementById('one').style.opacity = "0.5";
  document.getElementById('three').style.opacity = "1";
  document.getElementById('two').style.opacity = "0.5";
  document.getElementById('three').style.transition = "0.5s";
}
