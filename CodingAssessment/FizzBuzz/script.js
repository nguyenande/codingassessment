function displayOutput() {
  var input1 = document.getElementById("input1").value;
  
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
  for(let i = 1; i<=input1; i++){
    let outputString = "";
    if(i % (divisor1*divisor2) === 0){
      outputString = sub1 + sub2;
    }
    else if(i % divisor1 === 0){
      outputString = sub1;
    }
    else if(i % divisor2 === 0){
      outputString = sub2;
    }
    else{
      outputString = i;
    }
    outputarray[i] = outputString; 
  }
  outputarray.splice(0,1);
  document.getElementById("output").innerHTML = outputarray;
}
