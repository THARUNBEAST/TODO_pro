import { getTodos, addTodo, editTodo, deleteTodo } from './Api.js';
import { updateTodoList, getTodoInput, clearTodoInput, getClickedId } from './dom.js';

document.getElementById('todoform').addEventListener('submit', event => {
    event.preventDefault();
    const todo = getTodoInput();
    if (todo) {
        addTodo(todo).then(success => {
            if (success) {
                loadTodos();
                clearTodoInput();
            }
        });
    }
});

const loadTodos = () => {
    getTodos().then(todos => updateTodoList(todos));
};

document.querySelector('.seconddiv').addEventListener('click', event => {
    if (event.target.classList.contains('delete')) {
        const id = getClickedId(event);
        deleteTodo(id).then(success => {
            if (success) {
                loadTodos();
            }
        });
    } else if (event.target.classList.contains('Edit')) {
        const newData = prompt('Enter the new data');
        const id = getClickedId(event);
        if (newData && newData.trim()) {
            editTodo(id, newData.trim()).then(success => {
                if (success) {
                    loadTodos();
                }
            });
        }
    }
});

loadTodos();
