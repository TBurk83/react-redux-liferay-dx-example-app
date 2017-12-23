import { TodoList } from "../views/components";

const routes = [
    {
        path: "/:status?",
        component: TodoList,
        exact: true,
    }
];

export default routes;