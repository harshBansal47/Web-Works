*****************   arrays   ****************************
let arr = new Array("mango","apple","banana","strawberry","corn");
console.log(arr);
console.log("TO STRING : ",arr.toString());
console.log(arr.join('____'));
console.log(arr,"<br>",arr.pop(),"<br>",arr);
console.log(arr.push('blackberry'),arr);
console.log(arr.shift(),arr);
console.log(arr.unshift('corn'),arr);
let vegs = ['broccoli','aspargus','tomato','cabbage','onion'];
let groccery = vegs.concat(arr);
console.log(groccery);
console.log(groccery.sort(),groccery);
console.log(groccery.reverse(),groccery);



%%%%%%%%%%%%%%%%%%%% higher order array methods
employees.forEach( function(emp) {
    console.log(emp.name);
});
const maparr = employees.map(function(val){
  return val.name;
})
console.log(maparr);
const fltrv = employees.filter(function(val){
  return val.value === true;
});
console.log(fltrv)
