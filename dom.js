export const updateTodoList = (todos) => {
    const secondDiv = document.querySelector('.seconddiv');
    let html = '';
    todos.forEach((element) => {
        html += `<ul class="ul"><li>${element.todo}</li>
        <button class="Edit" data-id="${element.id}">Edit</button>
        <button class="delete" data-id="${element.id}">Delete</button></ul>`;
    });
    secondDiv.innerHTML = html;
};

export const getTodoInput = () => {
    return document.getElementById('todoInput').value.trim();
};

export const clearTodoInput = () => {
    document.getElementById('todoInput').value = '';
};

export const getClickedId = (event) => {
    return event.target.getAttribute('data-id');
};
