import { useLoaderData, useParams } from "react-router-dom";


const CartDetails = () => {

    const product = useLoaderData();
    const { name, email, productname, time, price, rating, category, image, customization, stock, details, gender } = product;

    fetch(`https://56-coffee-store-server.vercel.app/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
    })

    return (
        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img className='w-[300px] h-[300px] ' src={products.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{products.productname} </h2>
                <p> {products.details} </p>
                <p>Available: {products.stock}</p>
                <p className='text-xl font-bold'>Price: {products.price} </p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default CartDetails;