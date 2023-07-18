import React from 'react';
import LoadBLogs from '../utils/LoadBLogs';
import BLogCard from '@/components/BlogCard'

const Blogs = async () => {
    const blogs = await LoadBLogs();
    console.log("post length is: ", blogs.length);
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold tracking-widest my-16'>LATEST NEWS</h1>
            <div className='grid grid-cols-3 gap-5 mx-16'>
                {
                    blogs.map((blog, index) => <BLogCard key={index} blog={blog}></BLogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;