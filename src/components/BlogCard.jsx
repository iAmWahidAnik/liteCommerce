import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    const {photo, title, description, author, date} = blog;
    return (
        <div className='max-w-[350px]'>
            <Image className='w-[350px] h-[240px]' src={photo} height={1000} width={1000} alt='blog image'></Image>
            <h1 className='my-5 font-semibold text-2xl text-[#3B3939]'>{title}</h1>
            <div className='flex gap-3 mb-5 text-xs text-gray-400 font-semibold'>
                <p className='uppercase'>BY {author}</p>
                <p>{date}</p>
            </div>
            <p className='text-gray-600 text-[14px]'>{description.length > 199 ? description.slice(0, 199) : description}...</p>
            <button className='my-5 border-b-4 border-[#18193E] text-[#18193E] font-semibold hover:text-gray-500 hover:border-gray-500 transition-colors duration-300'><Link className='text-xs' href='/#'>CONTINUE READING</Link></button>
        </div>
    );
};

export default BlogCard;