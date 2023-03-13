// function displayOutput() {
//   var input1 = document.getElementById("input1").value;
//   if (input1 == 0 || input1 == 1) {
//     document.getElementById("output").innerHTML = input1;
//     return;
//   }
  
//   let prev = 0;
//   let curr = 1;
//   let total = null;
//   let sequence = [1];
//   for (let i = 2; i <= input1; i++) {
//     total = prev + curr;
//     prev = curr;
//     curr = total;
//     sequence[i-1] = total;
//   }
  
//   document.getElementById("output").innerHTML = sequence;
// }


function displayOutput() {
  var input1 = document.getElementById("input1").value;

  var y = document.getElementById("y").value;
  if (y === ""){
    y = 1;
  }
  
  var z = document.getElementById("z").value;
  if (z === ""){
    z = 2;
  }

  let sequence = [1, 1];
  for (let i = 2; i <=input1; i++) {
    let prevY = sequence[i - y] || 1;
    let prevZ = sequence[i - z] || 1;
    sequence[i] = prevY + prevZ;
    
  }
  let ans = sequence.slice(0, input1);

  document.getElementById("output").innerHTML = ans;
}
