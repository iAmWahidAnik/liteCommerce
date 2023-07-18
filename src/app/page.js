// "use client"
import LoadProducts from '@/utils/LoadProducts'
import LoadOffer from '@/utils/LoadOffer'
import ProductSection from '@/components/ProductSection'
import Slider from '@/components/Slider'
import ProductCard from '@/components/ProductCard'
import Blogs from '@/components/Blogs'
import BundleCard from '@/components/BundleCard'
import Wave from 'react-wavify'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Lite Commerce | Home',
  description: 'Lite Commerce An E-Commerce Platform',
}

export default async function Home() {
  const products = await LoadProducts();

  const bundleOffer = await LoadOffer();

  return (
    <div className='mb-20'>
      {/* awesome carousel */}
      <Slider></Slider>

      {/* product show case area  */}
      <section className='relative drop-shadow-sm py-20 my-28 w-full bg-[#FEF7EB]'>
        <Wave className='absolute -top-16' fill='#FEF7EB'
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.20,
            points: 6
          }}
        />
        <h1 className='text-3xl text-center font-semibold tracking-widest'>NEW ARRIVAL</h1>
        <div className='grid grid-cols-4 gap-5 my-20 lg:mx-16'>
          {
            products.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
          }
        </div>
        <Wave className='rotate-180 absolute -bottom-12' fill='#FEF7EB'
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.20,
            points: 6
          }}
        />
      </section>
      {/* product show case area  */}

      {/* Bundle Offer section  */}
      <section className='lg:mx-16'>
        <h1 className='text-3xl text-center font-semibold tracking-widest my-20'>Bundle Offer</h1>
        {/* {
          bundleOffer.map((bundle, index) => <BundleCard key={index} bundle={bundle}></BundleCard>)
        } */}
        <div className='flex gap-5 justify-between text-center'>
          <div className='mx-auto mt-56'>
            <Image className='h-[500px] w-[500px] object-cover' src='https://www.happythemes.com/demo/instock-pro/wp-content/uploads/sites/59/2020/01/1-1.jpg' width={1000} height={1000} alt='Bundle Photo'></Image>
            <h1 className='text-xl mt-5 font-semibold'>Living Sets</h1>
            <p className='my-2 text-gray-500'>4 Products</p>
            {/* <button><Link href='/#'>show all</Link></button> */}
            {/* special button  */}
            <div className='my-5'>
              <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">show all</span>
              </a>
            </div>
            {/* special button  */}
          </div>
          <div className='mx-auto'>
            <Image className='h-[500px] w-[500px] object-cover' src='https://www.happythemes.com/demo/instock-pro/wp-content/uploads/sites/59/2020/01/mug-black.jpg' width={1000} height={1000} alt='Bundle Photo'></Image>
            <h1 className='text-xl mt-5 font-semibold'>Dining Sets</h1>
            <p className='my-2 text-gray-500'>3 Products</p>
            {/* <button><Link href='/#'>show all</Link></button> */}
            {/* special button  */}
            <div className='my-5'>
              <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">show all</span>
              </a>
            </div>
            {/* special button  */}
          </div>
        </div>
        <div className='flex justify-center mt-10 text-center'>
          <div className=''>
            <Image className='h-[500px] w-[500px] object-cover' src='https://www.happythemes.com/demo/instock-pro/wp-content/uploads/sites/59/2020/01/6.jpg' width={1000} height={1000} alt='Bundle Photo'></Image>
            <h1 className='text-xl mt-5 font-semibold'>Stationery Sets</h1>
            <p className='my-2 text-gray-500'>4 Products</p>
            {/* <button><Link href='/#'>show all</Link></button> */}
            {/* special button  */}
            <div className='my-5'>
              <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">show all</span>
              </a>
            </div>
            {/* special button  */}
          </div>
        </div>
      </section>
      {/* Bundle Offer section  */}
      {/* featured slider section */}
      <section className='lg:mx-16'>
      
      </section>
      {/* featured slider section */}

      {/* blogs area  */}
      <section className='my-20'>
        <Blogs></Blogs>
      </section>
      {/* blogs area  */}
    </div>
  )
}
