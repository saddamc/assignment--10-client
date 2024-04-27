import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "./HomesSlide.css"

const HomesSlider = () => {
    return (
        <div className='mx-auto max-w-7xl '>
            <Swiper
                className='relative group'
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextE1: ".button-next-slide",
                    prevE1: ".button-prev-slide",
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="image relative w-full mx-auto">
                        <img src="https://i.ibb.co/cDVyKFn/4.jpg" alt="" />
                    </div>
                    <div className="content title-content absolute max-w-[350px] space-y-3 text-white top-[10%] left-[3rem]">
                        <div className="text-white text-3xl font-bold ">Discover artisanal wonders for your home.</div>
                        <div className='des'>Discover artisanal wonders for your home in our curated collection of meticulously crafted treasures.</div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative w-full mx-auto">
                        <img src="https://i.ibb.co/2Yny7dq/1.jpg" alt="" />
                    </div>
                    <div className="content title-content absolute max-w-[350px] space-y-3 text-white top-[10%] left-[3rem]">
                        <div className="text-white text-3xl font-bold">Elevate your ambiance with crafted delights.</div>
                        <div className='des'>Elevate Your Space with Crafted Delights: Elevate your ambiance with unique handcrafted delights that add charm and character to any space.</div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative w-full mx-auto">
                        <img src="https://i.ibb.co/YpvQxB5/2.jpg" alt="" />
                    </div>
                    <div className="content title-content absolute max-w-[350px] space-y-3 text-white top-[10%] left-[3rem]">
                        <div className="text-white text-3xl font-bold">Unveil the allure of artisanal craftsmanship.</div>
                        <div className='des'>Discover Artisanal Charm: Unveil the allure of artisanal craftsmanship with our collection of unique and captivating handcrafted creations.</div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative w-full mx-auto">
                        <img src="https://i.ibb.co/f2mCNHj/3.jpg" alt="" />
                    </div>
                    <div className="content title-content absolute max-w-[350px] space-y-3 text-white top-[10%] left-[3rem]">
                        <div className="text-white text-3xl font-bold">Infuse your home with crafted elegance.</div>
                        <div className='des'>Crafted Elegance for Your Home: Infuse your home with timeless elegance through our selection of meticulously crafted and beautifully designed treasures.</div>


                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default HomesSlider;