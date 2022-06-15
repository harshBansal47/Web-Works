var entry;
function getValue(){
entry =  document.getElementsByClassName("keys").value;
return entry;
}
var outputValue =getValue();
function printValue(outputValue){
  document.getElementsByClassName("output_2").innerHTML =getValue();
  outputValue = document.getElementsByClassName("output_2").innerText;
  return outputValue;
}
// getValue();
