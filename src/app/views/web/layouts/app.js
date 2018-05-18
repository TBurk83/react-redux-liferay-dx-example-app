import React from "react";
import { Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css'; 
import Styles from "./css";

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
            Footer
        </footer>
        <Styles />
    </div>
);
export default App;