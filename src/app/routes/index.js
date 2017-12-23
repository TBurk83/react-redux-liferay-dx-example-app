import { TodoList } from "../views/components";

const routes = [
    {
        path: "/:filter?",
        component: TodoList,
        exact: true,
    }
];

export default routes;