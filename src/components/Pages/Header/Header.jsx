import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/pL5PyJL/painting-ideas-thumbnail-jpg.jpg" alt="" />
                    <div className='absolute text-start left-0 top-0 pt-7 md:pt-36 lg:pt-36 pl-8 md:pl-20 lg:pl-36 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)'>
                        <div className='space-y-4 text-white w-2/3 md:w-1/2 lg:w-1/3 animate-bounce'>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Draw Your painting</h1>
                            <p className='text-xs md:text-sm lg:text-xl'>Every color carries a story woven into the canvas. In this artwork, I’ve opened a new chapter of emotions, where each stroke brings my thoughts and dreams to life. In art, I find freedom, embarking on a journey on the wings of imagination.</p>
                        </div>
                        <button className='btn btn-secondary '>Visiting Your painting</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/D1YYLpn/MM6w-Vn7-Riuc-I17-Sg-munnar.jpg" alt="" />
                    <div className='absolute text-start left-0 top-0 pt-7 md:pt-36 lg:pt-36 pl-8 md:pl-20 lg:pl-36 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)'>
                        <div className='space-y-4 text-white w-2/3 md:w-1/2 lg:w-1/3 animate-bounce'>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">In the mountains, I find my spirit soaring high.</h1>
                            <p className='text-xs md:text-sm lg:text-xl'>As I gaze upon the sprawling landscape, a sense of wonder fills my soul. The mountains stand tall, guardians of timeless tales. Each breeze carries whispers of adventure and possibility. Here, I find both inspiration and a deeper connection to nature</p>
                        </div>
                        <button className='btn btn-secondary '>Visiting Your painting</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co.com/jg0wCGL/hq720.jpg" alt="" />
                    <div className='absolute text-start left-0 top-0 pt-7 md:pt-36 lg:pt-36 pl-8 md:pl-20 lg:pl-36 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)'>
                        <div className='space-y-4 text-white w-2/3 md:w-1/2 lg:w-1/3 animate-bounce'>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Draw Your painting</h1>
                            <p className='text-xs md:text-sm lg:text-xl'>This collection of six different landscape paintings, each featuring a full moon as the central theme. Colorful scenes, combining elements of nature such as trees, lakes, and mountains, with the moon. Here is a brief description of each painting</p>
                        </div>
                        <button className='btn btn-secondary '>Visiting Your painting</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/dGZqkhq/photo-1706631437824-e000e6879353-1.jpg" alt="" />
                    <div className='absolute text-start left-0 top-0 pt-7 md:pt-36 lg:pt-36 pl-8 md:pl-20 lg:pl-36 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)'>
                        <div className='space-y-4 text-white w-2/3 md:w-1/2 lg:w-1/3 animate-bounce'>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Where the river dances beneath the bridge.</h1>
                            <p className='text-xs md:text-sm lg:text-xl'>Amidst the whispers of nature, I discover my inner calm. The soft rustling of leaves and the distant sound of water create a soothing melody. Each moment spent here invites me to pause and reflect. In this sanctuary, I feel connected to the beauty of the world</p>
                        </div>
                        <button className='btn btn-secondary '>Visiting Your painting</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;