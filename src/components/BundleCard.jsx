import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BundleCard = ({ bundle }) => {
    const { photo_link, product_name, product_qty } = bundle;
    return (
        <div className='mx-auto'>
            <Image className='h-[500px] w-[500px] object-cover' src={photo_link} width={1000} height={1000} alt='Bundle Photo'></Image>
            <h1>{product_name}</h1>
            <p>{product_qty}</p>
            <button><Link href='/#'>show all</Link></button>
        </div>
    );
};

export default BundleCard;