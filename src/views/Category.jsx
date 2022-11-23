import { Layout } from '../components/Layaout';
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { inventario } from "../mocks/item.mocks";

const CategoryView = () => {
    const {category} = useParams();
    const categories = inventario.filter(product => product.category === "teclados" )

    return (
        <Layout>
            {categories.map((product)=> (
            <Item product={product} />
            ))}
        </Layout>
    );
};

export default CategoryView;