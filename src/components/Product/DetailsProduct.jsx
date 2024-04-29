import { useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";


const DetailsProduct = () => {

    useEffect(() => {
        document.title = `PRODUCT DETAAILS`
    }, [])

    const product = useLoaderData();
    const { id } = useParams();
    const products = product.find(products => products.id == id);
    console.log(products);


    return (
        <div className="sm:p-12 my-12 font-Roboto max-w-7xl mx-auto  ">
            <div className="grid grid-cols-5 gap-6 px-12 ">
                <div className="col-span-2 space-y-4">
                    <figure><img className="w-[350px] h-[400px] border-[2px] p-2 " src={products.image} alt="" /></figure>
                    <figure><img className="w-[350px] h-[400px] border-[2px] p-2 " src={products.image.slice(1)} alt="" /></figure>
                    <figure><img className="w-[350px] h-[400px] border-[2px] p-2" src={products.image.slice(2)} alt="" /></figure>

                </div>
                <div className="col-span-3 space-y-6">
                    <h3 className="text-3xl font-bold">{products.name} </h3>
                    <hr />
                    <p className="opacity-70"> {products.description} </p>
                    <hr />
                    <div className="flex">
                        <div className="rating">
                            <p className='mr-2'>Rating: {products.rating}</p>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />

                        </div>
                        <div>
                            <p className="ml-4 border-l border-gray-500 "></p>
                            <button className="ml-8 flex border-l border-gray-500 pl-8 items-center"> <span className="opacity-70 mr-3"> <FaPencilAlt></FaPencilAlt> </span>  Write a Review</button>
                        </div>

                    </div>
                    <hr />
                    <p className="text-3xl font-Fira text-green-500">  {products.price} </p>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">

                            <tbody className="bg-gray-200 text-[16px] ">
                                {/* row 1 */}
                                <tr>
                                    <td className="font-bold">Brand:</td>
                                    <td className="opacity-70">Harbor </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td className="font-bold">Movement:</td>
                                    <td className="opacity-70">{products.sub_name}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className="font-bold">Available: </td>
                                    <td className="opacity-70"> {products.stockStatus} </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">Processing Time: </td>
                                    <td className="opacity-70"> {products.processing_time} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex font-Fira items-center text-center justify-center bg-[#FFCC1D] p-2 w-[280px] h-[50px] text-lg font-bold hover:bg-black hover:text-white "> <span className="mr-2 font-bold"> <BsCart3></BsCart3> </span> Add To Cart</button>
                        <button className="flex font-Fira items-center text-center justify-center bg-black text-white p-2  w-[280px] h-[50px] text-lg font-bold hover:bg-[#FFCC1D] hover:text-black "> <span className="mr-2 font-bold"> <IoArrowRedoSharp></IoArrowRedoSharp> </span> Buy it now</button>
                    </div>
                    <div className="lg:flex gap-2  pt-24 ">
                        <div>
                            <figure><img className="w-[350px] h-[400px] border-[2px] p-6" src={products.image.slice(3)} alt="image coming soon" /></figure>
                        </div>
                        <div>
                            <figure><img className="w-[350px] h-[400px] border-[2px] p-6" src={products.image.slice(4)} alt="image coming soon" /></figure>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsProduct;
