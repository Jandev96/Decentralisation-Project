import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 4000 }); // Add duration to control the speed of the animation
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-base-100 flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10 scroll-smooth"
      data-aos="fade-up"
    >
      {/* Left side: Image */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-right" // Animation for the left side image
      >
        <img
          src="https://img.freepik.com/free-photo/indian-village-life-concept-illustration_23-2151003697.jpg?t=st=1714339445~exp=1714343045~hmac=7a589d81f51b11e68bbdc3fca2f7407909513e8ed5572b98fa72e2f7ab05b7fd&w=740"
          alt="Empowering Villages"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Right side: Text */}
      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-left" // Animation for the text
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-primary">
          About the Project
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          This project explores the transformative impact of decentralisation in rural India. It highlights how empowering local governance through Panchayati Raj Institutions strengthens democracy, improves development outcomes, and ensures that the voices of villages are heard and respected.
        </p>
        <p className="text-md md:text-lg text-gray-600">
          The research emphasizes the importance of community participation and leadership in driving sustainable growth. Decentralisation fosters inclusive decision-making, promotes transparency, and creates self-reliant villages ready to tackle their unique challenges and opportunities.
        </p>
      </div>
    </section>
  );
}

export default About;
