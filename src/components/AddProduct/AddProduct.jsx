import { BsPersonFillAdd } from "react-icons/bs";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const time = form.time.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const image = form.image.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const details = form.details.value;
        const gender = form.gender.value;


        const newProduct = { name, email, product, time, price, rating, category, image, customization, stock, details, gender }

        console.log(newProduct);

        // send data to ther server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Good job!",
                    text: "Product Added Successfully !",
                    icon: "success"
                });
            })
    }

    return (
        <div className=" p-24 font-Fira max-w-7xl mx-auto">

            <div className="bg-slate-300 p-10 rounded-lg shadow-lg shadow-blue-300">
                <form onSubmit={handleAddProduct}>
                    <div className="bg-[#FFCC1D] p-2 mb-4 rounded-lg flex justify-center items-center text-center gap-2 text-3xl font-extrabold">
                        <p className="text-white "><BsPersonFillAdd></BsPersonFillAdd></p>
                        <p className="text-white">Add</p>
                        <p>Your Product</p>
                    </div>
                    {/* user name and Email */}
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="User Name"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="User Email"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form name and Processing Time*/}
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="product" placeholder="Product Name"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="time" placeholder="Processing Time"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form price & rating */}
                    <div className="flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form category and image  */}
                    <div className="flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image Url"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form customazation & stock  */}
                    <div className="flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization (YES/NO)</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" placeholder="Category"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Stock Abailable (STOCK/ORDER) </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="stock" placeholder="Image Url"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form Description row */}
                    <div className="mb-4 ">
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="details" placeholder="Description"
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="mb-8 ">
                        <div className="form-control w-full mx-auto ">
                            <div className="inline-table">
                                <td className="">Gender: </td>
                                <div>
                                    <td>
                                        Male <input type="radio" name="gender" className="" required />
                                        Female <input type="radio" name="gender" required />
                                    </td>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="flex items-center text-red-500">
                        <p> <IoArrowRedo />  </p>
                        <input type="submit" value="Add Coffee" className="btn w-[98%] border-none text-2xl bg-[#FFCC1D] text-white " />
                        <p> <IoArrowUndo />  </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;