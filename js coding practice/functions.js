%%%%%%%%%%%%%%%%%%%%%%%%%functions %%%%%%%%%%%%%%%%%%%%%%
function addnum(num1,num2){
  console.log(`sum of ${num1} + ${num2} = ${num1+num2}`);
}
function sqr(num){
  console.log(`square : ${num}*${num}=${num*num} `);
}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% fat arrow functions
const addnum = (num1,num2) =>`sum of ${num1} + ${num2} = ${num1+num2}`;
const sqr = num => `square : ${num}*${num}=${num*num} `;
const cbrt = num => `cube root :${num}*${num}*${num} =${num*num*num} `;
%%%%%%%%%%%%%%%%%%% objects and functions %%%%%%%%%%%%%%%%%%%

function employees(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.birthYear =this.dob.getFullYear();
    // this.fullName = `${this.firstName} ${this.lastName}`;

}
employees.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
