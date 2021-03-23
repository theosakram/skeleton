import "./button.component.scss";
import { FC, ReactNode } from "react";

type Color =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "default";

interface ClassName {
    color?: Color;
    type?: "outlined" | "default" | "text";
}

interface Props extends ClassName {
    children: ReactNode;
    onClick?: any;
}

export const Button: FC<Props> = (props) => {
    const { color, type, children, onClick } = props;

    const declareClassName = ({ color, type }: ClassName) => {
        const fixedColor = color ? color : "default";
        const fixedType = type ? type : "default";

        return `${fixedType}-${fixedColor}`;
    };

    return (
        <button onClick={onClick} className={declareClassName({ color, type })}>
            {children}
        </button>
    );
};
