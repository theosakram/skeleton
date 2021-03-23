import { FC } from "react";
import { Loading, EmptyData } from "../../wrappers";
import { Table } from "../../components";

interface Props {
    products: any[];
    loading: boolean;
    error: null | string;
}

export const HomeContainer: FC<Props> = ({ products, loading }) => {
    return (
        <main className="home-container">
            <Loading watchedValue={loading}>
                <EmptyData watchedValue={products}>
                    <Table data={products} />
                </EmptyData>
            </Loading>
        </main>
    );
};
