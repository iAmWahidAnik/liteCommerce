import React from 'react';
import LoadProducts from '@/utils/LoadProducts'

const ProductSection = async() => {
    const products = await LoadProducts();
    console.log(products.length);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ProductSection;