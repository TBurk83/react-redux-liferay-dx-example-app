import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo'
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText  } from 'reactstrap';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
    <ListGroupItem>
        <ListGroupItemText>
          <input type             = "checkbox" 
                 name             = {name} 
                 id               = {name.replace(/ /g,'').toLowerCase()} 
                 checked          = {isComplete}
                 onChange         = {() => toggleTodo(id)}
          /> 
          {name}
          <Button size="sm" className="pull-right" onClick={() => deleteTodo(id)}><MdDeleteForever /></Button>
        </ListGroupItemText> 
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