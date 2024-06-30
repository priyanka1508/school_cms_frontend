import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-10 footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-row items-center md:items-start text-center md:text-left gap-6">
          <img src="assets/images/header_logo.png" alt="DBTR logo" className="mb-4 w-24 h-auto" />
          <div className='flex flex-col max-w-40 mr-10'>
          <div className="text-sm font-semibold">DBTR National Higher Secondary School</div>
          <div className="text-blue-600 text-sm">Virtuousness is Life</div>
          <div className="mt-2 text-xs">Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.</div>
          </div>
          
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
          <h3 className="text-sm font-semibold ">QUICK LINKS</h3>
          <ul className="space-y-1">
            <li>Admissions</li>
            <li>Alumni Association</li>
            <li>Donate</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-2 text-width">
          <h3 className="text-sm font-semibold mt-8 ">CONTACT</h3>
          <div className='' >DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai, Tamilnadu – 609001</div>
          <div>+91-436-422-3272</div>
          <div>contact@nationalhighschool.in</div>
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-2 ">
          <p className="mb-4 text-center">Big or small, you can<br/> make an impact.</p>
          <button className="bg-red-600 text-white py-2 px-4 rounded">Donate ♥</button>
        </div>
      </div>
      <div className="border-t mt-10 pt-4 text-center text-xs text-gray-600 flex flex-row justify-start">
        <div className='flex flex-col gap-5'>
        <p>© DBTR 2023, All Rights Reserved | Sitemap</p>
        <div className='flex flex-row gap-3 items-center ml-2'>
        <p>Designed by  </p>
        <img src="assets/images/Pepper_Square_Logo.png" alt="DBTR logo" style={{width: "80px", height: "10px",marginTop: "3px"}}/>
       

        </div>
        

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
