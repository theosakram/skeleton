import "./aside.wrapper.scss";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
    routes: Route[];
}

export const Aside: FC<Props> = ({ routes }) => {
    return (
        <main className="aside">
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.path}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
