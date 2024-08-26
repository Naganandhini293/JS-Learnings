const todoListContainer = document.createElement("div")
todoListContainer.setAttribute("class", "todo-ctr")

const inputCtr = document.createElement("div")
inputCtr.setAttribute("class", "input-ctr")

const main = document.getElementById("main")
main.appendChild(todoListContainer)

//TILE
const todoTitle = document.createElement("h1")
todoTitle.innerHTML = "Todo List"

//INPUT
const inputBox =  document.createElement("input")
inputBox.setAttribute("class", "input-el")
inputBox.focus()
let todoInputData;
inputBox.addEventListener("change", (e) => {
    todoInputData = e.target.value;
});
inputBox.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        RenderList(todoInputData)
    }
})

//ENTET 
const enterBtn = document.createElement("button")
enterBtn.setAttribute("class", "enter-btn")
enterBtn.innerHTML = "Add"
enterBtn.addEventListener("click", ()=>{
    RenderList(todoInputData)
})

todoListContainer.appendChild(todoTitle)
inputCtr.appendChild(inputBox)
inputCtr.appendChild(enterBtn)
todoListContainer.appendChild(inputCtr)

//appending task list ctr
let todoListCtr =document.createElement("ul")
todoListCtr.setAttribute("class", "list-ctr")
todoListContainer.appendChild(todoListCtr)

//Create task ctr 
const createTaskDiv = (data) =>{
    const taskDiv = document.createElement("li")
    taskDiv.setAttribute("id", data.id)
    taskDiv.setAttribute("class", "task-str")
    const editBtn = document.createElement("button")
    editBtn.setAttribute("class", "edit-btn")
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "delete-btn")
    editBtn.innerHTML = "Edit"
    editBtn.addEventListener("click", (e)=>{
        let listId = e.target.parentElement.id

        //Setting input box value with edit text
        let listTask = e.target.parentElement.querySelector("span").innerHTML
        inputBox.value = listTask  

        // Filter out the task with the matching id remove that element form DOM
        todoList = todoList.filter(data => data.id !== parseInt(listId)); 
        e.target.parentElement.remove();
    })

    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener("click", (e) => {
        let listId = e.target.parentElement.id;

        // Filter out the task with the matching id
        todoList = todoList.filter((data) => {
            return data.id !== parseInt(listId)
        });

        // Remove the taskDiv from the DOM and updating the local storage value
        e.target.parentElement.remove();
        localStorage.setItem("todoList", JSON.stringify(todoList))
    });
    const task = document.createElement("span")
    task.innerHTML = data.name
    taskDiv.appendChild(task)
    taskDiv.appendChild(editBtn)
    taskDiv.appendChild(deleteBtn)
    return taskDiv
}

//check: If any task present in local storage and render to DOM
let todoList = JSON.parse(localStorage.getItem("todoList")) || []
todoList?.map((element) => {
    console.log(element)
    const taskDiv = createTaskDiv(element)
    todoListCtr.appendChild(taskDiv)
});

//function to render new added task
const RenderList=(todoInputData)=>{
    if(todoInputData.length > 0){
        let data = {
            id:  todoList.length + 1,
            name: todoInputData
        }
        const taskDiv = createTaskDiv(data)
        todoListCtr.appendChild(taskDiv)
        todoList.push(data)
        console.log(todoList)
        localStorage.setItem("todoList", JSON.stringify(todoList))
        inputBox.innerHTML = ""
    }
    inputBox.value = "" 
}