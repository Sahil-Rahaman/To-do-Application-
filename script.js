const taskBox = document.querySelector("#task-box");
const listContainer= document.querySelector(".list-container");
const addButton= document.querySelector("#add-button");

addButton.addEventListener("click", () =>{
    if(taskBox.value===""){
        alert("Need to Add Task");
    }
    else{
        let task = document.createElement("li"); 
        task.innerHTML = taskBox.value;
        listContainer.appendChild(task);

        let cross= document.createElement("span");
        cross.innerHTML = "\u00d7";
        task.appendChild(cross);
    }
    taskBox.value= "";
    saveData();

})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function extractData(){
    listContainer.innerHTML= localStorage.getItem("Data");
}

extractData();