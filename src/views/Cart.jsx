import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Item } from "../components/Item";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';

const CartView = () => {
    const navigate = useNavigate();
    const { productsAdded: items, totalAmount } = useContext(CartContext);

    const goToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <Layout>
            <div>
                {items.length === 0 ? (
                    <div>
                    <h1>Carrito vacío</h1>
                <Link to="/">Volver al inicio</Link>
                </div>
                ) : (
                <div>
                    {items.map((product) => {
                        const quantityAdded = product.quantityAdded;

                        return (
                            <div className="relative">
                                <Item
                                    product={product.item}
                                    quantityAdded={quantityAdded}
                                />
                                <TrashWidget itemId={product.item.id} />
                            </div>
                        );
                    })}
                </div>
                )}
            </div>
            <div>
                <span>
                    Total a pagar: <strong>${totalAmount}</strong> {} 
                </span>                
                <Button onClick={goToCheckout}>
                    Pagar
                </Button>
            </div>

        </Layout>
    );
};

export default CartView;