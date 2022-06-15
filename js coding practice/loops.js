for(i =0; i<10;i++){
  document.write("<h2>hello world</h2>","<br>")
}
for(i = 1;i<11;i++){
  document.write("2x"+i+"=",2*i,"<br>");
}
i = 0;
while(i<11){
  document.write("consol");
  i++;
}
do{
i = 10*i++;
}while(i<11)
for(i = 0; i<5; i++){
  for(j = 0; j<5; j++){
    document.write("pair =("+i+","+j+")","<br>");
    if(i == 3 && j == 3){
    break;
    }

  }
}


%%%%%%%%%%%%%%%%%%%%%% ternary if else
let value = true;
const truth = (value = true) ? true:false;
console.log(truth);


***************** LOOPS ****************
if (age == 18){
  document.write("you are now eligible");
}
else if (age>10&&age<18) {
  document.write("you are now underage");
}
else{
  document.write("you can drive");
}
let a = prompt("enter the number");
if (a%7==0&&a%2==0){
  document.write("number is even and multiple of 7");
}
else if (a%9==0||a%2==0){
  document.write("number is even and multiple of 9");
}
else{
  document.write("unusuall");
}
let a  = prompt("enter value of a");
let c = true;
document.write(a,"<br>");
document.write(b,"<br>");
document.write(typeof(c),"<br>");
if(a==b && a!==b)
{
  document.write("same value but different datatypes");
}
else if(a===b) {
  document.write("same value and same datatype");
}
else{
  document.write("different numbers");
}
