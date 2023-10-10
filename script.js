const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

addButton.addEventListener('click', addElement);
list.addEventListener('click', checkDel);

function addElement(event) {
    const input = document.getElementById("inputField");
    const inputText = input.value;
    //create a div that contains the li, the del button and the checked button
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");
    //create li
    const newTask = document.createElement("li");
    newTask.innerText = inputText;
    newTask.classList.add("newTask");

    toDoDiv.appendChild(newTask);

    //create delete task button

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteButton');

    toDoDiv.appendChild(deleteButton);

    //create check task button 

    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkButton');
    toDoDiv.appendChild(checkButton);

    //append everything to the ordered list
    list.appendChild(toDoDiv);

    input.value = "";
}

function checkDel(event) {
    let item = event.target;
    //delete
    if(item.classList[0] == "deleteButton") {
        let toBeRemoved = item.parentElement;
        toBeRemoved.remove();
    }

    if(item.classList[0] == "checkButton") {
        let text = item.parentElement.firstChild;
        text.style.textDecoration = "line-through";
    }
}
