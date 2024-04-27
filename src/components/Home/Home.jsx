import { useEffect } from "react";
import HomesSlider from "../Slider/HomesSlider";


const Home = () => {
    useEffect(() => {
        document.title = `HARBOR | HOME`;
    })



    return (
        <div>
            <HomesSlider></HomesSlider>


        </div>

    );
};

export default Home;