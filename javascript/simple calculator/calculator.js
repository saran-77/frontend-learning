let num1= document.getElementById("num1")
let num2 =document.getElementById("num2")
let ans=  document.getElementById("ans")
let btn=  document.getElementById("btn")
let operator= document.getElementById("operator")


btn.addEventListener("click",function(){
  let n1=Number(num1.value)
  let n2=Number(num2.value)
  let op=operator.value
  operator.value

  if(op === "+"){
    result=n1+n2
  }

  else if(op === "-"){
    result=n1-n2
  }

  else if(op === "*"){
    result=n1*n2
  }

  else if(op ==="/"){
    if (n2 === 0){
      result="invalid input"
    }
    else{
      result=n1/n2
    }
  }

  ans.value=result;
})
