/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the todo -- what can be dispatched from components
*/
import { getTodos, createTodo, updateTodo, destroyTodo } from './api'
import { showMessage } from './message'

import * as actions from "./actions";

const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Saving todo update'))
        const { todos } = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled = { ...todo, isComplete: !todo.isComplete }

        updateTodo(toggled)
            .then(res => dispatch(replaceTodo(res)))
    }
}

const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(showMessage('Removing todo'))

        destroyTodo(id)
            .then(() => dispatch(removeTodo(id)))
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'active':
            return todos.filter(t => !t.isComplete)
        case 'completed':
            return todos.filter(t => t.isComplete)
        default:
            return todos
    }
}

export {
    fetchTodos,
	saveTodo,
	toggleTodo,
	deleteTodo,
	getVisibleTodos
};