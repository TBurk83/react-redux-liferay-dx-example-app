import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoOperations } from "../../../state/ducks/todo";
import { Container, Header, Content, Form, Item, Input } from 'native-base';

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
            <Form onSubmit={this.handleSubmit}>
                <Input value    = { currentTodo }
                       onChangeText = { this.handleInputChange }
                       placeholder = "Todo"
                /> 
            </Form>
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