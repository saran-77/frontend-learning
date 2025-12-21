const inputbox =document.getElementById("input-box");
const listcontainer =document.getElementById("list-container");

function addTask(){
  if(inputbox.value === ''){
    alert(" oops!   NO TASK HAS BEEN MENTIONED");
  }
  else{
    let li=document.createElement("li");
    li.textContent=inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputbox.value="";
  saveData();
}
inputbox.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});


listcontainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
}

function getData(){
 listcontainer.innerHTML = localStorage.getItem("data");
}

getData();