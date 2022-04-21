
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

this.onload = function () {
    theInput.focus()
}

theAddButton.addEventListener('click',function(){
    if(theInput.value === ""){
        console.log("sss");

    }else{
        noTasksMsg.remove();

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
    }
})