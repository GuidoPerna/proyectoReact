import { Layout } from '../components/Layout';
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { inventario } from "../mocks/item.mocks";
import ItemListContainer from '../components/ItemListContainer';

const CategoryView = () => {
    const {category} = useParams();
    const categories = inventario.filter(product => product.category === category )

    return (
        <Layout>
            {categories.map((product)=> (
            <Item product={product} />
            ))}
        </Layout>
    );
};

export default CategoryView;