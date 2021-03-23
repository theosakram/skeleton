/// <reference types="react-scripts" />

declare interface Route {
    path: string;
    title?: string;
    component?: ReactNode;
    exact?: boolean;
    main?: any;
}

declare type HistoryProps = History<LocationState>;
declare type Dictionary = { [index: string]: any };

declare interface Action {
    type: string;
    value: any;
}

declare interface Watcher {
    children: ReactElement;
    watchedValue: any[] | Object;
}

declare interface Changer {
    oldVal: string;
    newVal: string;
}

// products
declare interface Product {
    id: number;
    name: string;
    stock: number;
    price: number;
}
