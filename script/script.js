let container = document.createElement("div");
container.style.margin="250px"
container.style.padding="25px"
container.style.borderRadius="10px"
container.style.backgroundColor="tan"
document.body.appendChild(container);

let title = document.createElement("h1");
title.innerText += "To Do List";
container.appendChild(title);

let inp = document.createElement("input");
inp.setAttribute("type", "text");
inp.setAttribute("placeholder", "Add your task here");
inp.style.border = "1px solid grey";
inp.style.borderRadius = "25px";
inp.style.padding = "10px 20px";
inp.style.margin = "5px ";
inp.style.backgroundColor = "rgb(245, 234, 221) ";
container.appendChild(inp);

let btn = document.createElement("button");
btn.innerText += "Add";
btn.style.border = "none";
btn.style.borderRadius = "25px";
btn.style.padding = "10px 20px";
btn.addEventListener("click",addTask);
container.appendChild(btn);

let taskList = document.createElement("div");
container.appendChild(taskList);

function addTask() {
    let tasktxt = inp.value;
    if (tasktxt === "") {
        alert("Please enter a task!");
        return;
      }
    inp.value = "";


let taskDiv = document.createElement("div");
taskDiv.style.borderRadius = "25px";
taskList.appendChild(taskDiv);

let task = document.createElement("span");
task.innerText+= tasktxt;
task.style.display ="inline-block"
task.style.borderRadius = "25px";
task.style.padding = "10px 20px"; 
task.style.border = "1px solid rgb(78, 78, 78)";
task.style.width = "300px ";
task.style.margin = "5px ";
task.style.fontSize="17px";
task.style.color="rgb(61, 61, 61)";
task.style.backgroundColor = "rgb(243, 227, 209) ";
taskDiv.appendChild(task);

let donebtn = document.createElement("button");
donebtn.innerText += "Done";
donebtn.style.border = "none";
donebtn.style.borderRadius = "25px";
donebtn.style.padding = "10px 20px";
donebtn.style.marginRight = "5px";
donebtn.addEventListener("click",()=>{
    taskDiv.style.backgroundColor = "#28a745";
});
taskDiv.appendChild(donebtn);

let deletebtn = document.createElement("button");
deletebtn.innerText += "Delete";
deletebtn.style.border = "none";
deletebtn.style.borderRadius = "25px";
deletebtn.style.padding = "10px 20px";
deletebtn.addEventListener("click",()=>{
    taskList.removeChild(taskDiv)
});
taskDiv.appendChild(deletebtn);

}