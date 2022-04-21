
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");

let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

this.onload = function () {
    theInput.focus()
}

theAddButton.addEventListener('click',function(){
    if(theInput.value === ""){
        console.log("sss");

    }else{

        let noTasksMsg = document.querySelector(".no-tasks-message");

        if(document.body.contains(document.querySelector(".no-tasks-message"))){

            noTasksMsg.remove();
        }

        

        let mainSpan = document.createElement("span");

        let deleteElement = document.createElement("span");

        let text =document.createTextNode(theInput.value);

        let deleteText =document.createTextNode("Delete");

        mainSpan.appendChild(text);

        mainSpan.className = "task-box";

        deleteElement.appendChild(deleteText);

        deleteElement.className = "delete";

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);

        theInput.value = "";

        theInput.focus();

        calculateTasks();
    }
});

document.addEventListener('click',function(e){

    if(e.target.className == "delete"){
        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0){
            cNoTasks();
        }
    }

    if(e.target.classList.contains ( "task-box")){
        e.target.classList.toggle("finished");
    }

    calculateTasks();
});

function cNoTasks () {
    let msgSpan = document.createElement("span");

    let msgText = document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgText);

    msgSpan.className = "no-tasks-message";

    tasksContainer.appendChild(msgSpan);

}

function calculateTasks () {
    
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}