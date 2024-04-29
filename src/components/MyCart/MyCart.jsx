import PropTypes from 'prop-types';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { TiEye } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = ({ product, cartProduct, setCartProduct }) => {
    const { _id, name, email, productname, time, price, rating, category, image, customization, stock, details, gender } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/product/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleleCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = cartProduct.filter(cof => cof._id !== _id);
                            setCartProduct(remaining);
                        }
                    })
            }
        });

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img className='w-[300px] h-[300px] ' src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productname} </h2>
                <p> {details} </p>
                <p>Available: {stock}</p>
                <p className='text-xl font-bold'>Price: {price} </p>
                <div className="card-actions justify-end space-x-4">
                    <Link to={`/product/${_id}`}>
                        <button className="btn btn-primary bg-[#ffba00] text-black font-bold border-none text-lg hover:text-white"><TiEye /> </button>
                    </Link>

                    <button className="btn btn-primary bg-[#ffba00] text-black font-bold border-none text-lg hover:text-white"> <FaRegEdit /> </button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-[#ffba00] text-black font-bold border-none text-lg hover:text-white"><MdDeleteForever /> </button>


                </div>
            </div>
        </div>
    );
};

export default MyCart;
MyCart.propTypes = {
    product: PropTypes.object
}