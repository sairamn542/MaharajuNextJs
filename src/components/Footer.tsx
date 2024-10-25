import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-400'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10'>
        {/* MyHealthcare Section */}
        <div>
          <h2 className='text-white font-bold mb-4'>MyHealthcare</h2>
          <ul className='space-y-2'>
            <li className='hover:text-white'>About Us</li>
            <li className='hover:text-white'>Contact Us</li>
            <li className='hover:text-white'>Insights</li>
            <li className='hover:text-white'>FAQs</li>
            <li className='hover:text-white'>Careers</li>
            <li className='hover:text-white'>Terms of Use</li>
            <li className='hover:text-white'>Privacy Policy</li>
            <li className='hover:text-white'>Terms and Conditions</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className='text-white font-bold mb-4'>Our Services</h2>
          <ul className='space-y-2'>
            <li className='hover:text-white'>Book Consult</li>
            <li className='hover:text-white'>Book Tests</li>
            <li className='hover:text-white'>Order Medicines</li>
            <li className='hover:text-white'>Care Programs</li>
            <li className='hover:text-white'>Book Homecare</li>
          </ul>
        </div>

        {/* Partner Hospitals Section */}
        <div>
          <h2 className='text-white font-bold mb-4'>Partner Hospitals</h2>
          <ul className='space-y-2'>
            <li className='hover:text-white'>PSRI Hospital</li>
            <li className='hover:text-white'>Artemis Hospitals</li>
            <li className='hover:text-white'>Sakra World Hospital</li>
            <li className='hover:text-white'>Paras Hospital, Gurgaon</li>
            <li className='hover:text-white'>Primus Super Speciality Hospital</li>
            <li className='hover:text-white'>Woodlands Multispeciality Hospital</li>
            <li className='hover:text-white'>Vimhans Nayati Super Speciality Hospital</li>
            <li className='hover:text-white'>More...</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className='text-white font-bold mb-4'>Contact Us</h2>
          <ul className='space-y-2'>
            <li className='hover:text-white'>I'm a Patient</li>
            <li className='hover:text-white'>I'm a Doctor</li>
            <li className='hover:text-white'>I'm an Organisation</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='lg:flex justify-between items-center ms-10 me-10 my-5'>
        <div className='flex items-center'>
          <div className=''>Follow US</div>
          <div className='flex space-x-2 ms-3'>
            <img src="fb.png" alt="facebook" className='w-30 h-7 rounded-full' />
            <img src="ig.jpg" alt="instagram" className='w-30 h-7 rounded-full' />
            <img src="li.png" alt="linkedin" className='w-30 h-7 rounded-full' />
            <img src="tt.png" alt="twitter" className='w-30 h-7 rounded-full' />
          </div>
        </div>
        <div className='lg:flex items-center mt-3'>
          <div className='me-3'>Download Our App</div>
          <div className='flex mt-2'>
            <img src='appstore.png' alt='App Store' className='h-10' />
            <img src='googleplay.png' alt='Google Play Store' className='h-10 ms-2' />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col sm:flex-row justify-center items-center p-3 font-medium text-center text-white">
        <div className="text-sm sm:text-base">
          © 2024 · All Rights Reserved · MyHealthcare Technologies Private Limited
        </div>
      </div>

    </footer>
  );
}

export default Footer;
