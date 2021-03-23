import { FC } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loading: FC<Watcher> = ({ watchedValue, children }) => {
    if (watchedValue) {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        );
    }

    return children;
};
