import React from 'react';
import android from './Certoimage/android.png';
import home from './Certoimage/home.png';

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-5 lg:p-[110px] bg-gray-50 sm:pt-[100px]">
      {/* Left Side: Text and Buttons */}
      <div className="flex-1 text-center lg:text-left lg:pl-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Your mobile privacy <br /> is our mission
        </h2>
        <h4 className="mt-6 text-gray-600 text-base md:text-lg lg:text-lg leading-relaxed">
          Think your phone has been hacked? Our trusted apps make it <br />
          easy for you to scan, detect and remove threats from your <br />
          iPhone and Android devices.
        </h4>
        <div className="flex flex-col gap-4 mt-8 md:flex-row md:justify-center lg:justify-start lg:mt-20 sm:mb-[150px]">
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Get Certo for iPhone
          </button>
          <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition">
            Get Certo for Android
          </button>
        </div>
      </div>

      {/* Right Side: Images */}
      <div className="flex-1 relative mt-10 lg:mt-0 flex justify-center hidden lg:block sm:mb-[0px]">
        {/* Background Shape */}
        <div className="absolute bg-indigo-700 sm:w-[50px] sm:h-[300px] md:w-[50px] md:h-[300px] lg:w-[720px] lg:h-[750px] lg:left-[81px] sm:mt-[60px]"></div>

        {/* Home Screen Image */}
        <img
          src={home}
          alt="Home Screen"
          className="relative w-32 sm:w-48 md:w-60 lg:w-[600px] xl:w-[700px] ml-[20px] sm:ml-[60px] md:ml-[90px] lg:ml-[110px] lg:h-[720px] mt-[30px] sm:mt-[60px] md:mt-[90px]"
        />

        {/* Android App Image */}
        <img
          src={android}
          alt="Android App"
          className="absolute top-14 right-4 sm:top-20 sm:right-8 md:top-24 md:right-12 lg:top-[100px] lg:right-[280px] w-20 sm:w-28 md:w-36 lg:w-[250px] xl:w-[300px]"
        />
      </div>
    </div>
  );
};

export default Homepage;
