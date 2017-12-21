import React, { Component } from 'react'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../reducers/todo'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui-icons/DeleteForever';


const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
    <ListItem dense button >
        <Checkbox 
               name             = {name} 
               id               = {name.replace(/ /g,'').toLowerCase()} 
               checked          = {isComplete}
               onChange         = {() => toggleTodo(id)}
        /> 
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteTodo(id)}>
            <DeleteForever />
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render() {
        return (
            <List className="todoList">
                {this.props.todos.map(todo => 
                    <TodoItem key={todo.id} 
                              toggleTodo={this.props.toggleTodo} 
                              deleteTodo={this.props.deleteTodo}
                              {... todo} />
                )}
            </List>
        )
    }
}

export default compose(
  connect(
      (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }), 
                            { fetchTodos, toggleTodo, deleteTodo }
  )
)(TodoList)