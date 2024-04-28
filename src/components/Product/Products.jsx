import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
    const { id, name, image, price, rating } = products;
    return (
        <div>
            <div className="card glass font-Fira shadow-gray-600 w-[600px] h-[650px] shadow-lg">
                <figure><img className=' w-[550px] h-[450px] mt-12 ' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title opacity-50">{name}</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <p className='ml-2'>{rating}</p>
                    </div>

                    <div className=''>
                        <p className='text-xl font-semibold'>{price}</p>

                    </div>
                    <div className="card-actions justify-between">
                        <button className="w-[120px] h-[35px] items-center text-center font-bold bg-[#ffba00] hover:bg-green-500 hover:text-white text-black  ">+ Add to Cart</button>
                        <Link to={`/products/${id}`}>
                            <button className="w-[120px] h-[35px] items-center text-center font-bold bg-[#ffba00]  hover:bg-green-500 hover:text-white text-black ">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

Products.propTypes = {
    products: PropTypes.object
}