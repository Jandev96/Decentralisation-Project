import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Decentralization = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto text-justify text-gray-100 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">Chapter II: Decentralization and Panchayati Raj Institutions in India</h1>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Introduction</h2>
        <p>
          Decentralization denotes the transfer of authority, legislative, judicial or administrative power from higher level of government to a lower level. The process of the generalisation basically seeks to create a greater sense of responsibility and better morale among field agents. It is about sharing the decision making authority with lower levels of an organisation or government.
        </p>
        <p className="mt-2">
          Decentralization, a cornerstone of Panchayati Raj in India, empowers local self-governments to manage their affairs and deliver essential services. By devolving power to Gram Panchayats and other local bodies, decentralization fosters participatory democracy, promotes inclusive development, and ensures that local needs and priorities are addressed.
        </p>
        <p className="mt-2">
          This chapter revolves into the detailed narrative of Panchayati Raj system in India, its structure and functions, Decentralized governance and its importance, Financial Decentralization and the challenges and limitations of Panchayati Raj system.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Democratic Decentralization: Empowering Local Governance and Citizen Participation</h2>
        <p>
          Democratic decentralization is a governance system that redistributes political, administrative, and fiscal powers from central authorities to local governments. This approach aims to enhance citizen participation, promote local autonomy, and ensure more responsive and accountable governance.
        </p>
        <p className="mt-2">
          In India, the 73rd and 74th Constitutional Amendments in 1992 institutionalized democratic decentralization by establishing Panchayati Raj Institutions (PRIs) and Urban Local Bodies (ULBs). These amendments mandated the devolution of powers to local governments, ensuring greater participation of marginalized groups.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Key Principles of Democratic Decentralization</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li><strong>Devolution of Power:</strong> The transfer of decision-making authority from central to local governments.</li>
          <li><strong>Citizen Participation:</strong> Fosters active citizen involvement in governance.</li>
          <li><strong>Local Autonomy:</strong> Freedom to design and implement policies tailored to local contexts.</li>
          <li><strong>Accountability and Transparency:</strong> Promotes accountability by making local governments directly responsible.</li>
          <li><strong>Inclusivity:</strong> Emphasizes inclusion of marginalized groups in decision-making.</li>
        </ol>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Benefits of Democratic Decentralization</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Enhances responsiveness to local needs</li>
          <li>Promotes empowerment of marginalized groups</li>
          <li>Allows more efficient resource allocation</li>
          <li>Strengthens democracy through citizen participation</li>
          <li>Mitigates conflicts and promotes social harmony</li>
          <li>Encourages policy innovation at local levels</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Challenges of Democratic Decentralization</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Inadequate devolution of powers</li>
          <li>Financial constraints</li>
          <li>Capacity deficits in local governments</li>
          <li>Political interference</li>
          <li>Coordination issues between government levels</li>
          <li>Social inequalities</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Evolution of Panchayati Raj System in India</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Historical Background</h3>
        <h4 className="font-semibold">1. Pre-independence</h4>
        <p>
          Village councils called "Panchayats" existed for centuries in India. Jawaharlal Nehru noted in 'The Discovery of India' that these panchayats had large executive and judicial powers.
        </p>
        <h4 className="font-semibold mt-2">2. British rule</h4>
        <p>
          Lord Rippon's policy in 1887 established popularly elected local institutions, leading to the creation of Village Panchayats, District Boards, and Municipalities.
        </p>
        <h4 className="font-semibold mt-2">3. Post-independence</h4>
        <p>
          Gandhiji advocated for village self-rule (swaraj). The 73rd and 74th Constitutional Amendments in 1992 institutionalized Panchayati Raj Institutions.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Important Committees</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Balwant Rai Mehta Committee (1957):</strong> Recommended three-tier Panchayati Raj system.</li>
          <li><strong>Ashok Mehta Committee (1977):</strong> Suggested two-tier system and constitutional protection for PRIs.</li>
          <li><strong>Dantwala Committee (1977):</strong> Focused on block-level planning and rural credit.</li>
          <li><strong>GVK Rao Committee (1985):</strong> Recommended PRIs handle planning and implementation of rural development.</li>
          <li><strong>L. M. Singhvi Committee (1986):</strong> Recommended constitutional recognition for PRIs.</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Constitutional Provisions</h2>
        <p>
          The 73rd Amendment established a three-tier Panchayati Raj system (Grama Panchayat, Block Panchayat, Zilla Parishad) and added Part IX to the Constitution (Articles 243-243O). Key features:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Direct elections for members</li>
          <li>Reservation for SC/ST & women</li>
          <li>Five-year term for Panchayats</li>
          <li>11th Schedule listing 29 subjects for PRIs</li>
        </ul>
        <p className="mt-2">
          The 74th Amendment dealt with urban local bodies, adding Part IX-A (Articles 243P-243ZG) and the 12th Schedule.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Panchayati Raj Institutions: Structure and Functions</h2>
        
        {/* PRI Structure Diagram */}
        <div className="my-6 p-4 bg-gray-800 rounded-lg" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4 text-center">Structure of Panchayati Raj Institutions in India</h3>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              {/* Zila Parishad (District Level) */}
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-medium">
                Zila Parishad (District Level)
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-600"></div>
              </div>
              
              {/* Block Panchayat */}
              <div className="bg-green-600 text-white p-3 text-center font-medium">
                Block/Mandal Panchayat (Intermediate Level)
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-green-600"></div>
              </div>
              
              {/* Gram Panchayat */}
              <div className="bg-purple-600 text-white p-3 rounded-b-lg text-center font-medium">
                Gram Panchayat (Village Level)
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-300">
              <p>Three-tier system established by the 73rd Constitutional Amendment</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">(a) Gram Panchayat</h3>
        <p>
          Primary unit of local governance in rural India, consisting of 7-10 elected members. Responsible for implementing development programs, providing basic services, and maintaining village infrastructure.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">(b) Mandal/Block Panchayat</h3>
        <p>
          Intermediate level between village and district, coordinating rural development initiatives across a block of villages.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">(c) Zila Parishad</h3>
        <p>
          Highest tier at district level, formulating district development plans and allocating funds to block panchayats.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Financial Decentralization</h2>
        <p>
          Article 243G grants state legislatures authority to confer powers upon panchayats. Key aspects:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Preparing plans for economic development</li>
          <li>Implementing schemes for social justice</li>
          <li>Taxation authority for panchayats</li>
          <li>Grants-in-aid from state funds</li>
        </ul>
        <p className="mt-2">
          State Finance Commissions assess financial status of panchayats every five years.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Sources of Revenue for PRIs</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Central Government Funding</li>
          <li>State Government Funding</li>
          <li>Internal Revenue Generation (taxes, fees, non-tax revenue)</li>
        </ol>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Challenges Faced by PRIs</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li><strong>Inadequate Devolution of Powers:</strong> Many states reluctant to fully transfer authority.</li>
          <li><strong>Financial Constraints:</strong> Heavy reliance on delayed or inadequate government grants.</li>
          <li><strong>Lack of Capacity Building:</strong> Representatives often lack necessary skills and training.</li>
          <li><strong>Political Interference:</strong> Local politicians view PRIs as competitors.</li>
          <li><strong>Social Inequalities:</strong> Marginalized representatives face discrimination.</li>
          <li><strong>Lack of Awareness:</strong> Low community participation in governance processes.</li>
          <li><strong>Infrastructure Challenges:</strong> Poor office spaces and limited technology access.</li>
        </ol>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">References</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Meenakshisundara, S.S. (1994). <em>Decentralisation in Developing Countries</em>. Ashok Kumar Mittal Concept Publishing Company.</li>
          <li>Rao, M. Govinda. (1996). <em>Fiscal Federalism in India: Theory and Practice</em>. Macmillan India.</li>
          <li>Smoke, Paul. (2000). Fiscal Decentralization in Developing Countries- A review of current concepts and practices. <em>United Nations Research Institute for Social Development (UNRISD)</em>.</li>
          <li>Laxmikanth, M. (2022). <em>Indian Polity (6th Revised Edition)</em>. McGraw Hill Education (India) Private Limited.</li>
          <li>www.aees.com</li>
          <li>www.testbook.com</li>
          <li>www.worldometers.info</li>
        </ul>
      </section>
    </div>
  );
};

export default Decentralization;