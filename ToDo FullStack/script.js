function addTask() {
    const newDiv = document.createElement("div");
    const left = document.createElement("div");
    const inputField = document.getElementById("newtask");
    const rightside = document.createElement("div");

    if (inputField.value.trim() === "") {
        alert("Please enter a task!!");
        return;
    }

    left.innerHTML = inputField.value;
    newDiv.appendChild(left);
    newDiv.appendChild(rightside);
    newDiv.className = "task";

    createDeleteButton(newDiv, rightside);
    createEditButton(newDiv, left, rightside);

    const parent = document.querySelector(".todobox");
    parent.appendChild(newDiv);
    inputField.value = "";
}


// ===========


function createDeleteButton(taskDiv, parentElement) {
    const del = document.createElement("button");
    del.innerHTML = "Delete";
    del.className = "delete-btn";
    parentElement.appendChild(del);
    del.onclick = () => {
        taskDiv.parentElement.removeChild(taskDiv);
    };
}


// ============= 


function createEditButton(taskDiv, left, parentElement) {
    const edittask = document.createElement("button");
    edittask.innerHTML = "Edit";
    edittask.className = "edit-task";
    parentElement.appendChild(edittask);

    let isEditing = false;

    edittask.onclick = () => {
        if (!isEditing) {
            isEditing = true;
            const tempinput = document.createElement("input");
            tempinput.value = left.innerHTML;
            const ok = document.createElement("button");
            ok.className = "done";
            ok.innerHTML = "OK";

            taskDiv.appendChild(tempinput);
            taskDiv.appendChild(ok);

            ok.onclick = () => {
                left.innerHTML = tempinput.value;
                taskDiv.removeChild(tempinput);
                taskDiv.removeChild(ok);
                isEditing = false;
            };
        }
    };
}