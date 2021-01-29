// 電卓
var result = document.getElementById("result");
function edit(elem) {
  result.value = result.value + elem.value;
   }
function calc() {
 result.value = new Function("return " + result.value)();
 }
function update(){
  document.getElementById('input').value=result
}

