import * as t from "./types";
import { createReducer } from "../../utils";

const initState = {
    todos: [],
    currentTodo: ''
}

const todoReducer = createReducer(initState)({
        [t.ADD]: (state, action) => {
            return { ...state, todos: state.todos.concat(action.payload) }
        },
        [t.UPDATE]: (state, action) => {
            return { ...state, currentTodo: action.payload }
        },
        [t.LOAD]: (state, action) => {
            return { ...state, todos: action.payload }
        },
        [t.REPLACE]: (state, action) => {
            return { ...state,
                todos: state.todos
                    .map(t => t.id === action.payload.id ? action.payload : t)
            }
        },
        [t.REMOVE]: (state, action) => {
            return { ...state,
                todos: state.todos.filter(t => t.id !== action.payload)
            }
        }
    )
}

export default todoReducer;