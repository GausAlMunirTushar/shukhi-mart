// components/Footer.js
import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold">Contacts</h2>
            <p>Feel free to get in touch with us via phone or send us a message</p>
            <p>+1 234 567 89 10</p>
            <p>support@Shukhimart.com</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4">APPLY NOW</button>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold">Products</h2>
            <ul>
              <li>Trending</li>
              <li>My Account</li>
              <li>Vendors</li>
              <li>Brands</li>
              <li>Storefront</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold">Legals</h2>
            <ul>
              <li>License</li>
              <li>Refund Policy</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              {/* <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
              <a href="#"><img src="/youtube.svg" alt="YouTube" /></a>
              <a href="#"><img src="/twitter.svg" alt="Twitter" /></a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full lg:w-1/2">
            <p>&copy; 2021 megamall.com.bd | All Rights Reserved.</p>
            <p>DEVELOP & Maintenance By TEXON Limited</p>
          </div>
          <div className="w-full lg:w-1/2 text-right flex justify-center">
            <a href="#"><Image src="/images/google-play.svg" alt="Google Play" width="200" height="60"/></a>
            <a href="#"><Image src="/images/app-store.svg" alt="App Store"  width="200" height="60"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
