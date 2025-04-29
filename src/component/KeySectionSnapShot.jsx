import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css";
import { Link } from 'react-router-dom';

const keySections = [
  {
    title: "Research Design",
    description: "A brief overview of the methodology and approach used to gather data and analyze the results.",
    link: "#research-design"
  },
  {
    title: "Panchayat Background",
    description: "Insights into the historical context and structure of the Panchayats in rural governance.",
    link: "#panchayat-background"
  },
  {
    title: "Data Analysis",
    description: "An exploration of the data analysis techniques used to draw conclusions from the collected data.",
    link: "#data-analysis"
  },
  {
    title: "Community Impact",
    description: "A summary of the results and their impact on the local communities and rural empowerment.",
    link: "#community-impact"
  }
];

const KeySectionsSnapshot = () => {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

  return (
    <div className="py-16 bg-gray-100" id="key-sections">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Sections Snapshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keySections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 roboto-heading">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <Link href={section.link} className="text-blue-600 hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeySectionsSnapshot;
