%%%%%%%%%%%%%%%%%%%% class & constructor %%%%%%%%%%%%%%%%%%%%%%%
class employees{
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.birthYear =this.dob.getFullYear();
  }
  fullName(){
      return `${this.firstName} ${this.lastName}`;
  }
  uppercase(){
    return `${this.lastName.toUpperCase()} ${this.firstName.toUpperCase()}`;
  }
}
let emp1 = new employees("man","king",'09-4-2000');
let emp2 = new employees("man2","king",'5-6-2020');
console.log(emp1);
console.log(emp2);
console.log(emp1.birthYear);
console.log(emp2.fullName());
console.log(emp2.uppercase());
class Details{
  constructor(content,style,menu){
    this.content = content;
    this.style = style;
    this.menu = menu;
  }
  getproto(){
    return `${this.content}${this.menu}`;
  }
}
let htr = new Details("ght","ghr","gyt");
console.log(htr);

class Products extends Details{
  constructor(content,style,menu){
    super(content,style,menu);
  }
getSentence(){
  return `${this.content}${this.menu}${this.style}`
}
}
let pr = new Products("ht","ght","dfg");
console.log(pr);
console.log(pr.getSentence());
