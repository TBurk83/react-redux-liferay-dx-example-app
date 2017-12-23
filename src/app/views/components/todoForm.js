import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoOperations } from "../../state/ducks/todo";

import {Form, Input, FormGroup } from 'reactstrap';

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
                <FormGroup>
                    <Input type     = "text" 
                           value    = { currentTodo }
                           onChange = { this.handleInputChange }
                           placeholder = "Todo"
                    />
                </FormGroup>
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