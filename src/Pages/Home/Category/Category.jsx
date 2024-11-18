import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle subHeading={"From 11:00 am to 10:00 pm"} heading={"Order Online"}/>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    className='mb-20'
                >
                    <SwiperSlide><img src={slide1} />
                        <h1 className='text-white text-xl -mt-16 text-center font-semibold'>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide2} />
                        <h1 className='text-white text-xl -mt-16 text-center font-semibold'>Pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide3} />
                        <h1 className='text-white text-xl -mt-16 text-center font-semibold'>Soup</h1>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide4} />
                        <h1 className='text-white text-xl -mt-16 text-center font-semibold'>Cake</h1>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide5} />
                        <h1 className='text-white text-xl -mt-16 text-center font-semibold'>Salad</h1>
                    </SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;