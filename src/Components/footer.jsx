import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <footer  className=" text-white relative bg-[#1B2024] bg-opacity-50 overflow-hidden">
      <div className="absolute -right-6 -top-24 -z-10 footerTire">
        <img src="./footer_bg.png" alt="img" className='object-contain'/>
        </div>
      <div className="absolute -z-20 h-full w-full ">
        <img src="./footer_bg_2.png" alt="img" className='h-full w-full' />
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <div className="cursor-pointer text-xl mt-4">
              <Link to="/">
                <h1 className='font-extrabold text-2xl'><span className='text-[#00bce2]'>BUMPER</span>CHECK</h1>
              </Link>
            </div>
            <p>Your go-to for trustworthy vehicle history reports</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 relative w-fit">Quick Links
              <span className="block relative bg-[#00bce2] w-full h-[2px] -bottom-1  after:content-'' after:bg-transparent after:w-[16px] after:h-[2px] after:absolute after:bottom-0  after:border-l-[2px] after:border-r-[2px] after:border-dashed after:border-gray-800 footerLine" ></span>
            </h3>

            <ul className="list-none mt-6 flex flex-col gap-3">
              <li><Link to={"/"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Home</Link></li>
              <li><Link to={"/service"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Services</Link></li>
              <li><Link to={"/deals"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Deals</Link></li>
              <li><Link to={"/contact"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Contact</Link></li>
            </ul>
          </div>

          <div >
          <h3 className="text-lg font-semibold mb-2 relative w-fit">Legal
              <span className="block relative bg-[#00bce2] w-full h-[2px] -bottom-1  after:content-'' after:bg-transparent after:w-[16px] after:h-[2px] after:absolute after:bottom-0  after:border-l-[2px] after:border-r-[2px] after:border-dashed after:border-gray-800 footerLine" ></span>
            </h3>
            <ul className="list-none mt-6 flex flex-col gap-3">
              <li><Link to={"/privacy"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Privacy Policy</Link></li>
              <li><Link to={"/Terms-and-condition"} className='hover:text-[#549aa8]  before:content-["\2192"]'> Terms and Condition</Link></li>
            </ul>
          </div>

          <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 relative w-fit">Connect With Us
              <span className="block relative bg-[#00bce2] w-full h-[2px] -bottom-1  after:content-'' after:left-0 after:bg-transparent after:w-[16px] after:h-[2px] after:absolute after:bottom-0  after:border-l-[2px] after:border-r-[2px] after:border-dashed after:border-gray-800 footerLine" ></span>
            </h3>
            <ul className="list-none mt-6">
              <li className='hover:text-[#549aa8] cursor-pointer before:content-["\2192"]'> Email: hello.bumpercheck@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Payment Options */}
       
      </div>
      <div>
        <p className='border-t-[1px] border-gray-400 mt-5'></p>
        <p className='text-white text-[12px] mt-5 text-center'>All Rights Reserved. Use of this Website constitutes acceptance of BumperCheck Terms & Conditions, Privacy Policy, Refund Policy. THIS SITE IS OWNED AND OPERATED BY <span className='text-[#00bce2]'>BUMPER CHECK.</span></p>
        <p className='text-[9px] mt-1 text-center'>
          Copyright &copy; 2020 BumperCheck. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
