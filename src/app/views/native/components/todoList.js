import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, CheckBox, Text, Body } from 'native-base';
import { todoOperations } from "../../../state/ducks/todo";

const TodoItem = ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
  <Content>
    <CheckBox checked          = {isComplete}
           onPress         = {() => toggleTodo(id)}
    /> 
    <Body>
      <Text>
        {name}
      </Text>
    </Body>
    <Button onPress={() => deleteTodo(id)}><Text>Delete</Text></Button>
  </Content>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render() {
        return (
            <List>
                {this.props.todos.map(todo => 
                    <ListItem key={todo.id} 
                              toggleTodo={this.props.toggleTodo} 
                              deleteTodo={this.props.deleteTodo}
                              {... todo} />
                )}
            </List>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    todos: todoOperations.getVisibleTodos(state.todo.todos, ownProps.filter)
});

const mapDispatchToProps = {
    fetchTodos: todoOperations.fetchTodos,
    toggleTodo: todoOperations.toggleTodo,
    deleteTodo: todoOperations.deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);