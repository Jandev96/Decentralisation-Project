import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeafletMap from './LeafletMap';

const GramapanchayathBackground = () => {

useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);

  return (
    <div className='p-6 max-w-5xl mx-auto text-justify text-gray-100 leading-relaxed mt-20'>
      <h1 style={styles.mainHeading}>CHAPTER III</h1>
      <h2 style={styles.subHeading}>
        THE BACKGROUND OF GRAM PANCHAYATS IN KERALA AND PROFILE OF THE AREA
      </h2>

      {/* Introduction */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Introduction</h3>
        <p >
          The Gram Panchayat System in Kerala has evolved as a crucial institution
          in the State’s Democratic and Administrative framework, playing a pivotal
          role in grassroots governance. Panchayati Raj, the system of Local
          government in India, was introduced to empower rural communities and
          ensure decentralized decision-making. Kerala, known for its unique
          social-political landscape, has been at the forefront of implementing
          Panchayati Raj Institutions effectively, particularly after the 73rd
          Constitutional Amendment Act Of 1992, which granted constitutional status
          to panchayats across the Country.
        </p>
        <p style={styles.paragraph}>
          Kerala’s gram panchayats are the lowest tier of the three-tier Panchayati
          raj system, functioning at the village level. They are responsible for a
          wide range of development activities, including Healthcare, Education,
          Sanitation, poverty alleviation and rural infrastructure. The state has
          been widely recognized for its success in participatory governance, where
          local bodies play a central role in planning and implementing development
          programs. Kerala, despite its rapid urbanization, still has a significant
          rural population, with nearly 50% of its people residing in rural areas.
          unlike many other states in India, where rural and urban regions are
          distinctly separate, Kerala’s rural settlement exhibits a shattered
          settlement pattern, with well-developed infrastructure and access to
          essential services.
        </p>
        <p style={styles.paragraph}>
          However, Kerala’s rural areas face several challenges, including declining
          agricultural employment, youth migration, unemployment, and an aging
          population. Many rural households depend on remittances from family
          members working abroad, making the state’s economy heavily reliant on
          external income sources. At the same time, the role of gram panchayats
          has become increasingly crucial in addressing These challenges by
          implementing welfare schemes, infrastructure projects and livelihood
          programs.
        </p>
      </section>

      {/* Panchayati Raj in Kerala */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Panchayati Raj in Kerala</h3>
        <p style={styles.paragraph}>
          The evolution of Panchayati Raj in Kerala has not followed a consistent
          pattern across the state, primarily due to the historical division of the
          region. While some areas were under princely rule, others were part of the
          British-administered Madras Province. The princely territories did not
          establish Panchayats similar to the modern system until after India gained
          independence. Even post-independence, Kerala remained resistant to the
          advancements in Panchayati Raj that were occurring in other parts of the
          country. This was the case despite initiatives by the first government led
          by the late E.M.S. Namboodiripad, which formed an Administrative Reforms
          Committee advocating strongly for a decentralized governance model. Until
          1995, Kerala's Panchayati Raj structure was limited to a single-tier
          Village Panchayat system, placing it behind many other states in terms of
          Panchayati Raj implementation. In August 1996, the Kerala State Planning
          Board was assigned the responsibility of leading a campaign for
          decentralized planning, with the active support of the Ministry of Local
          Administration. This initiative aimed to transform the Ninth Five-Year
          Plan of Kerala into a "People’s Plan." The campaign envisioned that as the
          planning process progressed, institutional, legal, and procedural
          obstacles hindering effective decentralization of power would be
          addressed as they emerged. The State Government introduced the campaign by
          declaring that 35-40% of the total state development funds would be
          allocated to local governments, allowing them to spend these resources
          based on their identified priorities. To ensure balanced allocation, broad
          guidelines were established to prevent Panchayats from disproportionately
          directing funds toward non-productive sectors. The planning activities
          involved organizing Gram Sabhas specifically for planning purposes,
          collaboratively preparing socio-economic profiles of Panchayats in the
          form of printed development reports, conducting development seminars,
          drafting projects, evaluating and refining projects through block and
          district-level expert committees composed of volunteers, and obtaining
          final approval from the District Planning Committee.
        </p>
      </section>

      {/* Key Milestones and Legislations */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">Key Milestones and Legislations</h3>
        <p style={styles.paragraph}>
          The key milestones and legislations of Panchayati raj in Kerala are marked
          by significant events and laws that shaped the state’s decentralized
          governance system. These milestones and legislations have contributed to
          the development of the robust panchayat system in Kerala enabling
          effective decentralized governance and participatory democracy.
        </p>
        <ul style={styles.list}>
          <li>
            The Madras Village Panchayat Act of 1950 introduced the concept of
            elected village councils in Kerala, laying the foundation for the modern
            panchayat system.
          </li>
          <li>
            In 1958, the Kerala Panchayat Bill and District Council Bill were
            introduced in the state legislative assembly. However, they couldn't be
            enacted and implemented due to the government's dismissal and the
            dissolution of the legislative assembly in 1959.
          </li>
          <li>
            The Kerala Panchayat Samithi Act of 1960 established panchayat samitis
            at the block level and grama panchayats at the village level, providing
            a framework for decentralized governance.
          </li>
          <li>
            The 73rd and 74th Constitutional Amendments in 1992 gave constitutional
            status to the three-tier panchayat system, empowering local
            self-government institutions.
          </li>
          <li>
            The Kerala Panchayat Raj Act of 1994 strengthened the panchayat system
            in Kerala, providing for the devolution of powers, functions, and
            finance to local self-government institutions.
          </li>
          <li>
            In 1995, the first People's Plan Campaign was launched, involving
            participatory planning and budgeting.
          </li>
          <li>
            The Kerala Panchayat Raj Act and the Kerala Municipality Act were
            reconstructed in 1999.
          </li>
          <li>
            The Kerala Panchayat Raj (Amendment) Act of 2000 devolved more powers to
            local self-government institutions.
          </li>
          <li>
            The Kerala Panchayat Raj (Second Amendment) Act of 2010 introduced new
            provisions for decentralization and participatory governance.
          </li>
        </ul>
      </section>

      {/* People’s Plan Campaign in Kerala */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">People’s Plan Campaign in Kerala</h3>
        <p style={styles.paragraph}>
          Kerala's People's Planning initiative represents a groundbreaking
          decentralized governance model that empowers local communities in
          development decision-making. It was launched in 1996, this program
          transfers substantial planning authority and resources to Panchayati Raj
          Institutions, enabling grassroots-level participatory development. The
          approach involves systematic devolution of nearly 40% of state plan funds
          to local governments, coupled with extensive training for elected
          representatives and officials.
        </p>
        <p style={styles.paragraph}>
          The program emphasizes participatory budgeting, where village assemblies
          (Gram Sabhas) directly prioritize development projects based on local
          needs. This process has significantly enhanced civic engagement while
          improving resource allocation for critical sectors like healthcare,
          education, and infrastructure. The model's success stems from its
          integrated framework combining administrative decentralization, fiscal
          devolution, and capacity building. Notable outcomes include improved
          public service delivery, greater transparency in governance, and enhanced
          community ownership of development projects. While implementation
          challenges persist, Kerala's experiment demonstrates how decentralized
          planning can make governance more inclusive and responsive to local
          priorities. The program continues to evolve, incorporating technological
          solutions and innovative practices to strengthen grassroots democracy.
        </p>
        <p style={styles.paragraph}>
          The People’s Plan Campaign evolved into the Kerala Development Plan under
          the 10th Five-Year Plan. It is defined as the combined effort and set of
          practices by the government and the people of Kerala to achieve better
          productivity, significantly lower infant mortality rates, increased life
          expectancy, better healthcare services even Kerala has a lower per capita
          income as compared to many developed nations and by adapting radical
          improvement measures using lesser resources and lesser energy consuming
          methods. In 2025, Kerala maintained Human Development Index (HDI) ranking,
          with a value of 0.796.
        </p>
      </section>

      {/* The Kerala Village Landscape */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">The Kerala Village Landscape</h3>
        <p style={styles.paragraph}>
          Kerala boasts a robust local self-governance framework, comprising 941
          Gram Panchayats, 152 Block Panchayats, 14 District Panchayats, 77 Taluks,
          87 Municipalities, and 6 Municipal Corporations. Vengoor in Ernakulam
          district holds the distinction of being the largest Gram Panchayat in
          terms of area, while Valapattanam in Kannur district is the smallest.
          Olavanna in Kozhikode district stands out as the most populous panchayat,
          renowned for its extensive agricultural lands. Pullampara has gained
          recognition as India’s first panchayat to achieve 100% digital literacy.
          In 2024, Kerala earned accolades in two categories. Perumpadappa Gram
          Panchayat in Malappuram district secured second place nationally for the
          Deen Dayal Upadhyay Panchayat Satat Vikas Puraskar, acknowledging its
          efforts in poverty alleviation and livelihood enhancement. The Kerala
          Institute of Local Administration (KILA) was awarded the Panchayat
          Kshamata Nirman Sarvottam Sansthan Award for its contributions to
          improving the effectiveness of local governance, fostering skill
          development, and enhancing service delivery.
        </p>
      </section>

      {/* Functions and Responsibilities of Gram Panchayat */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">
          Functions and Responsibilities of Gram Panchayat
        </h3>
        <p style={styles.paragraph}>
          Gram Panchayat in Kerala is entrusted with various functions and
          responsibilities to deliver basic services and implement development
          programs in rural areas. Their mandatory functions included: water
          supply, sanitation and waste management, roads and bridges, street
          lighting and public health etc. Their discretionary functions included:
          education, social welfare, agriculture and animal husbandry,
          environmental conservation and tourism development etc. Additionally,
          they are responsible for implementing government schemes, maintaining
          records, providing certificates and disaster management.
        </p>
        <h4 className='text-yellow-600 font-bold'>Financial Powers of Gram Panchayats</h4>
        <ul style={styles.list}>
          <li>
            <strong>Allocation of funds:</strong> The Gram Panchayat receives funds
            from the state government, central government, and other sources, which
            they can allocate for various development activities.
          </li>
          <li>
            <strong>Taxation:</strong> The Gram Panchayat has the power to levy
            taxes on properties, professions, and other sources as permitted by the
            Kerala Panchayat Raj Act.
          </li>
          <li>
            <strong>Non-tax revenues:</strong> The Gram Panchayat can generate
            non-tax revenue through various sources, such as rent from
            panchayat-owned buildings, interest on investments, and fees for
            services.
          </li>
          <li>
            <strong>Grants-in-aid:</strong> The Gram Panchayat receives
            grants-in-aid from the state government and central government for
            specific development programs and activities.
          </li>
          <li>
            <strong>Borrowing powers:</strong> The Gram Panchayat has limited
            borrowing powers, which enable them to raise loans from financial
            institutions for development activities.
          </li>
          <li>
            <strong>Budgeting:</strong> The Gram Panchayat prepares and approves its
            own budget, which outlines its income and expenditure for the financial
            year.
          </li>
          <li>
            <strong>Accounting and auditing:</strong> The Gram Panchayat maintains
            its accounts and undergoes annual audits to ensure transparency and
            accountability in its financial management.
          </li>
        </ul>
        <h4 className='text-yellow-600 font-bold'>Administrative Powers of Gram Panchayat</h4>
        <ul style={styles.list}>
          <li>
            <strong>Election and Term:</strong> Gram Panchayat members are elected
            by the people for a term of five years.
          </li>
          <li>
            <strong>Formation of Standing Committees:</strong> Gram Panchayats can
            form standing committees to oversee various aspects of panchayat
            administration, such as finance, development, and welfare.
          </li>
          <li>
            <strong>Maintenance of Records:</strong> Gram Panchayats are responsible
            for maintaining records of births, deaths, marriages, and other vital
            events.
          </li>
          <li>
            <strong>Implementation of Government Schemes:</strong> The Gram
            Panchayat plays a vital role in the implementation of various flagship
            schemes launched by the central and state governments such as:
            <ul style={styles.nestedList}>
              <li>
                <strong>MGNREGA (Mahatma Gandhi National Rural Employment Guarantee
                Act):</strong> Providing guaranteed wage employment to rural
                households.
              </li>
              <li>
                <strong>Swachh Bharat Abhiyan:</strong> Promoting cleanliness and
                sanitation in rural areas.
              </li>
              <li>
                <strong>PMAY-G (Pradhan Mantri Awas Yojana – Gramin):</strong>
                Providing affordable housing to the rural poor.
              </li>
            </ul>
          </li>
          <li>
            <strong>Public Health and Sanitation:</strong> Gram Panchayat is
            responsible for maintaining public health and sanitation, including
            provisions for cleaning, waste management, and sanitation facilities.
          </li>
          <li>
            <strong>Maintenance of Community Assets:</strong> Gram Panchayats are
            responsible for maintaining community assets, such as schools,
            hospitals, and community centers.
          </li>
          <li>
            <strong>Disaster Management:</strong> Gram Panchayat is responsible for
            responding to natural disasters and providing relief to affected
            communities.
          </li>
          <li>
            <strong>Regulation of Markets:</strong> Gram Panchayat has the power to
            regulate markets, including licensing vendors and collecting market
            fees.
          </li>
          <li>
            <strong>Redressal of Public Grievances:</strong> Gram Panchayat is
            responsible for redressing public grievances and resolving disputes at
            the local level.
          </li>
        </ul>
        <p style={styles.paragraph}>
          The Gram Panchayat plays a crucial role in rural governance and
          development. Its primary responsibilities include executing the decisions
          and resolutions made by the Gram Sabha, ensuring their effective
          implementation. It is also tasked with maintaining law and order within
          the village, addressing local disputes, and fostering a peaceful community
          environment. Additionally, the Gram Panchayat oversees the proper
          allocation and utilization of funds designated for rural development
          initiatives, ensuring transparency and efficiency. It monitors and
          evaluates the progress of various rural development programs to guarantee
          their successful execution. Furthermore, the Gram Panchayat works to
          promote and preserve the village's cultural heritage and traditions,
          safeguarding its unique identity for future generations.
        </p>
      </section>

      {/* Kerala Institute of Local Administration (KILA) */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">
          Kerala Institute of Local Administration (KILA)
        </h3>
        <p style={styles.paragraph}>
          The Kerala Institute of Local Administration (KILA) serves as the state's
          premier capacity-building institution for decentralized governance,
          operating under the Local Self-Government Department. It is established
          to strengthen grassroots democracy, KILA provides specialized training
          programs, research support, and consultancy services for elected
          representatives, government officials, and civil society members involved
          in local governance.
        </p>
        <p style={styles.paragraph}>
          As a nodal agency for local government training, KILA plays a pivotal role
          in implementing Kerala's decentralized planning model through its
          innovative curriculum covering participatory governance, fiscal
          management, and sustainable development practices. The institute conducts
          regular workshops on Panchayati Raj systems, urban governance, and
          community participation methodologies while maintaining strong academic
          collaborations with national and international partners. KILA's
          multidimensional approach combines classroom instruction with field-based
          learning, action research projects, and technology-enabled knowledge
          dissemination. Its programs emphasize practical skill development in local
          governance, project planning, and social audit techniques - contributing
          significantly to Kerala's reputation as a leader in democratic
          decentralization. The institute also facilitates knowledge exchange
          through its resource center and publications that document best practices
          in local self-governance.
        </p>
        <p style={styles.paragraph}>
          One of its primary roles involves training and capacity building, where it
          conducts specialized workshops and courses for elected representatives
          such as ward members and Panchayat presidents, as well as government
          staff. These training programs focus on essential areas like participatory
          planning, financial management, and sustainable development, equipping
          local leaders with the skills needed for effective governance. In addition
          to training, KILA engages in research and policy support, analyzing best
          practices in local governance and recommending improvements. This research
          helps shape policies that enhance grassroots democracy, ensuring that
          governance structures remain responsive to community needs. The institute
          also emphasizes community engagement and social audits, training both
          citizens and officials in tracking government fund utilization. This
          promotes transparency and accountability within local administrative
          bodies.
        </p>
        <p style={styles.paragraph}>
          KILA further integrates technology and innovation into governance by
          introducing digital tools such as e-governance platforms and GIS mapping.
          These initiatives streamline administrative processes and encourage
          participatory budgeting, where villagers actively contribute to decisions
          on fund allocation. Lastly, KILA fosters collaboration and knowledge
          sharing by partnering with national and international agencies to exchange
          governance insights. It also publishes guides and case studies documenting
          successful local governance models, creating a repository of best
          practices for wider adoption. Together, these functions reinforce Kerala’s
          decentralized governance framework, making local administration more
          efficient and inclusive. By training over 50,000 local leaders annually,
          KILA strengthens democracy at the grassroots level, making Kerala a model
          for participatory governance in India.
        </p>
      </section>

      {/* Kerala's Fourteenth Five-Year Plan (2022-2027) */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">
          Kerala's Fourteenth Five-Year Plan (2022-2027)
        </h3>
        <p style={styles.paragraph}>
          Kerala's Fourteenth Five-Year Plan (2022-2027) presents a comprehensive
          roadmap for sustainable development, building on the state's strong
          foundations in human development and decentralized governance. The plan
          adopts a multidimensional approach that prioritizes healthcare
          transformation through upgraded primary health centers with telemedicine
          capabilities, education revolution focusing on digital infrastructure and
          vocational training aligned with emerging technologies, and expanded
          social security measures including enhanced pension schemes. Economic
          modernization forms a crucial pillar, with emphasis on developing
          knowledge economy hubs like IT parks and startup incubators, promoting
          sustainable manufacturing, and revolutionizing tourism through eco-tourism
          circuits and heritage preservation. Infrastructure development receives
          special attention, particularly in completing critical transportation
          projects like the SilverLine rail, expanding digital connectivity through
          the K-FON network, and implementing smart city solutions for urban
          renewal.
        </p>
        <p style={styles.paragraph}>
          The plan significantly reinforces Kerala's unique decentralized
          governance model by maintaining 40% fund allocation to local governments
          while introducing innovative elements like performance-based grants and
          mandatory social audits. It strengthens participatory mechanisms through
          digital citizen feedback platforms and ward-level monitoring committees,
          with special focus on women's collectives in planning processes.
          Environmental sustainability emerges as a cross-cutting theme, with
          ambitious climate action strategies including coastal protection systems,
          micro-watershed management programs, and a carbon-neutral panchayat
          certification initiative. The energy sector transformation focuses on
          achieving 5000 MW solar power generation targets and developing extensive
          electric vehicle charging infrastructure.
        </p>
        <p style={styles.paragraph}>
          Agriculture and food security initiatives emphasize organic farming
          promotion, cold chain infrastructure development, and strengthening farmer
          producer organizations. Industrial development strategies balance
          modernization of MSMEs with revival of traditional industries and creation
          of coastal economic zones. The plan incorporates strong social justice
          components through SC/ST entrepreneurship programs, comprehensive gender
          budgeting, and accessible infrastructure for differently-abled citizens.
          Implementation frameworks establish robust institutional mechanisms
          including inter-departmental coordination cells, project monitoring
          dashboards, and grievance redressal portals, supported by innovative
          financial architecture leveraging KIIFB expansion, public-private
          partnerships, and green bonds.
        </p>
        <p style={styles.paragraph}>
          Technology integration permeates all aspects of the plan, from blockchain
          applications for transparent fund flow to AI-based planning tools and GIS
          resource mapping. Expected outcomes by 2027 include 10% GSDP growth rate
          increase, universal healthcare coverage, complete digital literacy, 30%
          renewable energy share, and halving of urban-rural development gaps. The
          plan proactively addresses potential challenges like climate change
          vulnerabilities, fiscal constraints, demographic transitions and
          technological disruptions through specific mitigation measures including
          disaster response funds, alternative financing mechanisms and continuous
          skill development programs. What distinguishes Kerala's approach is its
          unparalleled devolution to local governments, integration of traditional
          knowledge systems, and focus on quality-of-life indicators beyond
          conventional economic metrics. The plan's success hinges on sustained
          political commitment, bureaucratic efficiency and active citizen
          participation to realize its vision of an equitable, sustainable and
          prosperous Kerala that could serve as a development model for other Indian
          states. Its holistic framework balances economic modernization with
          ecological preservation and social justice, while maintaining the state's
          distinctive human development focus and participatory governance ethos.
          The Fourteenth Plan represents both continuity with Kerala's
          developmental legacy and innovation to address emerging challenges in the
          post-pandemic era.
        </p>
      </section>

      {/* Profile of the Area */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">PROFILE OF THE AREA</h3>

        <h4 className='text-yellow-600 font-bold'>Kerala</h4>
        <p style={styles.paragraph}>
          Kerala is located on India's Malabar Coast, Kerala is a state known
          locally as Keralam in the Malayalam language. Formed on November 1, 1956,
          Kerala emerged from the consolidation of Malayalam-speaking regions from
          the former areas of Cochin, Malabar, South Canara, and Travancore, as
          mandated by the States Reorganisation Act. Kerala spans 38,863 square
          kilometers, positioning it as the 14th smallest state in India by land
          area. The state shares borders with Karnataka to the north and northeast,
          Tamil Nadu to the east and south, and the Lakshadweep Sea to the west
          Kerala's population stands at 33 million, according to the 2011 census,
          making it the 13th most populous state in India. Administratively, Kerala
          is divided into 14 districts, with Thiruvananthapuram serving as the state
          capital. Malayalam is the predominant and official language spoken in
          Kerala. For administrative and taxation purposes, these districts are
          further divided into 27 revenue subdivisions and 77 taluks. These taluks
          wield fiscal and administrative authority over settlements within their
          jurisdictions, including the upkeep of local land records. Furthermore,
          Kerala's taluks are subdivided into 1,674 revenue villages, providing a
          more localized framework for governance. Kerala, situated between the
          Lakshadweep Sea and the Western Ghats, spans a geographical area defined
          by latitudes 8°18' to 12°48' north and longitudes 74°52' to 77°22' east.
          The state's climate is characterized by a humid tropical rainforest, with
          a 590 km coastline and varying widths of 11 to 121 km.
        </p>
        <p style={styles.paragraph}>
          The Western Ghats, a UNESCO World Heritage Site and biodiversity hotspot,
          dominate the eastern region, boasting peaks like Anamudi, the highest in
          South India. The Ghats are interrupted by the Palakkad Gap, a notable
          mountain pass. Kerala's pomiędzy 44 rivers, mostly flowing westward,
          contribute to the state's unique geography. The western coastal belt is
          relatively flat, featuring the Kerala Backwaters, a network of lakes,
          canals, and estuaries. Kuttanad, known as the "Rice Bowl of Kerala," is a
          rare region where farming occurs below sea level. Vembanad Lake, the
          longest in India, is a vital part of the backwaters. Kerala's rivers face
          environmental challenges like sand mining and pollution. The state is
          prone to natural disasters, including landslides, floods, and droughts,
          having been severely affected by the 2004 Indian Ocean tsunami and
          devastating floods in 2018 and 2024. Kerala experiences a tropical
          climate, with two monsoon seasons: the southwest monsoon from June to
          August, contributing 65% of the annual rainfall, and the northeast monsoon
          from September to December. The state receives an average annual rainfall
          of 2,923 mm, with temperatures ranging from 19.8°C to 36.7°C.
        </p>
        <p style={styles.paragraph}>
          Kerala has emerged as a leading state in India, showcasing remarkable
          progress in economic growth, social development, and governance. In
          2023-24, the state’s economy grew robustly, with a 6.5% increase in real
          Gross State Domestic Product (GSDP), up from 4.2% Things to do in 2022-23.
          The Gross State Value Added (GSVA) also saw a significant rise of 7.2%,
          driven by strong performances across all sectors. The primary sector grew
          by 4.7%, the secondary sector by 4.1%, and the tertiary sector by 8.9%.
          Kerala’s per capita GSDP reached Rs 1,76,072, well above the national
          average of Rs 1,24,600, reflecting higher average incomes Kerala has
          consistently ranked as the top state in India for achieving the
          Sustainable Development Goals (SDGs), securing the highest position in the
          SDG India Index for the fourth consecutive year in 2023-24. It excelled
          in Goal 2 (Zero Hunger) and Goal 4 (Quality Education), with scores of 84
          and 82, respectively. The state also reported the lowest poverty rate in
          India, with a Multidimensional Poverty Index (MPI) score of 0.002, and
          was recognized as the most preferred state for employment by both male
          and female talent in the India Skills Report 2024. Fiscal management in
          Kerala has been prudent, with a fiscal deficit of 2.9% of GSDP in
          2023-24, slightly higher than the 2.5% in 2022-23. Despite a 6.2%
          decline in total revenue receipts due to a 26% drop in central transfers,
          the state’s own revenue grew by 4%, driven by a 3.3% increase in tax
          revenue and an 8.1% rise in non-tax revenue. Capital expenditure,
          however, decreased by 0.6% in 2023-24.
        </p>
        <p style={styles.paragraph}>
          Agriculture remains a cornerstone of Kerala’s economy, with coconut and
          rubber being the dominant crops, occupying 30.2% and 21.6% of the gross
          cropped area, respectively. The state also saw an increase in food crop
          production, including pulses, ragi, and sweet potatoes. The total fish
          production stood at 8.32 lakh MT in 2023-24, with marine exports worth Rs
          7,231.84 crore, making Kerala the third-largest seafood exporter in India
          by quantity and second by value. Kerala’s cooperative sector plays a vital
          role in rural development, with 16,393 cooperative societies, including
          consumer, credit, and women’s cooperatives. The state is unique in having
          youth cooperatives to promote entrepreneurship. The industrial sector,
          particularly construction and manufacturing, grew by 4.6% and 3.0%,
          respectively, contributing 27% to the GSVA. The state has made
          significant strides in infrastructure development, with projects like the
          Vizhinjam International Seaport, Kochi Metro, and Kannur Airport. Kerala
          is fully electrified, with an installed power capacity of 3,818.8 MW as
          of March 2024, and a 12% increase in annual power sales. The state also
          boasts a robust road network, with 1,91,292 km of roads, including
          national highways, state highways, and rural roads. In the IT sector,
          Kerala is a pioneer, housing India’s first Technopark and the largest IT
          township, Technocity. The KFON project aims to provide high-speed internet
          to 30,000 government institutions and free internet to 20 lakh
          economically backward families. E-governance initiatives like Akshaya,
          FRIENDS, and e-office have enhanced service delivery and transparency.
        </p>
        <p style={styles.paragraph}>
          Social welfare is a key focus, with 50.4 lakh beneficiaries receiving
          social security pensions, up from 34 lakh in 2015-16. The LIFE Mission
          has constructed 4.08 lakh houses, while the Ayyankali Urban Employment
          Guarantee Scheme (AUEGS) generated 26.89 lakh person-days of employment
          in 2023-24. Kudumbashree, a women’s self-help group initiative, has
          empowered women through micro-enterprises and community development
          programs. Education and healthcare are areas where Kerala excels. The
          state has a Gross Enrolment Ratio (GER) of 41.3 in higher education, with
          institutions like the University of Kerala and Mahatma Gandhi University
          achieving high NAAC rankings. Kerala’s public healthcare system is among
          the best in India, with a life expectancy of 75 years, the lowest Infant
          Mortality Rate (IMR) of 6, and a Maternal Mortality Rate (MMR) of 19.
          Initiatives like the Aardram Mission have improved healthcare
          accessibility, with 78% of Primary Health Centers (PHCs) converted into
          Family Health Centers (FHCs). Kerala’s development model emphasizes
          decentralization, social inclusion, and sustainable growth. The state’s
          commitment to achieving the SDGs, coupled with its strong governance and
          welfare initiatives, positions it as a leader in India’s progress toward
          equitable and inclusive development.
        </p>

        <h4 className='text-yellow-600 font-bold'>Kollam District</h4>
        <p style={styles.paragraph}>
          Kollam, a southern district in Kerala, is bordered by Tamil Nadu to the
          east and the Arabian Sea to the west. It shares boundaries with Alappuzha
          and Pathanamthitta districts to the north and Thiruvananthapuram district
          to the south. The district comprises 68 panchayats, divided into 11
          blocks, one corporation, and four municipalities, and is administratively
          divided into two revenue divisions: Kollam and Punalur. As the 49th most
          populous urban agglomeration in India, Kollam district has a population
          of 2,635,375, according to the 2011 census. The sex ratio stands at 1113
          females per 1000 males, with a total literacy rate of 94.09%. The male
          and female literacy rates are 96.09% and 92.31%, respectively.
          Approximately 54.95% of the population resides in rural areas.
        </p>
        <p style={styles.paragraph}>
          Kollam's temperature remains relatively consistent throughout the year,
          ranging from 25 to 32 degrees Celsius. The district is renowned for its
          cashew industry and boasts a diverse topography, featuring plains,
          mountains, lakes, and backwaters. The Kallada Boat Race is a prominent
          festival event, showcasing the district's rich cultural heritage. Kollam's
          37.3-kilometer coastline significantly contributes to Kerala's fish
          production, with Neendakara and Sakthikulangara being important fishing
          villages. The Kallada River, a major waterway, flows through the eastern
          part of Kollam, playing a vital role in the district's agriculture,
          industry, and ecology. The district has a well-developed transportation
          network, with the Kollam Junction railway station serving as the primary
          railhead. An extensive network of waterways facilitates boat services to
          West Kallada, Munroe Island, and Alappuzha. The Kallada River provides a
          crucial transportation route for goods and people. Kollam has a rich
          history of infrastructure development. The district's first post and
          telegraph office was established in 1864, followed by the first school in
          1867. The iconic Punalur suspension bridge, a marvel of British
          engineering, was commissioned in 1877. This bridge, the only one of its
          kind in India besides the Howrah Bridge in Kolkata, is a testament to the
          district's historical significance. The district's healthcare
          infrastructure also has a long history, with the Victoria Hospital, the
          first government hospital in Kollam, established during the reign of
          Maharaja Sreemoolam Thirunal. Electricity was introduced in Kollam in
          1924, marking a significant milestone in the district's development. The
          first railway line in Travancore, connecting Kollam to Shenkottai in Tamil
          Nadu, was commissioned in 1902 during the reign of Maharaja Uthram
          Thirunal.
        </p>
        <p style={styles.paragraph}>
          Kollam is home to the Shendurney Wildlife Sanctuary, located in the
          Punalur taluk. Scenic spots include Jadayu Earth Centre, Palaruvi Falls,
          and Ashtamudi backwaters. The Asramam Maidan, a large open space spanning
          over 60 acres, hosts various events, including Kollam Pooram, and is used
          by driving schools. Kollam has played a significant role in Kerala's
          social renaissance and freedom struggle, with notable events like the
          Kadakkal Revolt of 1938 taking place in the district.
        </p>

        <h4 className='text-yellow-600 font-bold'>West Kallada Gram Panchayat</h4>
        <p style={styles.paragraph}>
          West Kallada is a village Kollam district in the state of Kerala. As of
          the 2011 census, it had a population of 18,176. The pin code of the
          region is 691500. It is a part of the Kunnathur taluk. The Kallada river
          runs through the village separating it into East Kallada and West
          Kallada, creating a unique landscape. The Kallada Irrigation and Tree
          Crop Development Project was a project to develop the river. A
          significant portion of the renowned Sasthamcotta lake flows through the
          village, adding to its natural beauty. The atmosphere in West Kallada is
          serene and environmentally friendly, making it an attractive destination.
          Administratively, West Kallada falls under the Quilon division and is
          part of the Kunnathur assembly constituency and the Mavelikkara
          parliament constituency. The nearest town is Kollam, located
          approximately 28 kilometers away.
        </p>
        <p style={styles.paragraph}>
          West Kallada Gram Panchayat is a rural local government body in the
          Sasthamcotta Panchayat Samiti, which falls under the Kollam Zila
          Parishad. This panchayat has 1 village under its jurisdiction and is
          divided into 14 wards for administrative purposes. The last LSGI election
          was conducted in 2020. There are 8 schools in the panchayat. There are 4
          major hospitals in the village. It constitutes several cultural
          institutions and government service centres. The panchayat covers an
          area of 13.36 square kilometers.
        </p>
      </section>
      <LeafletMap />

      {/* References */}
      <section style={styles.section} data-aos="fade-up">
        <h3 className="text-2xl font-semibold border-b-4 border-blue-500 inline-block pb-1 mb-4 min-w-full">References</h3>
        <ol style={styles.list}>
          <li>
            Johnson, Dominic, & Johnson George. (2021). Panchayati Raj Act & Rules-
            Allied Laws, Government Orders, Circulars- Malayalam II (10th edition).
            Em Tee En Publications.
          </li>
          <li>
            Issaac Thomas, T., M. (2021). People’s Planning. LeftWord Book.
          </li>
          <li>Economic Review 2024. (2025). Kerala State Planning Board.</li>
          <li>
            <a href="http://www.spb.kerala.gov.in" style={styles.link}>
              www.spb.kerala.gov.in
            </a>
          </li>
          <li>
            <a href="http://www.kila.ac.in" style={styles.link}>
              www.kila.ac.in
            </a>
          </li>
          <li>
            <a href="http://www.csesindia.org" style={styles.link}>
              www.csesindia.org
            </a>
          </li>
          <li>
            <a href="http://www.mathrubhumi.com" style={styles.link}>
              www.mathrubhumi.com
            </a>
          </li>
          <li>
            <a href="http://www.kollam.nic.com" style={styles.link}>
              www.kollam.nic.com
            </a>
          </li>
          <li>
            <a href="http://www.ecostat.kerala.gov.in" style={styles.link}>
              www.ecostat.kerala.gov.in
            </a>
          </li>
          <li>
            <a href="http://www.dop.lsgkerala.gov.in" style={styles.link}>
              www.dop.lsgkerala.gov.in
            </a>
          </li>
        </ol>
      </section>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  mainHeading: {
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '40px',
  },
  sectionHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  },
  subSectionHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#444',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  list: {
    fontSize: '16px',
    marginBottom: '15px',
    paddingLeft: '20px',
  },
  nestedList: {
    fontSize: '16px',
    marginTop: '10px',
    paddingLeft: '20px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
};

export default GramapanchayathBackground;