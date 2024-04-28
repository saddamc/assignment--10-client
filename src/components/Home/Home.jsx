import { useEffect } from "react";
import HomesSlider from "../Slider/HomesSlider";
import Product from "../Product/Product";


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