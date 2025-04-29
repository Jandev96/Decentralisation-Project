import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const KeySectionsSnapshot = () => {
  useEffect(() => {
    AOS.init({ duration: 6000 }); // Duration of the fade-in animation
  }, []);


  return (
    <div className="py-16 bg-gray-100" id="key-sections">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Sections Snapshot</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Research Design Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Design</h3>
            <p className="text-gray-600 mb-4">
              A brief overview of the methodology and approach used to gather data and analyze the results.
            </p>
            <a href="#research-design" className="text-blue-600 hover:underline">Read More</a>
          </div>

          {/* Panchayat Background Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Panchayat Background</h3>
            <p className="text-gray-600 mb-4">
              Insights into the historical context and structure of the Panchayats in rural governance.
            </p>
            <a href="#panchayat-background" className="text-blue-600 hover:underline">Read More</a>
          </div>

          {/* Data Analysis Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Analysis</h3>
            <p className="text-gray-600 mb-4">
              An exploration of the data analysis techniques used to draw conclusions from the collected data.
            </p>
            <a href="#data-analysis" className="text-blue-600 hover:underline">Read More</a>
          </div>

          {/* Additional Card (Optional) */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Impact</h3>
            <p className="text-gray-600 mb-4">
              A summary of the results and their impact on the local communities and rural empowerment.
            </p>
            <a href="#community-impact" className="text-blue-600 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeySectionsSnapshot;
