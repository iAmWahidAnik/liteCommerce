
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            {/* <ToPFooter></ToPFooter> */}
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h1 className="text-3xl font-bold">liteCommerce</h1>
                    <p>Home Decoration Partner</p>
                    <div className='flex gap-4 mt-3'>
                        <button className='text-3xl'><BsFacebook></BsFacebook></button>
                        <button className='text-4xl'><AiFillTwitterCircle></AiFillTwitterCircle></button>
                        <button className='text-4xl'><AiFillInstagram></AiFillInstagram></button>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Affiliate</a>
                </div>
                <div>
                    <span className="footer-title">Outlets</span>
                    <a className="link link-hover">Los Santos</a>
                    <a className="link link-hover">Old Trafford</a>
                    <a className="link link-hover">Copenhagen</a>
                    <a className="link link-hover">New Jersy</a>
                </div>
            </footer>
            <div className='bg-neutral text-neutral-content text-center pb-3'>
                <p><small>© 2023 | liteCommerce | AllCopyright Reserved | wahid.anik@outlook.com</small></p>
            </div>
        </div>
    );
};

export default Footer;