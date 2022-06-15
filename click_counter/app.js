const increase_button = document.getElementById('increase_button');
const decrease_button = document.getElementById('decrease_button');
const reset_button = document.getElementById('RESET');
var intex = document.getElementById('intex').innerText;
let click_count = 0;
increase_button.addEventListener("click",function(){
  click_count++;
  document.getElementById('intex').innerText = click_count;
});
decrease_button.addEventListener("click",function(){
  click_count --;
  document.getElementById('intex').innerText = click_count;
});
reset_button.addEventListener('click',function(){
  click_count = 0;
  document.getElementById('intex').innerText = intex;
})
