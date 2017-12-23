import React from "react";
import { Route } from "react-router-dom";
import routes from "../../routes";

import {TodoForm, Message, Header, TodoList} from "../components"

const App = ( ) => (
    <div>
        <Header />

        <Message message="" />

        <TodoForm />

        <Route path='/:filter?' 
           render = { 
              ({match}) => (
                  <TodoList filter={match.params.filter} />
              )
            } 
        />

        <footer>
            I`m the footer, I am on every page.
        </footer>
    </div>
);
export default App;