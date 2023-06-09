import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper';
const Hero = () => {
    return (
        <div>
            <div className='md:h-[90vh] h-[70vh] bg-[#047d80]'>
                <div className=' flex flex-wrap'>
                    <div className='md:w-1/2 w-full md:p-16 p-0'>
                        <h1 className='md:text-4xl text-3xl md:pt-0  pt-8  text-white md:font-bold md:text-left text-center md:w-[40vw] w-[100vw] font-semibold font-poppins'>Run your <span className='text-[#3cedf3] md:text-white'>sales compensation</span>  Programs in 
                        <img src="./assets/mobile/name.png" class="h-7 ml-2 -mt-1 inline" alt="" /></h1>
                        <h2 className='text-[3.8vw] md:text-xl md:w-[28vw] w-full md:text-left text-center pt-8 text-white font-normal '>Build run and automate your incentive   compensation plan to create transparency  and achieve operational efficiency</h2>
                        <button type="button" class="mt-10 shadow-md md:block hidden shadow-slate-900 text-white bg-[#ff4261] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl px-3 py-1.5 text-center mr-3 md:mr-0 text-lg">Let's KENNECT</button>
                        <form className='md:hidden block px-10 pt-10'>
                            <div class="relative">
                                <input type="search" class="block rounded-3xl w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Email" required />
                                <button type="submit" class="text-white absolute right-2 bottom-2 bg-[#ff4261] hover:bg-[#ff4261] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2.5 ">BOOK A DEMO</button>
                            </div>
                        </form>
                        <div className='px-9 py-1 md:hidden block'>
                            <p className='text-[2vw] text-white'>By submitting thie form you are agreeing to KENNECT'S <a href='/' className='underline'>Privacy Policy</a> and <a href='/' className='underline'>Terms of service</a></p>
                        </div>
                        <div className='md:hidden block'>
                            <div className='flex flex-wrap justify-center pt-8 pb-3'>
                                <img src="./assets/mobile/G2.png" class="h-10  mr-5" alt="" />
                                <img src="./assets/mobile/Gartner.png" class="h-10  ml-3" alt="" />
                            </div>
                            <div className='flex flex-wrap justify-center py-3'>
                                <img src="./assets/mobile/spring1.png" class="h-24  mr-5" alt="" />
                                <img src="./assets/mobile/spring2.png" class="h-24  ml-3" alt="" />
                            </div>
                        </div>
                        <div className='mt-10 md:block hidden'>
                            <h3 className='text-white text-xl pt-5 pb-10 font-semibold font-poppins'>Trusted by</h3>
                            <Swiper
                                // install Swiper modules
                                modules={[Autoplay]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation
                                autoplay={true}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <img src="./assets/logo1.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo2.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo3.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo4.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo5.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo6.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo7.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo8.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./assets/logo9.png" class="h-10  mr-3" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img src="./assets/spring2.png" class="h-32 top-36 right-96 absolute md:block hidden mr-3" alt="" />
                        <img src="./assets/G2.png" class="h-12 top-80 right-[30vw] absolute md:block hidden  mr-3" alt="" />
                        <img src="./assets/men.png" class="h-[65vh]  bottom-0 right-40 absolute md:block hidden  mr-3" alt="" />
                        <img src="./assets/spring.png" class="h-32 bottom-72 right-28 absolute md:block hidden  mr-3" alt="" />
                        <img src="./assets/Gartner.png" class="h-16 top-32 right-16 absolute  md:block hidden mr-3" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-1 block md:hidden'>
                <h3 className='text-[#004749] text-center text-xl pt-5 pb-5 font-semibold font-poppins'>Trusted by</h3>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    autoplay={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src="./assets/mobile/logo3.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo4.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo5.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo6.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo7.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo8.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo9.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo10.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo11.png" class="h-16 " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/mobile/logo12.png" class="h-16 " alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Hero