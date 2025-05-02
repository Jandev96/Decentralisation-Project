import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import KeySectionsSnapshot from './KeySectionSnapShot';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/national-panchayati-raj-day-background-illustration-with-people-large-tree_1102-11981.jpg?w=1380')",
        }}
        data-aos="fade-up" // Fade in effect for Hero section
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="hero-content text-center text-neutral-content relative z-10 flex flex-col items-center">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold font-serif leading-tight">
              <TypeAnimation
                sequence={[
                  'Empowering Villages Through Decentralisation', // Text to type
                  1000, // Wait 1s before next step
                ]}
                speed={50} // Typing speed (lower is faster)
                cursor={false} // Show cursor
                repeat={0} // Do not repeat
                style={{ display: 'inline-block' }} // Ensure proper styling
              />
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              <TypeAnimation
                sequence={[
                  1000, // Wait 1s to start after h1 animation
                  'Building stronger communities by giving power back to the people. Join us on the journey of rural empowerment and sustainable development.', // Text to type
                  1000, // Wait 1s before next step
                ]}
                speed={60} // Typing speed
                cursor={false} // Show cursor
                repeat={0} // Do not repeat
                style={{ display: 'inline-block' }} // Ensure proper styling
              />
            </p>
            <a href="#about" className="btn btn-primary px-8 py-3 text-lg">
              Learn More
            </a>
          </div>

          {/* Scroll Down Arrow */}
          <a href="#about" className="mt-10 animate-bounce">
            <svg
              className="w-8 h-8 text-white hover:text-primary transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* About Section */}
      <About />
      <KeySectionsSnapshot />
    </>
  );
}

export default Hero;