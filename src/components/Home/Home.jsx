import HomesSlider from "../Slider/HomesSlider";
import Product from "../Product/Product";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        document.title = `HARBOR | HOME`;
    })




    return (
        <div>
            <HomesSlider></HomesSlider>
            <Product></Product>


        </div>

    );
};

export default Home;