import { createTodo } from "./components/todo/index.js";

const TODO_ITEMS = []

const addBtn = document.querySelector('#add-todo')

addBtn.addEventListener('click', (e) => {
    
    e.preventDefault()
    createTodo(TODO_ITEMS)
})