import "./home.page.scss";
import { FC } from "react";
import { HomeContainer } from "../../containers";
import { ProductsProvider } from "../../../bloc/providers/products.provider";

export const Home: FC = () => {
    const {
        state: { products, loading, error },
    } = ProductsProvider({});

    return (
        <main className="home">
            <HomeContainer
                products={products}
                loading={loading}
                error={error}
            />
        </main>
    );
};
