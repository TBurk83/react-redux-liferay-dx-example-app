import React, { Component } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Message from './Message'
import Footer from './Footer'
import PersonForm from './PersonForm'


class Main extends Component {
    render() {
        return (
            <div class="Todo-App">
              <Message message="" />
              <TodoForm />
              <Router>
                <div>
                  <Route path='/:filter?' 
                         render = { 
                            ({match}) => (
                                <TodoList filter={match.params.filter} />
                            )
                          } 
                  />
                  <Footer />
                  <PersonForm />
                </div>
              </Router>
            </div>
        );
    }
}

export default Main