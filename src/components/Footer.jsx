import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col items-center sm:w-full  bg-slate-300  text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container w-full pt-9">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center   space-x-2">
             
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaFacebook />
            </a>
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaInstagram />
            </a>
             
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaYoutube />
            </a>
         </div>
      </div>
       <div className="w-full font-sans    bg-black/5 p-4 text-center">
        © 2023 Copyright 
        <a href="https://tw-elements.com/">  Roller tandil</a>
      </div>
    </footer>
  );
}

export default Footer;
