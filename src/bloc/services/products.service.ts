import { ProductsURL } from "../../urls";
import { Request } from "../../utils/request";
import { ProductsActions } from "../../store/actions";
import { useCallback, useMemo, useReducer } from "react";
import { ProductsInitialState, ProductsReducer } from "../../store/reducers";

interface Props {
    id?: number;
}

export const ProductsService = ({ id }: Props) => {
    const [state, dispatch] = useReducer(ProductsReducer, ProductsInitialState);
    const { SET_PRODUCTS, SET_ONE_PRODUCT, DELETE_PRODUCT } = ProductsActions;

    const _productsRequest = useMemo(() => {
        return new Request({
            url: ProductsURL,
            dispatch,
        });
    }, []);

    const GetProducts = useCallback(() => {
        if (id) {
            return _productsRequest.get({ id, type: SET_ONE_PRODUCT });
        }

        return _productsRequest.get({ type: SET_PRODUCTS });
    }, [id]);

    const GetProductsWithQuery = useCallback((query: string) => {
        if (query) {
            return _productsRequest.query({ type: SET_PRODUCTS, query });
        }

        return;
    }, []);

    const DeleteProduct = useCallback(
        (id: number) => {
            return _productsRequest.remove({ id, type: DELETE_PRODUCT });
        },
        [id]
    );

    return { state, GetProducts, GetProductsWithQuery, DeleteProduct };
};
