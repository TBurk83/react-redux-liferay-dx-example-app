import React from "react";
import { Route } from "react-router-dom";
import { Container, Text} from 'native-base';
import {TodoForm, TodoList, Navigation} from "../components"

const App = ( ) => (
   <Container>

      <Navigation /> 

      <TodoForm />

      <Route path='/:filter?' 
         render = { 
            ({match}) => (
                <TodoList filter={match.params.filter} />
            )
          } 
      />
    </Container>
);
export default App;