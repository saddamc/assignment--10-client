import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";


const Cart = () => {

    const carts = useLoaderData();


    return (
        <div className="max-w-7xl mx-auto my-12 font-Fira">
            <h2 className="mx-auto justify-center items-center text-center text-3xl font-bold"> My Product List</h2>
            <div className="grid gird-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-6 sm:justify-center mx-auto my-12 ">
                {
                    carts.map(product => <MyCart
                        key={product._id}
                        product={product}
                    ></MyCart>)
                }
            </div>
        </div>


    );
};

export default Cart;