****************************************
*********** number methods *************
****************************************
let a = '6784';
document.write(typeof(a),"<br>");
let num = Number(a);
document.write(typeof(num),"<br>");
document.write(num+10,"<br>");
let b = '10.5557889';
let num2 = parseInt(b);
let num3 = parseFloat(b);
document.write(num2,"<br>");
document.write(num3,"<br>");
let num4 = Number.isFinite(num);
let num5 = Number.isFinite(a);
let num6 = Number.isInteger(num2);
let num7 = Number.isInteger(num3);
document.write(num4,"<br>");
document.write(num5,"<br>");
document.write(num6,"<br>");
document.write(num7,"<br>");
let num8 = num3.toFixed(1);
let num9 = num3.toPrecision(2);
let num10 = num3.toPrecision(20);
document.write(num8,"<br>");
document.write(num9,"<br>");
document.write(num10,"<br>");
