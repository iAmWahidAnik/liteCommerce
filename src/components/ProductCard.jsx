import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { product_photo, product_name, price, sale_price } = product;
    return (
        <div className='relative mx-auto '>
            <div className='relative'>
                <Image src={product_photo} className='object-cover h-[250px] w-[250px]' height={1000} width={1000} alt='product image'></Image>
                <div className='absolute bg-neutral-focus backdrop-blur-sm bg-opacity-30 text-xl inset-0 top-0 hover:pt-24 hover:pl-20 opacity-0 hover:opacity-100 transition-all duration-500'>
                    <div className='flex gap-2'>
                        <button className='p-2 text-gray-700 rounded-full bg-white hover:bg-neutral-focus hover:text-white transition-colors duration-700 shadow-md'><AiOutlineHeart ></AiOutlineHeart></button>
                        <button className='p-2 text-gray-700 rounded-full bg-white hover:bg-neutral-focus hover:text-white transition-colors duration-700 shadow-md'><FaRegEye ></FaRegEye></button>
                    </div>
                </div>
            </div>
            <p className='font-semibold my-3 text-[#3B3939]'>{product_name}</p>
            <p className='font-semibold text-gray-600'>
                {
                    sale_price ? <><span className='line-through me-2'>£{price}</span> <span>£{sale_price}</span></> : <span>£{price}</span>
                }
            </p>
            {/* special button  */}
            <a href="#_" className="relative inline-flex items-center justify-center p-4 my-3 px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#3B3939] rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#3B3939] text-sm font-semibold group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Compare</span>
                <span className="relative invisible">Compare</span>
            </a>
            {/* special button  */}
            {
                sale_price &&
                <div className="absolute top-5 left-5 avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span className='text-xs uppercase'>sale!</span>
                    </div>
                </div>
            }
            {/* <div className='absolute flex gap-2 text-2xl top-0 hover:top-5'>
                <AiOutlineHeart className='p-4 rounded-full bg-white text-gray-700'></AiOutlineHeart>
                <FaRegEye className='p-4 rounded-full bg-white text-gray-700'></FaRegEye>
            </div> */}
        </div>
    );
};

export default ProductCard;