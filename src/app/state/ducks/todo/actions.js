/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/

import * as t from "./types";

const updateCurrent = (val) => ({ type: t.UPDATE, payload: val })
const loadTodos = (todos) => ({ type: Tt.LOAD, payload: todos })
const addTodo = (todo) => ({ type: t.ADD, payload: todo })
const replaceTodo = (todo) => ({ type: t.REPLACE, payload: todo })
const removeTodo = (id) => ({ type: t.REMOVE, payload: id })

export {
    updateCurrent,
    loadTodos,
    addTodo,
    replaceTodo,
    removeTodo
}