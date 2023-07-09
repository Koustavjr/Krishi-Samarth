import React, { useEffect } from 'react';

const Minimap = () => {
  useEffect(() => {
    // Map initialization code here (if needed)
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-secondary-green py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">Address</h2>
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 mt-8">
        <iframe
          className="bg-white p-4 rounded-lg shadow-md w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.018315939303!2d88.4768999431892!3d22.578418277604268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027532681696e9%3A0xb8684bcdb918e91!2sSister%20Nivedita%20University!5e0!3m2!1sen!2sin!4v1688699552484!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Minimap;
