let hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
let btn_prev = document.querySelector('.btn_prev');
let btn_next = document.querySelector('.btn_next');
let btn_click = document.querySelector('.btn_click');
btn_prev.style.display = "none";
btn_next.style.display = "none";
function designColor(){
  let color = "#";
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random(i)*16)];
  }
  return color;
}
let colours = [];
let count = 0;
btn_click.addEventListener("click",function(){
      btn_next.style.display = "inline";
      btn_click.style.display = "none";
});
btn_next.addEventListener("click",function(){
    btn_prev.style.display = "inline";
    let clor = designColor();
    document.getElementById('color_name').innerText = clor;
    document.body.style.backgroundColor = clor;
    colours.push(clor);
});
btn_prev.addEventListener('click',function(){
  let a = colours.length;
  for(let j=1; j<=a; j++){
    document.body.style.backgroundColor = colours[Math.floor(a-j)];
    document.getElementById('color_name').innerText = colours[Math.floor(a-(j+count))];
  }
  count++;
})
