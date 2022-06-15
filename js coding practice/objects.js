%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% objects
let dude = {
  firstName : "ram",
  lastName : "suryavansh",
  dob :"23/12/1867",
  address: {
    street:1,
    colony:'new',
    area:'main'
  },
  intro: function(){
  return console.log(this.firstName,this.lastName,"is a resident of",this.address.area);
  }
};
// const {firstName ,lastName,address} = dude;
console.log(dude.address);
console.log(dude.firstName);
console.log(dude.intro());
%%%%%%%%%%%%%%%%%%%%%%% array of objects %%%%%%%%%%%%%%%%%%%%%%%%
 let employees = [
 {
   name:"jerry",
   id:5,
   value : true
 },
 {name:"duffy",
 id:6,
 value : false},
 {name:"tom",
 id:1,
 value : true}
];
console.log(employees[0].value);
//%%%%%%%%%%%%%%%%%%%%%%%%% for loop
for(let i =0; i<employees.length; i++){
  console.log(`value is ${i}:${employees[i].value}`);
}


let a = {
  name:"haris",
  class:"upper",
  section:"high",
  rollNo:19,
  batch:"tyu"
};
console.log(a);
document.write(a.batch);
console.log(a.section);
