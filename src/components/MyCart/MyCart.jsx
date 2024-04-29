import PropTypes from 'prop-types';

const MyCart = ({ product }) => {
    const { name, email, productname, time, price, rating, category, image, customization, stock, details, gender } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img className='w-[300px] h-[300px] ' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productname} </h2>
                <p> {details} </p>
                <p>Available: {stock}</p>
                <p className='text-xl font-bold'>Price: {price} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-[#ffba00] text-black font-bold border-none text-lg hover:text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
MyCart.propTypes = {
    cart: PropTypes.object
}