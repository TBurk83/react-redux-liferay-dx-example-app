/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the todo -- what can be dispatched from components
*/
import { getTodos, createTodo, updateTodo, destroyTodo } from './api'
import * as messageOperations from '../message/operations'
import * as actions from './actions';

const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(actions.loadTodos(todos)))
    }
}

const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(messageOperations.showMessage('Saving Todo'))
        createTodo(name)
            .then(res => dispatch(actions.addTodo(res)))
    }
}

const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(messageOperations.showMessage('Saving todo update'))
        const { todos } = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled = { ...todo, isComplete: !todo.isComplete }

        updateTodo(toggled)
            .then(res => dispatch(actions.replaceTodo(res)))
    }
}

const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(messageOperations.showMessage('Removing todo'))

        destroyTodo(id)
            .then(() => dispatch(actions.removeTodo(id)))
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

const updateCurrent = actions.updateCurrent;

export {
    fetchTodos,
	saveTodo,
	toggleTodo,
	deleteTodo,
	getVisibleTodos,
    updateCurrent
};