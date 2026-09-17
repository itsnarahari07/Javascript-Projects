let addtask = document.getElementById("addtask");
let addbutton = document.getElementById("addbutton");

addtask.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        if(addtask.value.trim() === ""){
            return;
        }
        addTask();
    }
    
});

function addTask(e) {
    
    let taskList = document.getElementById("tasklist");
    let task = document.createElement("li");
    taskList.appendChild(task);

    task.textContent = addtask.value;

    let butt = document.createElement("button");
    butt.textContent = "delete";
    task.appendChild(butt);

    addtask.value = "";

    butt.addEventListener("click", function(){
    task.remove();
});
}




