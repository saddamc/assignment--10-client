import { useEffect, useState } from "react";
import Products from "./Products";


const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="font-Fira mx-auto max-w-7xl rounded-xl mt-24  justify-center items-center">
            <div className="text-center max-w-[800px] mx-auto ">
                <h2 className="text-[35px] font-bold my-4">Discover a World of Handcrafted <br /> Elegance and Natural Beauty </h2>
                <p className="mb-12">Explore our curated collection of exquisite handcrafted items, ranging from stunning wooden sculptures to eco-friendly kitchenware and charming home decor. Each product is crafted with meticulous attention to detail, showcasing the beauty of natural materials like teak wood, bamboo, and jute. Whether you're looking to add a touch of rustic charm to your home or elevate your style with unique accessories, our collection has something for every taste and occasion. Embrace the artistry of handmade craftsmanship and bring warmth and sophistication into your living spaces with our carefully curated selection of handcrafted treasures.</p>
            </div>
            <div className="grid gird-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 sm:justify-center  ">
                {
                    product.map(products => <Products key={products.id} products={products}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;
