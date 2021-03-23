import { useEffect, useState } from "react";
import { ProductsService } from "../services/products.service";
import { renameObjectKeys } from "../../utils/renameObjectKeys";

interface Props {
    id?: number;
}

export const ProductsProvider = ({ id }: Props) => {
    const {
        state,
        GetProducts,
        GetProductsWithQuery,
        DeleteProduct,
    } = ProductsService({
        id,
    });
    const [query, setQuery] = useState<string>("");
    const changer: string[] = ["id", "nama", "stok", "harga", "rating"];

    const onQueryChange = (query: string) => {
        return setQuery(query);
    };

    const changedProducts = renameObjectKeys({
        target: state.products,
        changer,
    });

    const newState = {
        ...state,
        products: changedProducts,
    };

    useEffect(() => {
        GetProductsWithQuery(query);
    }, [query]);

    useEffect(() => {
        GetProducts();
    }, []);

    return { state: newState, onQueryChange, DeleteProduct };
};
