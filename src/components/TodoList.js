import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo'
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FaBeer from 'react-icons/lib/fa/beer';

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
    <ListGroupItem>
        <input type             = "checkbox" 
               name             = {name} 
               id               = {name.replace(/ /g,'').toLowerCase()} 
               checked          = {isComplete}
               onChange         = {() => toggleTodo(id)}
        /> 
        {name}
        <Button onClick={() => deleteTodo(id)}><FaBeer /></Button>
    </ListGroupItem>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render() {
        return (
            <div className="Todo-List">
                <ListGroup>
                    {this.props.todos.map(todo => 
                        <TodoItem key={todo.id} 
                                  toggleTodo={this.props.toggleTodo} 
                                  deleteTodo={this.props.deleteTodo}
                                  {... todo} />
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }), 
                { fetchTodos, toggleTodo, deleteTodo }
)(TodoList)