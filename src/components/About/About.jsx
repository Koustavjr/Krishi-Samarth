import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
const About = () => {
  return (
    <>
    <Navbar />
    <div className="bg-primary min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl text-center">About AgroDev</h1>
        <p className="mt-4 text-lg text-gray-700">
          AgroDev is a leading platform that connects farmers, agricultural experts, and enthusiasts in the agriculture industry. Our mission is to revolutionize farming practices and promote sustainable agriculture through technology and innovation.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          At AgroDev, we provide a wide range of resources, tools, and knowledge-sharing platforms to empower farmers and enable them to make informed decisions. Through our community-driven approach, farmers can connect with experts, access valuable insights, and learn best practices for optimizing their agricultural operations.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We are dedicated to fostering collaboration and knowledge exchange in the agricultural community. Our platform offers forums, blogs, and educational resources where farmers can share their experiences, ask questions, and stay updated with the latest trends in the industry.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Join AgroDev today and be a part of the agricultural revolution. Together, we can create a sustainable and prosperous future for farming.
        </p>
      </div>
    </div>
    <Footer />
    <BackToTop />
    </>
  );
};

export default About;
