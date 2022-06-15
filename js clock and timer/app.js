function updateTime(){
  var momnt = new Date();
  var chr = momnt.getHours();
  var cmin = momnt.getMinutes();
  var csec = momnt.getSeconds();
  document.querySelector('.hr_box').innerText = chr;
  document.querySelector('.min_box').innerText = cmin;
  document.querySelector('.sec_box').innerText = csec;
}
var cse = setInterval(updateTime,1000);
document.getElementById('clock').addEventListener('click',cse);
document.getElementById('stopwatch').addEventListener('click',function(){
clearInterval(cse);
 })
