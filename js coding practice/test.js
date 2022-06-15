document.getElementById('clar').innerHTML = "HEY THERE" ;
document.getElementById('hg').style.fontSize = "35px";
document.getElementById('hg').innerHTML = "ujfdhrdisfugv";
document.getElementById('hg').display = "block";
document.getElementById('hg').style.color = "red";
//window.alert("this is a alert box");
//var a = prompt("what is your age ?");
//document.write("age = ", a, "<br>");
//var name = prompt("enter your full name");
//document.write("your name is ::", name  , "<br>");
function multiplier(v){
  for(let i = 1; i<11; i++)
  {
    document.write(" multiply =   ",v*i , "<br>");
  }

}
multiplier(5);
multiplier(8);

 var han = {
name : "haan",
original : "sung-kang",
height : "170",
weight : "48",
};
console.log(han);
document.write("han" , han , "<br>");
 let fruits = "guava, banana, strawberry, pear, peach, orange";
 document.write(fruits , "<br>");
 document.write(fruits.length, "<br>");
document.write(fruits.split(''), "<br>");
document.write(fruits.split(','), "<br>");
document.write(fruits.toLowerCase(fruits), "<br>");
document.write(fruits.toUpperCase(fruits), "<br>");



function cal()
{
  document.example.result.value = eval(document.example.box1.value);
  document.write("the total result is ::", eval(document.example.box1.value) , "<br>");
}
cal();


let vegs = ["broccoli" , "peanut " , "coconut ", "peas " , "onions ", "garlics"];
document.write(vegs , "<br>");
document.write(vegs[2], "<br>");
for(let u = 0; u <vegs.length; u++ ){
  document.write( u ,vegs[u], "<br>");
}
document.write(vegs.toString(),"<br>" );
document.write(vegs.join('*') ,"<br>");
document.write(vegs.join('-') ,"<br>");
document.write(vegs.join('@') ,"<br>");
document.write(vegs.join('#') ,"<br>");
document.write(vegs.join('$') ,"<br>");
document.write(vegs.pop() ,"<br>");
document.write(vegs.push("broccoli") ,"<br>");
document.write(vegs.shift());
//typeof funtion in java script
document.write(typeof(vegs) ,"<br>");
document.write(typeof(fruits) ,"<br>");
document.write(typeof(coconut) ,"<br>");
document.write(typeof(han) ,"<br>");
let c = false;
let d ;
let b = c>d;
let e = 10;
let f = "gedfd"
let g = "0";
document.write(typeof(c) ,"<br>");
document.write(typeof(d) ,"<br>");
document.write(typeof(b) ,"<br>");
document.write(typeof(e) ,"<br>");
document.write(typeof(f) ,"<br>");
document.write(typeof(g) ,"<br>");
//concatineted data
document.write("hew"+ "" +"there" ,"<br>");
document.write(50 + "hew" ,"<br>");
//asignment operators
let h = 76475645;
i = 0;
j = 0;
k = 1;
l = 1;
i+=h;
j-=h;
k/=h;
l*=h;
document.write( h ,"<br>");
document.write( i ,"<br>");
document.write( j ,"<br>");
document.write( k ,"<br>");
document.write( l ,"<br>");
//comparison operators
 i==h;
 i!=h;
 h>=j;
 j<=i;
