export const createTodo = (array) => {

    const todoItem = document.querySelector('#todo-item').value
    array.push(todoItem)

    alert(array)
}

