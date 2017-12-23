import React from "react";
import { Link, Route } from "react-router-dom";
import routes from "../../routes";

import {TodoForm, Message} from "../components"

const App = ( ) => (
    <div>
        <header>
            <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/complete">Complete</Link>
        </header>

        <Message message="" />

        <TodoForm></TodoForm>

        { routes.map( route => (
            <Route key={ route.path } { ...route } />
        ) ) }

        <footer>
            I`m the footer, I am on every page.
        </footer>
    </div>
);
export default App;