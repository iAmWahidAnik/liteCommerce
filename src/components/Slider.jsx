"use client"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

const Slider = () => {
    const slider = (
        <AwesomeSlider className='h-screen' animation="fallAnimation">
            <div className='relative w-full h-full' data-src="slider1.jpg">
                <div className='lg:ms-28 absolute lg:top-56 top-12 left-0'>
                    <h1 className='text-4xl font-semibold drop-shadow-md'>Imported And <br /> Handcrafted Ceramic</h1>
                    <div className='mt-8'>
                        {/* <button className='px-4 py-2 bg-[#3B3939] text-white rounded-sm'>Shop Now</button> */}
                        {/* special button */}
                        <a href="#_" className="px-5 py-2.5 drop-shadow-md relative rounded-sm group overflow-hidden bg-[#3B3939] text-white inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Shop Now</span>
                        </a>
                        {/* special button */}
                    </div>
                </div>
            </div>
            {/* second photo  */}
            <div className='relative w-full h-full' data-src="slider2.jpg">
                <div className='lg:mr-28 absolute lg:top-56 top-12 right-0'>
                    <h1 className='text-4xl font-semibold drop-shadow-md'>Imported And <br /> Handcrafted Ceramic</h1>
                    <div className='mt-8'>
                        {/* <button className='px-4 py-2 bg-[#3B3939] text-white rounded-sm'>Shop Now</button> */}
                        {/* special button */}
                        <a href="#_" className="px-5 py-2.5 drop-shadow-md relative rounded-sm group overflow-hidden bg-[#3B3939] text-white inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Shop Now</span>
                        </a>
                        {/* special button */}
                    </div>
                </div>
            </div>
            {/* third photo  */}
            <div data-src="slider3.jpg">
                <div className='lg:ms-28 absolute lg:top-56 top-12 left-0'>
                    <h1 className='text-4xl font-semibold drop-shadow-md'>Imported And <br /> Handcrafted Ceramic</h1>
                    <div className='mt-8'>
                        {/* <button className='px-4 py-2 bg-[#3B3939] text-white rounded-sm'>Shop Now</button> */}
                        {/* special button */}
                        <a href="#_" className="px-5 py-2.5 drop-shadow-md relative rounded-sm group overflow-hidden bg-[#3B3939] text-white inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Shop Now</span>
                        </a>
                        {/* special button */}
                    </div>
                </div>
            </div>
            {/* fourth photo  */}
            <div data-src="slider4.jpg">
                <div className='lg:ms-28 absolute lg:top-56 top-12 left-0'>
                    <h1 className='text-4xl text-white font-semibold drop-shadow-md'>Imported And <br /> Handcrafted Ceramic</h1>
                    <div className='mt-8'>
                        {/* <button className='px-4 py-2 bg-[#3B3939] text-white rounded-sm'>Shop Now</button> */}
                        {/* special button */}
                        <a href="#_" className="px-5 py-2.5 drop-shadow-md relative rounded-sm group overflow-hidden bg-[#3B3939] text-white inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Shop Now</span>
                        </a>
                        {/* special button */}
                    </div>
                </div>
            </div>
        </AwesomeSlider>
    );
    return (
        <>
            {
                slider
            }
        </>
    );
};

export default Slider;