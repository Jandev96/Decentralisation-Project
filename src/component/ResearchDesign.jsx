import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const ResearchDesign = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000,   // animation duration
          once: true,      // animate only once when scrolling down
        });
      }, []);
  return (
    <div className="p-6 max-w-5xl mx-auto text-justify text-gray-100 leading-relaxed mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Chapter I: Research Design</h1>

      <section className="mb-6 " data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Introduction</h2>
        <p>
          India is the world&apos;s largest democracy, with power distributed across the Central,
          State, and Local self-governments. Local self-government institutions include
          Panchayati Raj Institutions (PRIs) and Urban Local Bodies (ULBs). PRIs consist of
          Gram Panchayats, Panchayat Samitis, and Zila Parishads, while ULBs include
          Municipalities, Corporations, and Cantonment Boards.
        </p>
        <p className="mt-2">
          The Gram Panchayat, the lowest tier of PRIs, plays a vital role in village-level governance
          and development. Rooted in the 73rd Constitutional Amendment Act of 1992, it empowers
          communities to participate in decisions affecting their lives. Kerala, with its strong
          foundation of decentralization, has actively implemented Gram Panchayats.
        </p>
        <p className="mt-2">
          This study analyzes the functioning of the West Kallada Gram Panchayat in Kerala to
          understand its role in participatory democracy and rural development.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full  ">Statement of the Problem</h2>
        <p>
          Despite decentralization, Gram Panchayats in Kerala face challenges in governance,
          community engagement, and rural development due to limited funding, poor capacity
          building, and inadequate stakeholder participation.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Significance of the Study</h2>
        <p>
          This study highlights the role of Gram Panchayats in governance and identifies areas for
          improvement in service delivery, community participation, financial management, and
          administrative capacity.
        </p>
      </section>

      <section className="mb-6"data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Objectives of the Study</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To examine the structure and features of the West Kallada Gram Panchayat.</li>
          <li>To assess its effectiveness in governance and rural development.</li>
          <li>To identify key issues faced by villagers.</li>
          <li>To analyze community participation in Panchayat activities.</li>
          <li>To understand communication between officials and villagers.</li>
          <li>To recommend improvements for better functioning.</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Hypotheses of the Study</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Villagers are aware of Panchayat duties and responsibilities.</li>
          <li>High community participation in Gram Sabha and decision-making.</li>
          <li>Positive correlation between communication quality and local issue resolution.</li>
          <li>Financial capacity of the Panchayat is sufficient for development schemes.</li>
          <li>Marginalized communities benefit from decentralized governance.</li>
        </ol>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Research Questions</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>What is the level of community participation in Gram Panchayat activities?</li>
          <li>What is the level of awareness among villagers about Panchayat functions?</li>
          <li>What issues do villagers face?</li>
          <li>What development policies are implemented?</li>
          <li>How effective is the Panchayat in addressing local issues?</li>
          <li>How well do Panchayat officials communicate with villagers?</li>
          <li>What challenges does the West Kallada Gram Panchayat face?</li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Importance of the Study</h2>
        <p>
          The study provides insights into Gram Panchayat functioning, service delivery, and
          community engagement in rural governance. It explores public perceptions and evaluates
          successful development programs in West Kallada.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Methodology</h2>
        <p>
          The study uses historical, analytical, and empirical methods. Primary data includes
          surveys and interviews, while secondary data sources include Panchayat documents,
          reports, books, and articles.
        </p>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Chapterization of the Work</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Research Design</li>
          <li>Decentralization and Panchayati Raj System in India</li>
          <li>The Background of Gram Panchayat in Kerala and Profile of the Area</li>
          <li>Data Analysis and Interpretation</li>
          <li>Conclusion</li>
        </ol>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full ">Review of Literature</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Decentralization and Local Politics</strong> by S.N. Jha &amp; P.C. Mathur – Discusses the 73rd
            and 74th amendments and local political dynamics.
          </li>
          <li>
            <strong>Gramapanchayat - Bharananirvanhanam Engane</strong> by Adv. P.G. Padmanabhan – Explores Panchayat
            administration techniques.
          </li>
          <li>
            <strong>People’s Planning</strong> by T.M. Thomas Isaac &amp; Richard W. Franke – Analyzes Kerala's
            participatory governance through decentralized planning.
          </li>
          <li>
            <strong>Local Democracy and Development</strong> – Highlights Kerala’s People’s Campaign.
          </li>
          <li>
            <strong>Streamlining Panchayat Finance</strong> – Study by M.A. Oomen et al. on Kerala Panchayat
            finances and local revenue generation.
          </li>
          <li>
            <strong>Master Plan and Local Governments</strong> by K. Devarajan – Role of Panchayats in
            developmental planning.
          </li>
        </ul>
      </section>

      <section className="mb-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full  " >References</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Oomen, M.A. (2008). Fiscal Decentralisation to Local Governments in India.</li>
          <li>Ramachandran, M. (2021). Bringing Governments and People Closer.</li>
          <li>Laxmikanth, M. (2022). Indian Polity (6th Ed.).</li>
          <li>Datta, P. (2019). Deliberative Democracy in Rural India. IJPA.</li>
          <li>www.spb.kerala.gov.in</li>
          <li>www.panchayat.gov.in</li>
          <li>www.kila.ac.in</li>
        </ul>
      </section>
    </div>
  );
};

export default ResearchDesign;
