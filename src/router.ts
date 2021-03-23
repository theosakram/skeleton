import { Home } from "./views/pages";
import { Redirect } from "./views/wrappers";

export const routes: Route[] = [
    {
        path: "/",
        exact: true,
        component: Redirect,
    },
    {
        path: "/home",
        title: "Home",
        component: Home,
    },
    {
        path: "/bubblegum",
        title: "Bubblegum",
    },
    {
        path: "/shoelaces",
        title: "Shoelaces",
    },
];
