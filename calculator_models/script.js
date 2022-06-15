function getHistory(){
  return document.getElementById('history-value').innerText;
}
function getOutput(){
  return document.getElementById('output-value').innerText;
}
function printHistory(num){
  if(num ==""){
    document.getElementById('history-value').innerText = num;
  }
  else{
  document.getElementById('history-value').innerText = getFormattedNumber(num);
  }
}
function printOutput(num){
  if(num ==""){
    document.getElementById('output-value').innerText = num;
  }
  else{
  document.getElementById('output-value').innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function getReverseNumber(num){
  return Number(num.replace(/,/,""));
}
var operator = document.getElementsByClassName('operkey');
var number = document.getElementsByClassName('numkey');
for(i = 0; i<operator.length;i++){
  operator[i].addEventListener("click",function(){
    if(this.id =="ac"){
      printOutput("");
      printHistory("");
    }
    else if(this.id == "cl"){
      var output = getReverseNumber(getOutput()).toString;
      if(output){
      output = output.substr(0,output.length - 1);
      printOutput(output);
    }}
})}
for(j = 0; j<number.length;j++){
  number[j].addEventListener("click",function(){
    var output = getReverseNumber(getOutput());
    if(output != NaN){
      output = output +this.id;
      printOutput(output);
}})}
