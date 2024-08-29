import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col items-center sm:w-full  bg-slate-300  text-center text-surface dark:bg-neutral-700 dark:text-white">
 
       <div className="w-full font-sans      p-4 text-center">
        © 2023 Copyright 
        <a href="https://tw-elements.com/">  Roller tandil</a>
      </div>
    </footer>
  );
}

export default Footer;
