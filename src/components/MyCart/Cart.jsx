import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";


const Cart = () => {

    const carts = useLoaderData();


    return (
        <div>
            <h2>Cart Product: {carts.length} </h2>
            {/* {
                carts.map(product => <MyCart
                    key={product._id}
                    product={product}
                ></MyCart>)
            } */}
        </div>
    );
};

export default Cart;