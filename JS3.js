const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if(taskText === ""){ /*required*/
     alert("please Enter a task... ");
     return ;
    }
  const taskItem = document.createElement("li");
  const taskspan = document.createElement("span");

  taskspan.textContent = taskText;
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  
  deleteButton.addEventListener("click" , function(){
    taskList.removeChild(taskItem);
  });
  
  taskItem.appendChild(taskspan);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  taskInput.value ="";
});

