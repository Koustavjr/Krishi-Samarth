import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Weather from '../../assets/Weather.png';
import Specialist from '../../assets/specialist-user.svg';
import Chat from '../../assets/chat.png';
import Problem from '../../assets/problem.png';
import BackToTop from '../BackToTop/BackToTop';
import Team from '../Team/Team';
import Minimap from '../Minimap/Minimap';
import { useNavigate } from 'react-router-dom';
import '../../fonts/font.css';
import Banner from '../../assets/banner.png'

const Home = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary-green min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'fit' }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Welcome to Our Website
            </h1>
            <div>
            <p className="mt-5 text-4xl sm:text-5xl md:text-6xl text-white font-sanskrit">
              Krishisamarth
            </p>
            </div>
            <p className="mt-4 text-lg text-white">
            Harvest Success with Expert Farming Consultancy & Courses
            </p>
            <div className="mt-10">
              <a
                href="/services"
                className="text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-6 py-3 rounded-md"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer justify-center">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-light-green">
                <img
                  src={Weather}
                  alt="Weather"
                  className="h-24 w-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-4">Check Weather</h2>
                <p className="text-gray-700">
                  Get real-time weather updates and forecasts for your farming area.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-light-green">
              <a href="/marketplace">
                <img
                  src={Specialist}
                  alt="Specialist"
                  className="h-24 w-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-4">Access Marketplace</h2>
                <p className="text-gray-700">
                  Connect with agricultural specialists to seek expert advice and guidance for your farming practices.
                </p>
              </a>
              </div>
              <a
                target="_blank"
                href="https://bit.ly/3rfCqWh"
                className="bg-white shadow-lg rounded-lg p-6 hover:bg-light-green"
              >
                <img
                  src={Problem}
                  alt="Problem"
                  className="h-24 w-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-4">Farming Resources</h2>
                <p className="text-gray-700">
                  Share your farming problems and seek solutions from the community of farmers and experts.
                </p>
              </a>
              <div
                className="bg-white shadow-lg rounded-lg p-6 hover:bg-light-green"
                onClick={handleChatClick}
              >
                <img
                  src={Chat}
                  alt="Chat"
                  className="h-24 w-24 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-4">Chat With Other Farmers</h2>
                <p className="text-gray-700">
                  Join chat rooms and discussions to interact with fellow farmers, exchange ideas, and share experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Minimap />
        <Team />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Home;
