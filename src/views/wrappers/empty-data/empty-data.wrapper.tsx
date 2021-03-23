import { isEmpty, isNil } from "lodash";
import { FC } from "react";

export const EmptyData: FC<Watcher> = ({ watchedValue, children }) => {
    if (isEmpty(watchedValue) || isNil(watchedValue)) {
        return <h1>There are no data</h1>;
    }

    return children;
};
