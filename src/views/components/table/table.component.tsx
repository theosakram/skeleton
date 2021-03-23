import { FC } from "react";
import "./table.component.scss";

interface Props {
    data: any[];
}

export const Table: FC<Props> = ({ data }) => {
    return <h1>{JSON.stringify(data)}</h1>;
};
