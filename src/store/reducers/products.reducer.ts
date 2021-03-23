import { LoadErrorActions, ProductsActions } from "../actions";

interface ProductsState {
    products: Product[];
    product: Product | Object;
    loading: boolean;
    error: string | null;
}

export const State: ProductsState = {
    products: [],
    product: {},
    loading: false,
    error: null,
};

export const Reducer = (
    state: ProductsState,
    action: Action
): ProductsState => {
    const { type, value } = action;
    const { SET_ERROR, SET_LOADING } = LoadErrorActions;
    const { SET_PRODUCTS, SET_ONE_PRODUCT, DELETE_PRODUCT } = ProductsActions;

    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: value,
            };

        case SET_ONE_PRODUCT:
            return {
                ...state,
                product: value,
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== value
                ),
            };

        case SET_LOADING:
            return {
                ...state,
                loading: value,
            };

        case SET_ERROR:
            return {
                ...state,
                error: value,
            };

        default:
            return state;
    }
};
