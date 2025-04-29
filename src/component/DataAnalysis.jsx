import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Section = ({ title, content, chartData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="prose max-w-none mb-4 text-gray-600">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-2">{paragraph}</p>
        ))}
      </div>
      {chartData && (
        <div className="mt-4 max-w-md mx-auto">
          {chartData.type === 'bar' ? (
            <Bar data={chartData.data} options={chartData.options} />
          ) : (
            <Pie data={chartData.data} options={chartData.options} />
          )}
        </div>
      )}
    </div>
  );
};

const DataAnalysis = () => {
  const charts = [
    {
      id: 'Ward-Number-chart',
      type: 'bar',
      data: {
        labels: ['Ward 9', 'Ward 10', 'Ward 11', 'Ward 12'],
        datasets: [
          {
            label: 'Number of Respondents',
            data: [30, 25, 40, 25],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Age-Group-chart',
      type: 'pie',
      data: {
        labels: ['Below 21', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90'],
        datasets: [
          {
            data: [5, 22.5, 15, 19.2, 21.7, 10, 5, 1.7],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
              '#36A2EB',
            ],
          },
        ],
      },
    },
    {
      id: 'Educational-Qualification-chart',
      type: 'bar',
      data: {
        labels: ['Below 4th', '5th-9th', 'SSLC', 'Plus Two', 'Degree', 'Masters', 'Other'],
        datasets: [
          {
            label: 'Percentage',
            data: [4.2, 13.3, 26.7, 14.2, 35.8, 4.2, 1.7],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Economic-Status-chart',
      type: 'pie',
      data: {
        labels: ['BPL', 'APL'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['#FF6384', '#36A2EB'],
          },
        ],
      },
    },
    {
      id: 'Employment-chart',
      type: 'bar',
      data: {
        labels: ['Unemployed', 'Organised Sector', 'Unorganised Sector', 'Self-employed', 'Not Working'],
        datasets: [
          {
            label: 'Percentage',
            data: [46.7, 17.5, 15, 8.3, 12.5],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Panchayat-Awareness-chart',
      type: 'pie',
      data: {
        labels: ['Fully Aware', 'Somewhat Aware', 'Unaware'],
        datasets: [
          {
            data: [74, 26, 0],
            backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Participation-in-GramSabha-chart',
      type: 'pie',
      data: {
        labels: ['Attended', 'Never Attended'],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ['#4BC0C0', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Engagement-in-GramPanchayat-Activities-chart',
      type: 'pie',
      data: {
        labels: ['Engaged', 'Not Engaged'],
        datasets: [
          {
            data: [53.3, 46.7],
            backgroundColor: ['#36A2EB', '#FFCE56'],
          },
        ],
      },
    },
    {
      id: 'Meeting-Frequency-in-GramSabha-chart',
      type: 'bar',
      data: {
        labels: ['Regularly', 'Occasionally', 'Rarely'],
        datasets: [
          {
            label: 'Percentage',
            data: [11.7, 28.3, 60],
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Barriers-to-GramSabha-Participation-chart',
      type: 'pie',
      data: {
        labels: ['Disinterest', 'Health Limitations', 'Personal Commitments'],
        datasets: [
          {
            data: [50, 26.3, 23.7],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    },
    {
      id: 'Opinion-Inclusion-Evaluation-chart',
      type: 'pie',
      data: {
        labels: ['Valued', 'Uncertain', 'Excluded'],
        datasets: [
          {
            data: [56.9, 28.4, 14.7],
            backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Effectiveness-of-GramPanchayat-in-Addressing-Local-Issues-chart',
      type: 'pie',
      data: {
        labels: ['Very Effective', 'Effective', 'Ineffective'],
        datasets: [
          {
            data: [51.7, 38.3, 10],
            backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Panchayat-Responsiveness-to-Village-Needs-chart',
      type: 'pie',
      data: {
        labels: ['Fully Responsive', 'Partially Responsive', 'Not Responsive'],
        datasets: [
          {
            data: [66.9, 31.4, 1.7],
            backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Local-Issues-in-the-Area-chart',
      type: 'bar',
      data: {
        labels: ['Infrastructure Deficiency', 'Unemployment', 'Water and Sanitation', 'Poverty', 'Pollution', 'Other'],
        datasets: [
          {
            label: 'Percentage',
            data: [45.9, 31.6, 15, 8.3, 4.1, 4.2],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Public-Perception-on-GramPanchayat’s-Financial-Capacity-chart',
      type: 'pie',
      data: {
        labels: ['Sufficient', 'Insufficient', 'Unaware'],
        datasets: [
          {
            data: [35, 6.7, 58],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          },
        ],
      },
    },
    {
      id: 'Community-Familiarity-with-Panchayat-Schemes-chart',
      type: 'pie',
      data: {
        labels: ['Familiar', 'Not Familiar'],
        datasets: [
          {
            data: [49.2, 50.8],
            backgroundColor: ['#4BC0C0', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Public-Utilization-of-Panchayat-Programs-chart',
      type: 'pie',
      data: {
        labels: ['Benefited', 'Not Benefited'],
        datasets: [
          {
            data: [74.2, 25.8],
            backgroundColor: ['#36A2EB', '#FFCE56'],
          },
        ],
      },
    },
    {
      id: 'Performance-in-Education-and-Healthcare-Delivery-chart',
      type: 'pie',
      data: {
        labels: ['Very Satisfied', 'Satisfied', 'Dissatisfied'],
        datasets: [
          {
            data: [79.8, 18.5, 1.7],
            backgroundColor: ['#4BC0C0', '#36A2EB', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Satisfaction-Levels-with-Basic-Civic-Services-chart',
      type: 'pie',
      data: {
        labels: ['Very Effective', 'Effective', 'Dissatisfied'],
        datasets: [
          {
            data: [37.5, 55.8, 6.7],
            backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Communication-Pathways-in-Local-Governance-chart',
      type: 'bar',
      data: {
        labels: ['Notice Paper', 'Word of Mouth', 'Social Media'],
        datasets: [
          {
            label: 'Percentage',
            data: [89.2, 30.8, 13.3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    },
    {
      id: 'Effectiveness-of-Panchayat-Villager-Communication-chart',
      type: 'pie',
      data: {
        labels: ['Effective', 'Uncertain', 'Ineffective'],
        datasets: [
          {
            data: [72.9, 20.3, 6.8],
            backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384'],
          },
        ],
      },
    },
    {
      id: 'Degree-of-Responsiveness-to-the-Villagers-Concerns-and-Queries-chart',
      type: 'pie',
      data: {
        labels: ['Very Satisfied', 'Satisfied', 'Dissatisfied'],
        datasets: [
          {
            data: [45, 40, 15],
            backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6384'],
          },
        ],
      },
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center mt-20">
        CHAPTER IV: DATA ANALYSIS AND INTERPRETATION
      </h1>

      <Section
        title="Introduction"
        content={[
          "Data analysis and interpretation represent two fundamental phases in the research process that convert unprocessed information into valuable knowledge and actionable conclusions. Data analysis involves the methodical application of statistical and computational approaches to examine, summarize, and assess collected information. This systematic procedure includes data cleansing, transformation, and modeling to uncover meaningful patterns and insights that facilitate informed decision-making. The core objective of data analysis lies in distilling pertinent knowledge from datasets and formulating decisions based on these analytical outcomes. Essentially, data analysis represents a structured approach to organizing and examining information to extract significant findings - it reveals the underlying messages within the data.",
          "Data interpretation constitutes the subsequent phase where researchers comprehend and contextualize analyzed results, discerning their implications and formulating appropriate conclusions. This evaluative process employs various analytical techniques to examine processed data and derive pertinent inferences. Through interpretation, researchers can systematically classify, process, and synthesize information to address key research questions. This comprehensive review incorporates analytical examination, critical assessment, and visual representation to generate substantive insights that strengthen evidence-based decision processes.",
          "The combined implementation of rigorous data analysis and thorough interpretation is essential - without these methodological steps, research data merely exists as disjointed numerical values or factual elements devoid of contextual significance or practical utility. These interdependent processes collectively transform raw inputs into meaningful knowledge that advances understanding and informs practical applications.",
          "For the purpose of this study, the primary data have been collected from Ulluruppu (ward 9), Aithottuva North (ward 10), Aithottuva South (ward 11) and Aithottuva West (ward 12) of West Kallada Gram Panchayat through surveys. Additionally, an online questionnaire was prepared and circulated among the youths in the panchayat. We also went to the West Kallada Gram Panchayat office to get to know about the initiatives introduced by the Panchayat. A total of 120 responses have been collected. This primary data is analysed in this chapter. The main indicators used for analysis are ward number, age group, educational qualification, ration card categories of the households on their economic status, employment status, Panchayat awareness, community participation in Gram Panchayat activities, effectiveness of Gram Panchayat in communication and delivering services, various issues faced by the villagers etc. Tables, Bar diagrams and Pie diagrams are used for analysing data.",
          "By interpreting the data, this chapter seeks to understand the range of panchayat awareness among the residents and their views in its functioning.",
        ]}
      />

      <Section
        title="Ward Number"
        content={[
          "The survey data reveals that Ward 11 accounted for the highest number of respondents, followed by Wards 9 and 10 respectively. It should be noted that the survey covered residents from only 9 of the panchayat's total 14 wards, representing a partial but significant sample of the local population.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Ward-Number-chart')}
      />

      <Section
        title="Age Group"
        content={[
          "The highest participation is from 21-30 years (22.5%) and 51-60 years (21.7%), indicating strong engagement from both younger and older-middle-aged groups. The 41-50 age group (19.2%) also shows significant representation. Below 21 (5%) and 81-90 (1.7%) have the lowest responses. Senior citizens, 61-70 years (10%) show active participation.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Age-Group-chart')}
      />

      <Section
        title="Educational Qualification"
        content={[
          "The data from the graph clearly shows that Degree holders (35.8%) form the largest group, indicating a relatively educated sample. SSLC (26.7%) is the second-largest, suggesting many respondents have basic secondary education. Plus Two (14.2%) and 5th–9th standard (13.3%) show balanced participation. Below 4th standard (4.2%) and Masters (4.2%) have equal but minimal representation. Other (1.7%) is possibly including vocational or non-formal education.",
          "With ~75% having SSLC or higher education, communication of panchayat policies (e.g., notices, schemes) can leverage written/digital formats. Degree holder could be tapped for leadership roles or as intermediaries for awareness campaigns.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Educational-Qualification-chart')}
      />

      <Section
        title="Economic Status"
        content={[
          "More than half of the surveyed households fall under the Below Poverty Line (BPL) category. A substantial portion (45%) are Above Poverty Line (APL). It is suggesting a mixed economic profile in the panchayat. APL households may still face financial constraints but do not qualify for targeted BPL benefits. BPL households have more priority for welfare schemes.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Economic-Status-chart')}
      />

      <Section
        title="Employment"
        content={[
          "The graph clearly shows that nearly half of the respondents are unemployed (46.7%). It likely includes women in caregiving roles, elderly, or youth in education. The Dominance of Informal Work can be seen, Unorganised sector (15%) + Self-employed (8.3%) = 23.3% rely on unstable income sources. The respondents working in Organised sector (17.5%) is relatively small. 12.5% of respondents are currently not working includes retirees, elderly, or people with health issues.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Employment-chart')}
      />

      <Section
        title="Panchayat Awareness"
        content={[
          "The diagram shows that a significant majority of the respondents understand the Panchayat’s roles, indicating effective grassroots democracy. It is mainly due to panchayat literacy, regular Gram Sabha meetings, information campaigns (posters, announcements). 26% know some responsibilities but lack clarity may due to low participation in meetings by certain groups. A small but critical group is completely unaware.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Panchayat-Awareness-chart')}
      />

      <Section
        title="Participation in Gram Sabha"
        content={[
          "The diagram shows that exactly half (50%) of the respondents have attended Gram Sabha meetings at least sovrce once and equal proportion (50%) have never participated. We can also identify that the participation of youth is comparatively very low i.e. only 21% of 33 respondents between the age group of 18-30 have attended the Gram Sabha meeting.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Participation-in-GramSabha-chart')}
      />

      <Section
        title="Engagement in Gram Panchayat Activities"
        content={[
          "The diagram clearly indicates that slightly more than half (53.3%) are engaged in some form of Panchayat activities and less than half (46.7%) not participated in Panchayat initiatives. This clearly states that majority are not interested in involving in Panchayat activities due to several reasons.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Engagement-in-GramPanchayat-Activities-chart')}
      />

      <Section
        title="Meeting Frequency in Gram Sabha"
        content={[
          "The figure shows that 60% of the respondents rarely attend Gram Sabha meetings. Only 11.7% attend regularly. 28.3% attend occasionally. Low participation undermines the Panchayati Raj system's core principle of inclusive decision-making, reducing the legitimacy of local governance.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Meeting-Frequency-in-GramSabha-chart')}
      />

      <Section
        title="Barriers to Gram Sabha Participation"
        content={[
          "The table shows that only 38 of the total respondents answered likely a subset of those who don’t attend meetings. The data reveals a critical divide in Gram Sabha participation barriers. Half of non-attending respondents (50%) cite sheer disinterest as their primary reason, reflecting deep-seated issues like perceived irrelevance of meetings, lack of tangible benefits, or negative past experiences with unresolved grievances. The remaining 50% face practical obstacles: health limitations (26.3%) particularly affect elderly and disabled residents, while personal commitments (23.7%) like work or family responsibilities compete with meeting attendance.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Barriers-to-GramSabha-Participation-chart')}
      />

      <Section
        title="Opinion Inclusion Evaluation"
        content={[
          "The table shows 116, suggesting 4 non-responses from the 120 surveyed. The data reveals that a majority (56.9%) believe their opinions are valued by the Panchayat - suggesting some success in participatory democracy through functional grievance systems and visible policy impact, significant gaps remain. Nearly a third (28.4%) express uncertainty about whether their voices matter, indicating transparency deficits in decision-making processes. Furthermore, 14.7% feel actively excluded, highlighting vulnerable groups at risk of democratic alienation.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Opinion-Inclusion-Evaluation-chart')}
      />

      <Section
        title="Effectiveness of Gram Panchayat in Addressing Local Issues"
        content={[
          "The data reveals overwhelmingly positive perceptions of the Gram Panchayat's effectiveness, with 90% of respondents rating it as either 'Very Effective' (51.7%) or 'Effective' (38.3%), reflecting strong public confidence in local governance. This approval likely stems from successful welfare scheme implementation and responsive grievance redressal systems. However, a critical minority (10%) remains dissatisfied, potentially indicating gaps in service delivery or representation - particularly among non-participants (60% who never attend meetings) and marginalized groups like BPL households (55%), who may have higher expectations due to greater reliance on government services.",
        ]}
        chartData={charts.find(
          (chart) => chart.id === 'Effectiveness-of-GramPanchayat-in-Addressing-Local-Issues-chart'
        )}
      />

      <Section
        title="Panchayat Responsiveness to Village Needs"
        content={[
          "The data reveals that most villagers (66.9%) find their Gram Panchayat fully responsive to local needs, indicating effective grievance systems and community engagement. However, a significant portion (31.4%) reports only partial satisfaction, highlighting needs for more consistent service delivery and equitable attention across all areas. While complete dissatisfaction is minimal (1.7%), even these few cases represent important unmet needs requiring targeted solutions to achieve truly inclusive governance.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Panchayat-Responsiveness-to-Village-Needs-chart')}
      />

      <Section
        title="Identifying Critical Local Issues"
        content={[
          "The data highlights infrastructure deficiency as the most pressing issue in West Kallada, with 45.9% of respondents identifying poor roads, electricity, and public facilities as major concerns. Closely following is unemployment (31.6%), reinforcing earlier findings about joblessness in the area and underscoring the need for vocational training and employment schemes. Water and sanitation challenges (15%) remain significant. While poverty (8.3%) and pollution (4.1%) appear less prominent. The 'other' category (4.2%) indicates potential problems requiring further investigation, presenting a comprehensive picture of development priorities for the Panchayat to address through both immediate interventions and long-term planning.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Local-Issues-in-the-Area-chart')}
      />

      <Section
        title="Public Perception on Gram Panchayat’s Financial Capacity"
        content={[
          "The data reveals a critical gap in public understanding of the Gram Panchayat's financial resources, with a striking 58% of respondents unaware of funding availability - highlighting severe transparency issues in budget communication and limited community engagement in financial planning. While 35% believe funds are sufficient (likely beneficiaries of visible projects or welfare schemes), a small but significant 6.7% explicitly report insufficient funding, potentially reflecting localized neglect or specific unmet needs in certain group. This perception breakdown suggests that most villagers lack the information to assess the Panchayat's fiscal capacity, while those who do engage hold mixed views based on their direct experiences with development outcomes.",
        ]}
        chartData={charts.find(
          (chart) => chart.id === 'Public-Perception-on-GramPanchayat’s-Financial-Capacity-chart'
        )}
      />

      <Section
        title="Community Familiarity with Panchayat Schemes"
        content={[
          "The data reveals a nearly even split in community awareness of Gram Panchayat schemes, with 59 respondents (49.2%) indicating familiarity and 60 (50.8%) reporting no knowledge of Panchayat activities. This polarization suggests significant gaps in the local government's communication strategy, where approximately half the population remains disconnected from development programs meant for their benefit.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Community-Familiarity-with-Panchayat-Schemes-chart')}
      />

      <Section
        title="Public Utilization of Panchayat Programs and Local Development Schemes"
        content={[
          "The data shows that 74.2% of villagers have benefited from Panchayat-led initiatives, indicating effective implementation of welfare schemes like housing, sanitation, and employment programs. However, 25.8% report no benefits, likely due to exclusion errors, lack of awareness, or geographic disparities.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Public-Utilization-of-Panchayat-Programs-chart')}
      />

      <Section
        title="Evaluating Gram Panchayat’s Performance in Education and Healthcare Delivery"
        content={[
          "The data reveals near-universal satisfaction (98.3%) with the Gram Panchayat's education and healthcare services, combining 79.8% 'very satisfied' and 18.5% 'satisfied' responses. This overwhelming approval suggests successful implementation of key initiatives like school infrastructure development, mid-day meal programs, health camps, and vaccination drives. The minimal dissatisfaction (1.7%, representing just 2 respondents) likely stems from isolated issues such as a single underperforming school or individual healthcare access problems, rather than systemic failures.",
        ]}
        chartData={charts.find(
          (chart) => chart.id === 'Performance-in-Education-and-Healthcare-Delivery-chart'
        )}
      />

      <Section
        title="Public Satisfaction with Basic Civic Services"
        content={[
          "The data reveals strong public approval (93.3%) of the Gram Panchayat's basic services, with 37.5% rating them as 'very effective' and 55.8% as 'effective' across road maintenance, water supply, street lighting, and certificate issuance. This indicates generally reliable delivery of core civic amenities. However, a small but notable 6.7% express dissatisfaction, likely reflecting hyper-localized shortcomings such as isolated road defects or administrative delays in specific areas. The findings suggest that while the Panchayat performs well in fundamental service provision overall, targeted improvements could address remaining gaps in particular wards or services to achieve near-universal satisfaction.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Satisfaction-Levels-with-Basic-Civic-Services-chart')}
      />

      <Section
        title="Communication Pathways in Local Governance"
        content={[
          "The data reveals that traditional notice paper (89.2%) remain the dominant channel for Gram Panchayat communications, underscoring continued reliance on physical infrastructure in rural governance outreach. A significant portion of villagers (30.8%) still depend on word-of-mouth from neighbors, asha workers, anganwadi workers or local leaders, indicating trust in interpersonal networks. Meanwhile, social media usage is minimal (13.3%), reflecting both a digital divide that excludes elderly and low-literacy. These findings highlight the need for a hybrid communication strategy that strengthens official notice systems while gradually introducing accessible digital tools to bridge gaps in information accessibility.",
        ]}
        chartData={charts.find((chart) => chart.id === 'Communication-Pathways-in-Local-Governance-chart')}
      />

      <Section
        title="Effectiveness of Panchayat-Villager Communication"
        content={[
          "The data reveals that a strong majority (72.9%) of villagers perceive Gram Panchayat communication as effective, primarily relying on traditional notice boards and word-of-mouth networks. However, a notable 20.3% remain uncertain about communication efficiency, indicating inconsistencies in information updates or lack of confirmation mechanisms. A small but significant minority (6.8%) find the communication completely ineffective, likely representing marginalized groups in remote. The results suggest that while basic information flows work for most, the Panchayat must strengthen feedback loops and diversify channels to reach all demographic segments equitably.",
        ]}
        chartData={charts.find(
          (chart) => chart.id === 'Effectiveness-of-Panchayat-Villager-Communication-chart'
        )}
      />

      <Section
        title="Degree of Responsiveness to the Villagers Concerns and Queries"
        content={[
          "The data indicates that a strong majority (85%) of villagers are satisfied with the Gram Panchayat's responsiveness to their concerns, combining 45% who are 'very satisfied' and 40% who are 'satisfied.' This high approval rating suggests effective grievance redressal systems for routine matters like certificate issuance and road repairs, likely facilitated by accessible complaint submission processes during Gram Sabha meetings. However, a significant minority (15%) remain dissatisfied, primarily due to unresolved complex issues such as electricity or water scarcity, bureaucratic delays in approvals.",
        ]}
        chartData={charts.find(
          (chart) => chart.id === 'Degree-of-Responsiveness-to-the-Villagers-Concerns-and-Queries-chart'
        )}
      />

      <Section
        title="Suggested Improvements for Gram Panchayat Functioning"
        content={[
          "Community-driven recommendations have identified key areas for improving Gram Panchayat operations, blending local perspectives with professional insights. The most pressing need centers on governance transparency, where villagers expect regular home visits by ward representatives to explain development schemes, while governance experts propose implementing online platforms for real-time monitoring of budgets and project progress. This aligns with resident feedback emphasizing the crucial need for 'openness in financial management and program execution.'",
          "Engaging younger community members has surfaced as another vital reform area. Local youth are requesting more accessible communication channels like digital platforms and interactive sessions, with specialists recommending the creation of youth-focused committees to tackle education and employment challenges. As one participant noted, 'The administration must recognize and address the aspirations of our younger generation.'",
          "On-the-ground verification processes have been highlighted as essential, with calls for comprehensive household-level assessments to properly identify beneficiaries. Technology-assisted solutions such as geographic information systems and periodic community surveys could enhance this process. Simultaneously, there's a clear need for better public education about Panchayat operations, with proposed solutions ranging from traditional bulletin boards to modern messaging platforms.",
          "Infrastructure quality has emerged as a major concern, with community members demanding durable construction work, particularly for roads and water systems. Professionals suggest implementing stricter consequences for substandard work, including potential bans on underperforming contractors. People also addressed the need of better transportation facilities to the remote areas of village.",
          "The survey data reveals that the respondents prioritize transparent operations, focus on improved public works and emphasize youth involvement. Adopting these evidence-based improvements would create a more effective, community-oriented local governance system that better serves all residents.",
        ]}
      />

      <Section
        title="Villagers Suggestions in Strengthening Panchayat-Villager Relations"
        content={[
          "The survey responses reveal clear community expectations for improved governance interactions. Villagers want their Panchayat to prioritize open communication, with many suggesting regular updates about activities and decisions through accessible channels like WhatsApp and social media. This digital approach, combined with traditional methods like public notice boards, would ensure all residents - including those without smartphones - stay informed about development projects and welfare schemes.",
          "A recurring theme in the feedback is the need for greater youth involvement in local governance. Respondents propose creating dedicated platforms where young people can contribute ideas and participate in decision-making processes. This could include forming youth committees or organizing skill-building workshops that address employment challenges while fostering civic engagement.",
          "The importance of maintaining continuous engagement emerges strongly from the responses. Villagers expect their elected representatives to maintain regular contact through home visits and community meetings, rather than only appearing during election seasons. Many emphasize that such consistent interaction would build trust and ensure the Panchayat remains responsive to evolving community needs.",
          "Financial transparency surfaces as another critical concern, with residents wanting clearer information about fund allocation and utilization. Implementing simple accountability measures like public expenditure displays and social audits could address these concerns while demonstrating the Panchayat's commitment to responsible governance.",
          "Several respondents highlight the value of awareness campaigns that explain Panchayat functions in accessible terms. Using local language materials and community radio could help bridge information gaps, particularly for elderly residents and those with limited literacy. Such efforts would empower more villagers to actively participate in local development initiatives.",
          "The collective feedback paints a picture of a community eager for more collaborative governance. By implementing these practical suggestions - from digital communication tools to inclusive participation models - Panchayats can transform their relationship with villagers from a top-down administrative dynamic to a genuine partnership in local development. This shift would not only improve service delivery but also strengthen the foundations of grassroots democracy.",
        ]}
      />

      <Section
        title="Conclusion"
        content={[
          "The analysis of Gram Panchayat functioning reveals a clear demographic pattern in civic participation, with middle-aged and working adults (21-60 years) showing significantly higher engagement compared to youth (below 21) and elderly citizens (above 70). This disparity suggests that while economically active groups are effectively reached through current governance mechanisms, systemic barriers prevent meaningful participation from younger and older demographics. The findings highlight several critical areas for improvement, including the need for more transparent communication about Panchayat activities, better implementation of welfare schemes, and enhanced quality control in infrastructure projects. Importantly, the data underscores the necessity of developing age-specific engagement strategies - such as digital platforms for youth and mobile outreach for seniors - to create more inclusive governance structures. These insights provide valuable direction for transforming local governance into a truly representative system that bridges generational divides and ensures all community members have equal opportunities to participate in decision-making processes that affect their lives. By addressing these participation gaps and implementing data-driven solutions, Gram Panchayats can strengthen their effectiveness as democratic institutions at the grassroots level while fostering greater public trust in local governance.",
        ]}
      />

      <Section
        title="References"
        content={[
          "Krishnaswami, O.R. & Ranganathan, M. (2021), Methodology of Research in Social Sciences, Himalaya Publishing House.",
          "Shamoo, A.E., Resnik, B.R. (2003), Responsible Conduct of Research, Oxford University Press.",
          "forms.google.com",
        ]}
      />
    </div>
  );
};

export default DataAnalysis;