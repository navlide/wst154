
/*
*********************************
 Subject: WST 154 (Summer 2023)
 Author: Edilvan E. Falcon
 Instructor: David Kazaryan
 Date Created: 2023.07.22
 Description: Assignment No. 4
 ********************************
*/


let todoList = [
  "Sleep", "Eat", "Perfom church duties", "Work", "Schooling", 
];

function createList() {
  ul.innerHTML = "";
  for (let i = 0; i < todoList.length; i = i + 1) {

    let li = document.createElement("li");
    li.innerHTML = todoList[i];

    let deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = "&#9003;";
    deleteBtn.addEventListener("click", deleteItem);
    li.appendChild(deleteBtn);
    deleteBtn.setAttribute("index", i);
    deleteBtn.setAttribute("class", "del-item-btn");
    ul.appendChild(li);
  
  }

}

let ul = document.createElement("ul");

createList();

document.getElementById("render-list").appendChild(ul);

function addToList() {
  let inputValue = document.getElementById("input-item").value;

  if(inputValue == "") {

    alert("ERROR: Empty list to do.  Pls provide item to proceed.");

  } else { 
    todoList.push(inputValue);
    createList();
  }
  
}

function deleteItem(e) {
  let itemToRemove = e.target.getAttribute("index");

  // console.log(todoList);
  // console.log(itemToRemove);
  
  todoList.splice(itemToRemove, 1);
  
  createList();
}

document
  .getElementById("add-item-btn")
  .addEventListener("click", addToList);