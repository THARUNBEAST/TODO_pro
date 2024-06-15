export const getTodos = async () => {
    try {
        const response = await fetch('https://todo-jtuk.onrender.com/api/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
};

export const addTodo = async (todo) => {
    const pojo = { todo };
    try {
        const response = await fetch('https://todo-jtuk.onrender.com/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pojo)
        });
        return response.ok;
    } catch (error) {
        console.error('Error adding todo:', error);
        return false;
    }
};

export const editTodo = async (id, todo) => {
    const pojo = { todo };
    try {
        const response = await fetch(`https://todo-jtuk.onrender.com/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pojo)
        });
        return response.ok;
    } catch (error) {
        console.error('Error editing todo:', error);
        return false;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`https://todo-jtuk.onrender.com/api/todos/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    } catch (error) {
        console.error('Error deleting todo:', error);
        return false;
    }
};
