import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoOperations } from "../../state/ducks/todo";

class TodoForm extends Component {

    handleInputChange = (evt) => {
        const val = evt.target.value
        this.props.updateCurrent(val)
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.saveTodo(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input type     = "text" 
                       value    = { currentTodo }
                       onChange = { this.handleInputChange }
                />
            </form>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    currentTodo: state.todo.currentTodo
} );

const mapDispatchToProps = {
    updateCurrent: todoOperations.updateCurrent,
    saveTodo: todoOperations.saveTodo
};

export default connect( mapStateToProps, mapDispatchToProps )( TodoForm );