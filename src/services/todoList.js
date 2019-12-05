import request from '../utils/request';

export function getTodoList() {
    return request('https://jsonplaceholder.typicode.com/todos');
}

export function deleteTodo(id) {
    return request(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });
}

export function addTodo(keyWord) {
    return request(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: keyWord,
            body: +new Date(),
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

export function changeTodoState(data) {
    return request(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}