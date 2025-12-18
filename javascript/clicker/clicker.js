let count = 0;
let button = document.getElementById("btn");
let text = document.getElementById("count");

button.addEventListener("click",function(){
  count=count+1;
  text.innerText=count;
})