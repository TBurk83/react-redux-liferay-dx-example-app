import { TodoList } from "../views/pages";

const routes = [
    {
        path: "/:status",
        component: TodoList,
        exact: true,
    }
];

export default routes;