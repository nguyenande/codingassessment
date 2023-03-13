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
  let output = FizzBuzz(ans);
  
  document.getElementById("output").innerHTML = output;
}

function FizzBuzz(ans){

  var divisor1 = document.getElementById("divisor1").value;
  if (divisor1 === ""){
    divisor1 = 3;
  }
  var divisor2 = document.getElementById("divisor2").value;
  if (divisor2 === ""){
    divisor2 = 5;
  }

  var sub1 = document.getElementById("sub1").value;
  if (sub1 === ""){
    sub1 = "Fizz";
  }

  var sub2 = document.getElementById("sub2").value;
  if (sub2 === ""){
    sub2 = "Buzz";
  }

  let outputarray = [];
  for(let i = 0; i<=ans.length-1; i++){
    let outputString = "";
    if(ans[i] % (divisor1*divisor2) === 0){
      outputString = sub1 + sub2;
    }
    else if(ans[i] % divisor1 === 0){
      outputString = sub1;
    }
    else if(ans[i] % divisor2 === 0){
      outputString = sub2;
    }
    else{
      outputString = ans[i];
    }
    outputarray[i] = outputString; 
  }

  return outputarray;
}